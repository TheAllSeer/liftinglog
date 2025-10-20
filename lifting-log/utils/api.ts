import { IP_ADDRESS } from "@/config/api.config";
const API_BASE_URL = `http://${IP_ADDRESS}:3000`;

export const fetchWorkouts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/workouts`);
        if (!response.ok) {
            throw new Error('Failed to fetch workouts');
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching workouts:', e);
        throw e;
    }
};

export const addWorkout = async (workout: { workoutId: string; workoutName: string; workoutDate: Date }) => {
    const formattedDate = workout.workoutDate.toISOString().slice(0, 19).replace('T', ' ');
    try{
        const reqBody = {
            workoutId: workout.workoutId,
            workoutName: workout.workoutName,
            workoutDate: formattedDate,
        };
        const response = await fetch(`${API_BASE_URL}/workouts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqBody)
        })
        if (!response.ok) {
            throw new Error('Failed to add workout');
        }
        const data = await response.json();
        return data;
    }catch(e){
        console.error('Error adding workouts:', e);
        throw e;
    }
}