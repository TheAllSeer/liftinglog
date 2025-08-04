import AsyncStorage from '@react-native-async-storage/async-storage';
import { Workout } from '@/utils/types';
import { weeklyData } from '@/utils/mockData';

const workoutsDataKey = 'workoutsData';



export const workoutStorageService = {
    async loadWorkouts(): Promise<Workout[]> {
        try {
            const data = await AsyncStorage.getItem(workoutsDataKey);
            return data ? JSON.parse(data) : weeklyData;
        } catch (error) {
            console.error('Error loading workouts:', error);
            return [];
        }
    },
    async saveWorkouts(workouts: Workout[]): Promise<void> {
        try {
            await AsyncStorage.setItem(workoutsDataKey, JSON.stringify(workouts));
        } catch (error) {
            console.error('Error saving workouts:', error);
        }
    },
    async addWorkout(workout: Workout): Promise<Workout[]> {
        try {
            const existingWorkouts = await this.loadWorkouts();
            const updatedWorkouts = [...existingWorkouts, workout];
            await this.saveWorkouts(updatedWorkouts);
            return updatedWorkouts;
        } catch (error) {
            console.error('Error adding workout:', error);
            return [];
        }
    },
    async editWorkout(workoutId: string, updatedWorkout: Workout): Promise<Workout[]> {
        try {
            const existingWorkouts = await this.loadWorkouts();
            const workoutIndex = existingWorkouts.findIndex(w => w.workoutId === workoutId);
            
            if (workoutIndex === -1) {
                throw new Error(`Workout with ID ${workoutId} not found`);
            }

            const updatedWorkouts = [...existingWorkouts];
            updatedWorkouts[workoutIndex] = updatedWorkout;
            
            await this.saveWorkouts(updatedWorkouts);
            return updatedWorkouts;
        } catch (error) {
            console.error('Error editing workout:', error);
            return [];
        }
    },
    async deleteWorkout(workoutId: string): Promise<Workout[]> {
        try {
            const existingWorkouts = await this.loadWorkouts();
            const updatedWorkouts = existingWorkouts.filter(w => w.workoutId !== workoutId);
            await this.saveWorkouts(updatedWorkouts);
            return updatedWorkouts;
        } catch (error) {
            console.error('Error deleting workout:', error);
            return [];
        }
    },
    async clearAllWorkouts(): Promise<void> {
        try {
            await AsyncStorage.removeItem(workoutsDataKey);
        } catch (error) {
            console.error('Error clearing workouts:', error);
        }
    }
};