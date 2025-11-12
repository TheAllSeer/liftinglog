import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Pressable, ScrollView, Text, Modal, TextInput, Alert } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { Set, Workout } from '@/utils/types';
import { mockSets } from '@/utils/mockData';
import SetsView from './SetsView';
import SaveWorkout from './SaveWorkout';
import { Exercise } from '@/utils/exercise_enums';
import { AddWorkoutFormProps } from '@/utils/props';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AddWorkoutForm = ({
    onClose, 
    isVisible, 
    onRequestClose, 
    onAddWorkout,
    editingWorkout, 
    onEditWorkout,
    onDeleteWorkout
}: AddWorkoutFormProps) => {
    
    const [sets, setSets] = useState<Set[]>([]);
    const [showAddSetModal, setShowAddSetModal] = useState(false);
    const [workoutName, setWorkoutName] = useState(editingWorkout?.workoutName || '');

    // Pre-fill form when editing, reset when adding new
    useEffect(() => {
        if (editingWorkout) {
            // We're editing - pre-fill with existing data
            setSets(editingWorkout.sets);
            setWorkoutName(editingWorkout.workoutName);
        } else {
            // We're adding new - reset to defaults
            setSets([]);
            setWorkoutName('');
        }
    }, [editingWorkout]);

    const handleAddSet = () => {
        const newSet: Set = {
            weight: { amount: 0, type: 'kgs' },
            reps: 0,
            exerciseName: Exercise.DEFAULT,
            isSuperSet: false
        };
        setSets([...sets, newSet]);
    };

    const handleSetUpdate = (index: number, updatedSet: Set) => {
        setSets(prevSets => 
            prevSets.map((set, i) => i === index ? updatedSet : set)
        );
    };

    const handleDeleteSet = (index: number) => {
        setSets(prevSets => prevSets.filter((_, i) => i !== index));
    };

    const handleReset = () => {
        if (editingWorkout) {
            // Reset to original values
            setSets(editingWorkout.sets);
            setWorkoutName(editingWorkout.workoutName);
        } else {
            // Reset to empty/default
            setSets([]);
            setWorkoutName('');
        }
    };
    const handleSave = () => {
        const hasInvalidExercise = sets.some(set => set.exerciseName === Exercise.DEFAULT);
    
        if (hasInvalidExercise) {
            alert('Please select an exercise for all sets before saving');
            return; // Don't save, don't close, don't lose progress
        }
        const workoutData: Workout = {
            workoutId: editingWorkout?.workoutId || `workout_${Date.now()}`,
            workoutName: workoutName || 'Untitled Workout',
            workoutDate: editingWorkout?.workoutDate || new Date(),
            sets: sets
        };
        if (editingWorkout) {
            onEditWorkout(workoutData);
        } else {
            onAddWorkout(workoutData);
        }
    };

    const handleDelete = () => {
        if (editingWorkout && onDeleteWorkout) {
            Alert.alert(
                'Delete Workout',
                'Are you sure you want to delete this workout? This action cannot be undone.',
                [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Delete',
                        style: 'destructive',
                        onPress: () => onDeleteWorkout(editingWorkout.workoutId)
                    }
                ]
            );
        }
    };

    return (
        <Modal 
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}>
            <Pressable style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}} onPress={onClose}>
                <Pressable onPress={(e) => e.stopPropagation()} style={[wfStyles.workoutFormContainer]}>
                    <ScrollView style={[{flex:1}]}>
                        <View style={{alignItems:'center'}}>
                            <Text style={[styles.baseText, wfStyles.workoutFormHeader]}>
                                {editingWorkout ? 'Edit Workout' : 'Add Workout'}
                            </Text>
                        </View>
                        
                        <View style={formStyles.workoutNameContainer}>
                            <Text style={[styles.baseText, formStyles.label]}>Workout Name</Text>
                            <TextInput
                                style={[styles.baseText, formStyles.workoutNameInput]}
                                value={workoutName}
                                onChangeText={setWorkoutName}
                                placeholder="Enter workout name..."
                                placeholderTextColor="#808080"
                            />
                        </View>

                        <SetsView 
                            sets={sets} 
                            onSetUpdate={handleSetUpdate} 
                            onAddSet={handleAddSet}
                            onDeleteSet={handleDeleteSet}
                        />

                        {/* Delete button - only show when editing */}
                        {editingWorkout && onDeleteWorkout && (
                            <Pressable 
                                style={[wfStyles.deleteButton]} 
                                onPress={handleDelete}
                            >
                                <Text style={[styles.baseText, wfStyles.deleteButtonText]}>
                                    Delete Workout
                                </Text>
                            </Pressable>
                        )}
                    </ScrollView>
                    
                    <SaveWorkout 
                        onReset={handleReset} 
                        onSave={handleSave}
                    />
                </Pressable>
            </Pressable>
        </Modal>
    );
};

const wfStyles = StyleSheet.create({
    workoutFormHeader:{
        textAlign:'center',
        fontWeight:'600',
        fontSize:24,
        borderBottomWidth:.5,
        borderBottomColor:trademarks.white,
        width:screenWidth*0.95,
        marginBottom:15
    },
    workoutFormContainer:{
        position:'absolute',
        bottom:0,
        height:screenHeight*0.6,
        width:screenWidth,
        backgroundColor:trademarks.black,
        zIndex:2147483647,
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    deleteButtonText: {
        color: trademarks.white,
        fontWeight: '600',
        fontSize: 16,
    },
});

const formStyles = StyleSheet.create({
  workoutNameContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: trademarks.white,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  workoutNameInput: {
    borderWidth: 1,
    borderColor: trademarks.white,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});

export default AddWorkoutForm;