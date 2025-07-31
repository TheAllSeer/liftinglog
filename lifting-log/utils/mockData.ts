import { Set } from "./types"

const set1 = {
        reps:5,
        exerciseName:"Bicep Curls",
        weight:{
            amount:50,
            type:"kgs"
        }
        
    }

export const twoSets:Set[] = [
    {
            reps:7,
            exerciseName:"Squats",
            weight:{
                amount:55,
                type:"kgs"
            },
            isSuperSet:false
}];

