import { Set, Workout } from "./types";


export interface WeeklyNavigatorProps {
  date: Date;
  setDate: (date: Date) => void;
}
export interface WeeklyVolumeProps {
    workouts: Workout[];
}

export interface TopFiveProps {
    workouts: Workout[];
}

export interface LiftLogProps {
    workouts: Workout[];
    onDeleteWorkout: (workoutId:string) =>Promise<void>;
    onStartEditWorkout:(workoutId:string) =>void;
    onEditWorkout: (workoutId: string, updatedWorkout: Workout) =>void;
}
export interface LiftCardProps {
  entry:Workout;
  onEdit : (workoutId:string) => void;
  onDelete : (workoutId:string)=>void;
}






export interface AddLiftButtonProps {
  onPress: () => void;
}

export interface AddWorkoutFormProps {
    onClose: () => void;
    isVisible: boolean;
    onRequestClose: () => void;
    onAddWorkout: (workout: Workout) => void;
    onEditWorkout: (workoutId: string, workout: Workout) => void;
    editingWorkout?: Workout | null;
}

export interface SetsViewProps {
    sets:Set[];
    onAddSet:()=>void;
    onSetUpdate: (index: number, updatedSet: Set) => void;
}


export interface WeightTypeSwitchProps {
    weightType: Set["weight"]['type']
    onTypeChange: (type: Set["weight"]['type']) => void;
}

export interface AddSetProps {
  onAddSet: () => void;
}

export interface AddSetModalProps {
  visible: boolean;
  onClose: () => void;
  onAddSet: (set: { exerciseName: string; reps: number; weight: { amount: number; type: 'kgs' | 'lbs' } }) => void;
}

export interface SaveWorkoutButtonProps {
  onSave: () => void;
  onReset: () => void;
  isLoading?: boolean;
}


export interface singleSetViewProps {
  set:Set;
  setIndex:number;
  onSetUpdate: (index: number, updatedSet: Set) => void;
}

export interface NumberInputBoxProps {
  inputNumber?:number;
  onChange: (value:number)=>void;
}