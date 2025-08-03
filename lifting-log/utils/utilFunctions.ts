import { Set, Workout } from "./types";
import {exerciseToMuscleGroup} from '@/utils/exerciseMapping'
export function generateIdFromTimestamp(): string {
    const now = new Date();
    return now.getTime().toString();
}

export function sendLog(log:string){
    console.log(`[lift-log-log] : ${log}`)
}


export function mergeTwoVolumeObjects(obj1: Record<string, number>, obj2: Record<string, number>){
    const newObj: Record<any, number> = obj1;
    Object.keys(obj2).forEach((key)=>{
        const value = obj2[key];
        if (!newObj.hasOwnProperty(key)){
            Object.assign(newObj, {[key]:value});
        }else{
            newObj[key] += obj2[key]
        }
    })
    return newObj;
}
export function calculateWorkoutVolume(workout:Workout){
    let volume:Record<string, number> = {};
    workout.sets.forEach((set)=>{
        const muscleMap = exerciseToMuscleGroup[set.exerciseName];
            if (!muscleMap){
                sendLog('muscle map not found.')
                return;
            };
            muscleMap.primary.forEach((muscle)=>{
                volume[muscle] = volume[muscle] + (set.reps * set.weight.amount * 1) || (set.reps * set.weight.amount * 1);
            })
            muscleMap.secondary.forEach((muscle)=>{
                volume[muscle] = volume[muscle] + (set.reps * set.weight.amount * 0.5) || (set.reps * set.weight.amount * 0.5);
            })
    })
    return volume;
    
}
