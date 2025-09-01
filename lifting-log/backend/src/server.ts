import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { INIT_QUERIES, API_QUERIES } from "./utils/db-enums";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'lifting_log'
}
//@ts-ignore
let db;


async function initDb(){
    try{
        console.log('connecting to db')
        db = await mysql.createPool({
            ...dbConfig,
            waitForConnections:true,
            connectionLimit: 10,
            queueLimit: 0
        });
        console.log('successfully connected to mysql db');
        await db.execute(INIT_QUERIES.CREATE_WORKOUTS_TABLE)
        await db.execute(INIT_QUERIES.CREATE_SETS_TABLE)
        await db.execute(INIT_QUERIES.CREATE_SUPERSETS_TABLE)
        await db.execute(INIT_QUERIES.CREATE_SYNC_METADATA_TABLE)
        await db.execute(INIT_QUERIES.INIT_SYNC_METADATA_TABLE)
        console.log('DB initialized');

    }catch(e){
        console.error('womp womp', (e as Error).message);
        process.exit(1);
    }
}
//@ts-ignore
function buildWorkoutFromRows(workoutRows){
    const workoutsMap = new Map();
    for (const row of workoutRows){
        if (!workoutsMap.has(row.workout_id)){
            workoutsMap.set(row.workout_id, {
                workoutId:row.workout_id,
                workoutDate:row.workout_date,
                workoutName:row.workout_name,
                sets:[]
            })
        };

        const workout = workoutsMap.get(row.workout_id);
        if (row.set_id){
            const set = {
                weight:{
                    amount:parseFloat(row.weight_amount),
                    type: row.weight_type
                },
                reps: row.reps,
                exerciseName: row.exercise_name,
                isSuperSet: row.is_super_set
            };

            if (row.is_super_set && row.super_exercise_name){
                //@ts-ignore
                set.superSet = {
                    weight:{
                        amount: parseFloat(row.super_weight_amount),
                        type: row.super_weight_type
                    },
                    reps: row.super_reps,
                    exerciseName: row.super_exercise_name
                }
            };
            workout.sets.push(set);
        };

    }
    return Array.from(workoutsMap.values());
}

// routes
//@ts-ignore
app.get('/api/health', (req, res)=>{
    res.json({
        status: 'server is running', 
        timestamp: new Date().toISOString() 
    })
});

// get all workouts
//@ts-ignore
app.get('/api/workouts', async (req, res) =>{
    try{
        //@ts-ignore
        const [rows] = await db.execute(API_QUERIES.GET_WORKOUTS);
        const workouts = buildWorkoutFromRows(rows);
        res.json({
            workouts, 
            serverTimestamp: Date.now()
        });
    }catch(e){
        console.error('womp womp', (e as Error).message);
        res.status(500).json({ error: 'Failed to sync workouts' });
    }
});


// get all workouts based on timestamp sync
//@ts-ignore
app.get('/api/workouts/sync/:lastSyncTimestamp', async (req, res)=>{
    try{
        const lastSync = new Date(parseInt(req.params.lastSyncTimestamp));
        //@ts-ignore
        const [rows] = await db.execute(API_QUERIES.GET_WORKOUTS_WITH_SYNC, [lastSync]);
        const workouts = buildWorkoutFromRows(rows);
        res.json({
            workouts, 
            serverTimestamp: Date.now()
        });
    }catch(e){
        console.error('womp womp', (e as Error).message);
        res.status(500).json({ error: 'Failed to sync workouts' });
    }
});

//create new workout
//@ts-ignore
app.post('/api/workouts', async (req, res)=>{
    //@ts-ignore
    const connection = await db.getConnection();
    try{
        await connection.beginTransaction();
        const { workoutId, workoutName, workoutDate, sets } = req.body;
        const id = workoutId || uuidv4();
        await connection.execute(
            API_QUERIES.CREATE_WORKOUT,
            [id, workoutName, workoutDate, 'default_user']
        );
        for (let i = 0; i < sets.length; i++){
            const set = sets[i];
            const setId = uuidv4();
            await connection.execute(API_QUERIES.CREATE_SET, [
                setId, id, i + 1, set.exerciseName, 
                set.weight.amount, set.weight.type, set.reps, set.isSuperSet
            ]);

            if (set.isSuperSet && set.superSet){
                await connection.execute(API_QUERIES.CREATE_SUPERSET, [
                    uuidv4(), setId, set.superSet.exerciseName,
                    set.superSet.weight.amount, set.superSet.weight.type, set.superSet.reps
                ])
            }
        };
        await connection.commit();
        res.status(201).json({
            success: true, 
            workoutId: id,
            serverTimestamp: Date.now()
        })

    }catch(e){
        await connection.rollback();
        console.error('womp womp', (e as Error).message);
        res.status(500).json({ error: 'error creating workout' });
    }
    finally {
        connection.release();
    }
});


// update workout

//@ts-ignore
app.put('/api/workouts/:id', async (req, res)=>{
    //@ts-ignore
    const connection = await db.getConnection();
    try{

        await connection.beginTransaction();
        const {id} = req.params;
        const { workoutName, workoutDate, sets } = req.body;
        const [workoutRows] = await connection.execute(API_QUERIES, [id])
        if (workoutRows.length === 0) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        const currentWorkout = workoutRows[0];
        let workoutMetadataChanged = false;
        if (currentWorkout.workout_name !== workoutName || 
        new Date(currentWorkout.workout_date).toISOString().split('T')[0] !== new Date(workoutDate).toISOString().split('T')[0]) {
            await connection.execute(API_QUERIES.UPDATE_WORKOUT_METADATA_BY_ID, [workoutName, workoutDate, id]);
            workoutMetadataChanged = true;
        }
        // due to low scale, and low amount of attempts to update a workout,
        // when editing workout, deleting all sets and reacreating them

        await connection.execute(API_QUERIES.DELETE_SUPERSETS_BY_WORKOUT_ID, [id]);
        await connection.execute(API_QUERIES.DELETE_SETS_BY_WORKOUT_ID, [id]);
        for(let i = 0; i < sets.length; i++){
            const set = sets[i];
            const setId = uuidv4();
            await connection.execute(API_QUERIES.CREATE_SET, [
                setId, id, i + 1, set.exerciseName,     
                set.weight.amount, set.weight.type, set.reps, set.isSuperSet 
            ]);
            if (set.isSuperSet && set.superSet){
                await connection.execute(API_QUERIES.CREATE_SUPERSET,[
                    uuidv4(), setId, set.superSet.exerciseName,
                    set.superSet.weight.amount, set.superSet.weight.type, set.superSet.reps
                ]);
            }
        }
        await connection.commit();
        res.json({ 
            success: true,
            serverTimestamp: Date.now(),
            changes: {
                workoutMetadata: workoutMetadataChanged,
                setsRecreated: sets.length
            }
        });
    }catch(e){
        await connection.rollback();
        console.error('womp womp', (e as Error).message);
        res.status(500).json({ error: 'error updating workout' });
    }finally {
        connection.release();
    }

});

app.delete('/api/workouts/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        //@ts-ignore
        const [result] = await db.execute(API_QUERIES.SET_WORKOUT_DELETED,[id])
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.json({ 
            success: true,
            serverTimestamp: Date.now()
        });
    }catch(e){
        console.error('womp womp', (e as Error).message);
        res.status(500).json({ error: 'failed to delete workout' });
    }
})



initDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
        console.log(`💪 Workouts API: http://localhost:${PORT}/api/workouts`);
    })
})