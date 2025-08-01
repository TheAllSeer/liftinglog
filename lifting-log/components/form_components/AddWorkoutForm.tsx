import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Pressable, ScrollView, Text, Modal } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { Set, Workout } from '@/utils/types';
import AddSetModal from './AddSetModal';
import { mockSets } from '@/utils/mockData';
import SetsView from './SetsView';
import SaveWorkout from './SaveWorkout';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface AddWorkoutFormProps {
    onClose: () => void;
    isVisible: boolean;
    onRequestClose: () => void;
    onAddWorkout: (workout: Workout) => void;
    onEditWorkout: (workoutId: string, workout: Workout) => void;
    editingWorkout?: Workout | null;
}

const AddWorkoutForm = ({
    onClose, 
    isVisible, 
    onRequestClose, 
    onAddWorkout, 
    onEditWorkout, 
    editingWorkout
}: AddWorkoutFormProps) => {
    
    const [sets, setSets] = useState<Set[]>(mockSets);
    const [showAddSetModal, setShowAddSetModal] = useState(false);
    const [workoutName, setWorkoutName] = useState('');

    // Pre-fill form when editing, reset when adding new
    useEffect(() => {
        if (editingWorkout) {
            // We're editing - pre-fill with existing data
            setSets(editingWorkout.sets);
            setWorkoutName(editingWorkout.workoutName);
        } else {
            // We're adding new - reset to defaults
            setSets(mockSets);
            setWorkoutName('');
        }
    }, [editingWorkout]);

    const handleAddSet = (newSet: Set) => {
        setSets([...sets, newSet]);
    };

    const handleSetUpdate = (index: number, updatedSet: Set) => {
        setSets(prevSets => 
            prevSets.map((set, i) => i === index ? updatedSet : set)
        );
    };

    const handleSave = () => {
        // Create workout object from current form data
        const workoutData: Workout = {
            workoutId: editingWorkout?.workoutId || `workout_${Date.now()}`, // Use existing ID or generate new
            workoutName: workoutName || 'Untitled Workout',
            workoutDate: editingWorkout?.workoutDate || new Date(), // Keep original date if editing
            sets: sets
        };

        if (editingWorkout) {
            // We're editing an existing workout
            onEditWorkout(editingWorkout.workoutId, workoutData);
        } else {
            // We're adding a new workout
            onAddWorkout(workoutData);
        }
    };

    const handleReset = () => {
        if (editingWorkout) {
            // Reset to original values
            setSets(editingWorkout.sets);
            setWorkoutName(editingWorkout.workoutName);
        } else {
            // Reset to empty/default
            setSets(mockSets);
            setWorkoutName('');
        }
    };

    return (
        <Modal 
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}>
            <Pressable style={{flex: 1}} onPress={onClose}>
                <Pressable onPress={() => {}} style={[wfStyles.workoutFormContainer]}>
                    <ScrollView style={[{flex:1}]}>
                        <View style={{alignItems:'center'}}>
                            <Text style={[styles.baseText, wfStyles.workoutFormHeader]}>
                                {editingWorkout ? 'Edit Workout' : 'Add Workout'}
                            </Text>
                        </View>
                        
                        {/* You might want to add a workout name input here */}
                        <View style={{paddingHorizontal: 16, marginBottom: 16}}>
                            <Text style={[styles.baseText, {fontSize: 18, marginBottom: 8}]}>
                                {workoutName || 'Workout Name'}
                            </Text>
                        </View>

                        <SetsView 
                            sets={sets} 
                            onSetUpdate={handleSetUpdate} 
                            onAddSet={() => {}} 
                        />
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
});

export default AddWorkoutForm;