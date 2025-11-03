import { IP_ADDRESS, IP_ADDRESS_TRAIN } from "@/config/api.config";
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

export const addWorkout = async (workout: { workoutId: string; workoutName: string; workoutDate: Date; sets:any[] }) => {
    const formattedDate = workout.workoutDate.toISOString().slice(0, 19).replace('T', ' ');
    try{
        const reqBody = {
            workoutId: workout.workoutId,
            workoutName: workout.workoutName,
            workoutDate: formattedDate,
            sets:workout.sets
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

export const updateWorkout = async (workout: { workoutId: string; workoutName: string; workoutDate: Date; sets:any[] })=>{
    const formatDate = (date: Date | string) => {
        const dateObj = date instanceof Date ? date : new Date(date);
        return dateObj.toISOString().slice(0, 19).replace('T', ' ');
    };
    try{
        const reqBody = {
            workoutId: workout.workoutId,
            workoutName: workout.workoutName,
            workoutDate: formatDate(workout.workoutDate),
            sets:workout.sets
        };
        const response = await fetch(`${API_BASE_URL}/workouts/${workout.workoutId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqBody)
        });
        if (!response.ok) {
            throw new Error('Failed to update workout');
        }
        const data = await response.json();
        return data;
    }catch(e){
        console.error('Error updating workouts:', e);
        throw e;
    }
}

export const deleteWorkout = async (workoutId:string) =>{
    try{
        const response = await fetch(`${API_BASE_URL}/workouts/${workoutId}`, {
            method:'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete workout');
        }
        const data = await response.json();
        return data;
        
    }catch(e){
        console.error('Error deleting workout:', e);
        throw e;
    }
}
export const clearData = async () =>{
    try{
        const response = await fetch(`${API_BASE_URL}/delete-all-data`, {
            method:'DELETE'
        });
        if (!response.ok){
            throw new Error('Failed to clear data')
        }
    }catch(e){
        console.error('error deleting workouts: ', e);
        throw e;
    }
}