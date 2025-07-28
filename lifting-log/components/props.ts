export interface AddLiftButtonProps {
  onPress: () => void;
}

export interface AddWorkoutFormProps {
    onClose: ()=>void;
    isVisible:boolean;
    onRequestClose : ()=>void;
}

export interface SetsViewProps {
    sets:Set[];
    onAddSet:()=>void;
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

export interface NumberInputBoxProps {
  inputNumber?:number;
  onChange: (value:number)=>void;
}