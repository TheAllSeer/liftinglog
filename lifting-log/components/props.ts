export interface AddLiftButtonProps {
  onPress: () => void;
}

export interface AddWorkoutFormProps {
    onClose: ()=>void;
    isVisible:boolean;
    onRequestClose : ()=>void;
}

export interface SetsViewProps {
    sets:Set[]
}

export interface Set {
  weight: {
    amount: number;
    type: 'kgs' | 'lbs';
  };
  reps: number;
  exerciseName:string;
}