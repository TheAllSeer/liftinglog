import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import cors from 'cors';

import pool from './db';
import { CREATE_WORKOUTS_TABLE, GET_ALL_WORKOUTS, INSERT_WORKOUT } from './queries';
import { testConnection } from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server is running!' });
});

app.get('/workouts', async (req:Request, res:Response) =>{
    try{
        const [workouts] = await pool.query(GET_ALL_WORKOUTS);
        res.json(workouts);

    }catch(e){
        console.error('error fetching workouts', e);
        res.status(500).json({ error: 'Failed to fetch workouts' });
    }
})

app.post('/workouts', async (req:Request, res:Response) =>{
    try{
        const {workoutName, workoutDate, workoutId} = req.body;
        if (!workoutDate || !workoutId || !workoutName){
            return res.status(400).json({ error: 'Missing required fields' });
        };
        await pool.query(INSERT_WORKOUT, [workoutId, workoutName, workoutDate]);
        res.status(201).json({ 
            message: 'Workout created successfully',
            workoutId 
        });

    }catch(e){
        console.error('error creating workouts', e);
        res.status(500).json({ error: 'Failed to create workouts' });
    }
})




const initDb = async () => {
    try {
        await pool.query(CREATE_WORKOUTS_TABLE);
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
