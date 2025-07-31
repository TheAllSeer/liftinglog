export interface Set {
    weight: {
      amount: number;
      type: 'kgs' | 'lbs';
    };
    reps: number;
    exerciseName:string;
    isSuperSet:boolean;
    superSet?:superSet;
}
export interface superSet {
    weight: {
      amount: number;
      type: 'kgs' | 'lbs';
    };
    reps: number;
    exerciseName:string;
}


export interface Workout {
  workoutName:string;
  workoutId:string;
  workoutDate:Date;
  sets:Set[];
}