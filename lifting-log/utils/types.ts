import {MuscleGroup, Exercise, exerciseToMuscleGroup} from '@/utils/exercise_enums'
export interface Set {
    weight: {
      amount: number;
      type: 'kgs' | 'lbs';
    };
    reps: number;
    exerciseName:Exercise;
    isSuperSet:boolean;
    superSet?:superSet;
}
export interface superSet {
    weight: {
      amount: number;
      type: 'kgs' | 'lbs';
    };
    reps: number;
    exerciseName:Exercise;
}

export type volumeData = Partial<Record<MuscleGroup, number>>;



export interface Workout {
  workoutName:string;
  workoutId:string;
  workoutDate:Date;
  sets:Set[];
}