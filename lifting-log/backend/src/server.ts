import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import cors from 'cors';

import pool from './db';
import { CREATE_WORKOUTS_TABLE, CREATE_SETS_TABLE, GET_ALL_WORKOUTS, GET_SETS_BY_WORKOUT, INSERT_WORKOUT, INSERT_SET } from './queries';
import { testConnection } from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server is running!' });
});

// Get all workouts with their sets
app.get('/workouts', async (req: Request, res: Response) => {
    try {
        // Get all workouts
        const [workouts] = await pool.query(GET_ALL_WORKOUTS);
        
        // Get sets for each workout
        const workoutsWithSets = await Promise.all(
            (workouts as any[]).map(async (workout) => {
                const [sets] = await pool.query(GET_SETS_BY_WORKOUT, [workout.workoutId]);
                
                // Format sets to match your app's structure
                const formattedSets = (sets as any[]).map(set => ({
                    exerciseName: set.exerciseName,
                    reps: set.reps,
                    weight: {
                        amount: set.weight_amount,
                        type: set.weight_type
                    },
                    isSuperSet: set.is_superset,
                    parent_set_id: set.parent_set_id
                }));
                
                return {
                    ...workout,
                    sets: formattedSets
                };
            })
        );
        
        res.json(workoutsWithSets);
    } catch (error) {
        console.error('Error fetching workouts:', error);
        res.status(500).json({ error: 'Failed to fetch workouts' });
    }
});

// Add a new workout with sets
app.post('/workouts', async (req: Request, res: Response) => {
    const connection = await pool.getConnection();
    
    try {
        const { workoutId, workoutName, workoutDate, sets } = req.body;
        
        // Validate required fields
        if (!workoutId || !workoutName || !workoutDate) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Start transaction
        await connection.beginTransaction();
        
        // Insert workout
        await connection.query(INSERT_WORKOUT, [workoutId, workoutName, workoutDate]);
        
        // Insert sets if provided
        if (sets && sets.length > 0) {
            for (let i = 0; i < sets.length; i++) {
                const set = sets[i];
                const setId = `set_${Date.now()}_${i}`;
                
                await connection.query(INSERT_SET, [
                    setId,
                    workoutId,
                    set.exerciseName,
                    set.reps,
                    set.weight.amount,
                    set.weight.type,
                    i, // set_order
                    set.isSuperSet || false,
                    set.parent_set_id || null
                ]);
            }
        }
        
        // Commit transaction
        await connection.commit();
        
        res.status(201).json({ 
            message: 'Workout created successfully',
            workoutId 
        });
    } catch (error) {
        // Rollback on error
        await connection.rollback();
        console.error('Error creating workout:', error);
        res.status(500).json({ error: 'Failed to create workout' });
    } finally {
        connection.release();
    }
});





const initDb = async () => {
    try {
        await pool.query(CREATE_WORKOUTS_TABLE);
        await pool.query(CREATE_SETS_TABLE);
        console.log('✓ Database tables initialized');
    } catch (error) {
        console.error('✗ Database initialization failed:', error);
    }
};

app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    // await testConnection();
    await initDb();
});
