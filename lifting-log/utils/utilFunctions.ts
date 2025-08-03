import { PieChartProps } from "react-native-chart-kit/dist/PieChart";
import { groupColors } from "./chartColors";
import { Set, volumeData, Workout } from "./types";
import styles, {trademarks} from '@/styles/general';
// import {exerciseToMuscleGroup} from '@/utils/exerciseMapping'
import {MuscleGroup, Exercise, exerciseToMuscleGroup} from '@/utils/exercise_enums'
export function generateIdFromTimestamp(): string {
    const now = new Date();
    return now.getTime().toString();
}

export function sendLog(log:string){
    console.log(`[lift-log-log] : ${log}`)
}


export function mergeTwoVolumeObjects(obj1: volumeData, obj2: volumeData) : volumeData{
    const newObj: volumeData = { ...obj1 };
    
    Object.entries(obj2).forEach(([key, value]) => {
        const MuscleKey = key as MuscleGroup;
        newObj[MuscleKey] = (newObj[MuscleKey] || 0) + value;
    });
    return newObj;
}

export function calculateWorkoutVolume(workout:Workout){
    let volume:volumeData = {};
    workout.sets.forEach((set)=>{
        const muscleMap = exerciseToMuscleGroup[set.exerciseName];
            if (!muscleMap){
                sendLog('muscle map not found.')
                return;
            };
            muscleMap.primary.forEach((muscle)=>{
                const muscleKey = muscle as MuscleGroup
                volume[muscleKey] = volume[muscleKey] ? volume[muscleKey] + (set.reps * set.weight.amount * 1) : (set.reps * set.weight.amount * 1);
            })
            muscleMap.secondary.forEach((muscle)=>{
                const muscleKey = muscle as MuscleGroup
                volume[muscleKey] = volume[muscleKey] ? volume[muscleKey] + (set.reps * set.weight.amount * 0.5) : (set.reps * set.weight.amount * 0.5);
            })
    })
    return volume;
    
}
export function calculateWeeklyVolume(workouts:Workout[]): volumeData{
    let weeklyVolume:volumeData = {};
    workouts.forEach((workout)=>{
        weeklyVolume = mergeTwoVolumeObjects(calculateWorkoutVolume(workout), weeklyVolume);
    });
    return weeklyVolume;
}
export function getTotalVolume(data:volumeData):number{
    return Object.values(data).reduce((sum, value) => sum + (value || 0), 0);
};

export function convertVolumeDataToPieChart(volumeData:volumeData, isPct?:true):PieChartProps["data"]{
    let pieChartData:PieChartProps["data"] = [];
    const legendFontColor = styles.baseText.color;
    const legendFontSize = 12;
    Object.keys(volumeData).forEach((key)=>{
        const muscleKey = key as MuscleGroup
        const muscleGroupVolume:number = volumeData[muscleKey] || 0;
        
        const totalVolume:number = getTotalVolume(volumeData);
        pieChartData.push({
            name:isPct ? '% | ' + key : key,
            population:isPct ? Math.floor(muscleGroupVolume/totalVolume * 100) : muscleGroupVolume,
            color:groupColors[muscleKey],
            legendFontColor,
            legendFontSize
        });
    })
    return pieChartData;
}