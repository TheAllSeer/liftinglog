import { useState, useEffect } from 'react';
import { workoutStorageService } from '@/services/workoutStorage';
import { Workout } from '@/utils/types';

export const useWorkouts = ()=>{
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        loadWorkouts();
    }, []);
    const loadWorkouts = async ()=>{
        setIsLoading(true);
        try{
            const loadedWorkouts = await workoutStorageService.loadWorkouts();
            setWorkouts(loadedWorkouts);
        } catch(error){
            console.log('failed to load workouts:', error);
        } finally{
            setIsLoading(false);
        };
    };
    const addWorkout = async (workout: Workout) => {
        try {
            const updatedWorkouts = await workoutStorageService.addWorkout(workout);
            setWorkouts(updatedWorkouts);
            return true;
        } catch (error) {
            console.error('Failed to add workout:', error);
            return false;
        }
    };
    const editWorkout = async (workoutId: string, updatedWorkout: Workout) => {
        try {
            const updatedWorkouts = await workoutStorageService.editWorkout(workoutId, updatedWorkout);
            setWorkouts(updatedWorkouts);
            return true;
        } catch (error) {
            console.error('Failed to edit workout:', error);
            return false;
        }
    };
    const deleteWorkout = async (workoutId: string) => {
        try {
            const updatedWorkouts = await workoutStorageService.deleteWorkout(workoutId);
            setWorkouts(updatedWorkouts);
            return true;
        } catch (error) {
            console.error('Failed to delete workout:', error);
            return false;
        }
    };
    const getWorkoutById = (workoutId: string): Workout | undefined => {
        return workouts.find(workout => workout.workoutId === workoutId);
    };
    const getWorkoutsByDateRange = (startDate: Date, endDate: Date): Workout[] => {
        return workouts.filter(workout => {
            const workoutDate = new Date(workout.workoutDate);
            return workoutDate >= startDate && workoutDate <= endDate;
        });
    };
    return {
        workouts,
        isLoading,
        addWorkout,
        editWorkout,
        deleteWorkout,
        refreshWorkouts: loadWorkouts,
        getWorkoutById,
        getWorkoutsByDateRange
    };

};

