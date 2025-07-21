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

export interface WeightTypeSwitchProps {
    weightType: Set["weight"]['type']
    onTypeChange: (type: Set["weight"]['type']) => void;
}

export interface AddSetProps {
  onAddSet: () => void;
}