import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import WeekNavigator from '@/components/WeekNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeeklyVolume from '@/components/WeeklyVolume';
import TopFive from '@/components/TopFive';
import LiftsLog from '@/components/LiftsLog';
import AddLiftButton from '@/components/AddLiftButton';
import PersonalRecords from '@/components/PersonalRecords';
import PersonalTrainer from '@/components/PersonalTrainer';
import NavButtons from '@/components/NavButtons'
import AddWorkoutForm from '@/components/form_components/AddWorkoutForm'
import BackDrop from '@/components/util_components/BackDrop';
import { Workout } from '@/utils/types';
import { useWorkouts } from '@/hooks/useWorkouts';
import { weeklyData } from '@/utils/mockData';
import { sendLog } from '@/utils/utilFunctions';


const Home = () => {
    sendLog('Home initialized.')
    const [isWorkoutFormVisible, setIsWorkoutFormVisible] = useState(false);
    const [editingWorkout, setEditingWorkout] = useState<Workout | null>(null);
    const { 
        workouts, 
        isLoading, 
        addWorkout, 
        editWorkout, 
        deleteWorkout,
        getWorkoutById 
    } = useWorkouts();
    const HandleOnCloseForm = () => {
        setIsWorkoutFormVisible(false);
        setEditingWorkout(null);
    };

    const HandleOnOpenForm = () => {
        setEditingWorkout(null); // Clear any editing workout when opening for new workout
        setIsWorkoutFormVisible(true);
    };

    const HandleAddWorkout = async (newWorkout: Workout) => {
        const success = await addWorkout(newWorkout);
        if (success) {
            setIsWorkoutFormVisible(false);
            setEditingWorkout(null);
        }
    };

    const HandleEditWorkout = async (workoutId: string, updatedWorkout: Workout) => {
        const success = await editWorkout(workoutId, updatedWorkout);
        if (success) {
            setIsWorkoutFormVisible(false);
            setEditingWorkout(null);
        }
    };

    const HandleDeleteWorkout = async (workoutId: string) => {
        // Maybe show confirmation dialog first
        const success = await deleteWorkout(workoutId);
        // Maybe show success/error message
    };

    const HandleStartEdit = (workoutId: string) => {
        const workout = getWorkoutById(workoutId);
        if (workout) {
            setEditingWorkout(workout);
            setIsWorkoutFormVisible(true);
        }
    };

    if (isLoading) {
        return (
            <View style={[styles.base, {flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                <Text style={[styles.baseText]}>Loading workouts...</Text>
            </View>
        );
    }

    return <View style={[styles.base, {flex: 1}]}>
            <ScrollView>
                <WeekNavigator />
                <WeeklyVolume workouts={workouts} />
                <TopFive workouts={workouts} />
                <LiftsLog 
                    workouts={workouts} 
                    onDeleteWorkout={HandleDeleteWorkout}
                    onEditWorkout={HandleStartEdit}
                />
                <PersonalRecords/>
                <PersonalTrainer />
            </ScrollView>

            {isWorkoutFormVisible && (
                <AddWorkoutForm 
                    onRequestClose={HandleOnCloseForm} 
                    isVisible={isWorkoutFormVisible} 
                    onClose={HandleOnCloseForm}
                    onAddWorkout={HandleAddWorkout}
                    onEditWorkout={HandleEditWorkout}
                    editingWorkout={editingWorkout}
                />
            )}

            {!isWorkoutFormVisible && (
                <AddLiftButton onPress={HandleOnOpenForm} />
            )}
        </View>
    };
    export default Home;