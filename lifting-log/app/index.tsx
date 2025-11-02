import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import WeekNavigator from '@/components/WeekNavigator';
import WeeklyVolume from '@/components/WeeklyVolume';
import TopFive from '@/components/TopFive';
import LiftsLog from '@/components/LiftsLog';
import AddLiftButton from '@/components/AddLiftButton';
import PersonalRecords from '@/components/PersonalRecords';
import PersonalTrainer from '@/components/PersonalTrainer';
import NavButtons from '@/components/NavButtons'
import AddWorkoutForm from '@/components/form_components/AddWorkoutForm'
import { Workout } from '@/utils/types';
import { weeklyData } from '@/utils/mockData';
import { sendLog } from '@/utils/utilFunctions';
import { getWeekRangeFromDate } from '@/utils/utilFunctions';
import AppHeader from "@/components/AppHeader";

import { fetchWorkouts, addWorkout } from '@/utils/api';


const Home = () => {
    sendLog('Home initialized.')
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isWorkoutFormVisible, setIsWorkoutFormVisible] = useState(false);
    const [editingWorkout, setEditingWorkout] = useState<Workout | null>(null);
    const [currentDate, setCurrentDate] = useState<Date>(new Date())

    useEffect(() => {
        const loadWorkouts = async () => {
            try {
                setIsLoading(true);
                const data = await fetchWorkouts();
                setWorkouts(data);
            } catch (error) {
                console.error('Failed to load workouts:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadWorkouts();
    }, []);

    const HandleAddWorkout = async (newWorkout: Workout) => {
        try {
            await addWorkout(newWorkout);
            // Refresh the workouts list
            const data = await fetchWorkouts();
            setWorkouts(data);
            setIsWorkoutFormVisible(false);
            setEditingWorkout(null);
        } catch (error) {
            console.error('Failed to add workout:', error);
            // Maybe show an error message to the user
        }
    };

    const getFilteredWorkouts = ()=>{
        const weekRange = getWeekRangeFromDate(currentDate);
        return workouts.filter(workout => {
            const workoutDate = new Date(workout.workoutDate); 
            return workoutDate >= weekRange.start && workoutDate <= weekRange.end;
        });
    }
    const filteredWorkouts = getFilteredWorkouts();

    const HandleOnCloseForm = () => {
        setIsWorkoutFormVisible(false);
        setEditingWorkout(null);
    };

    const HandleOnOpenForm = () => {
        setEditingWorkout(null);
        setIsWorkoutFormVisible(true);
    };

    return <View style={[styles.base, {flex: 1}]}>
        <AppHeader />
            <ScrollView>
                <WeekNavigator date={currentDate} setDate={setCurrentDate}/>
                <WeeklyVolume workouts={filteredWorkouts} />
                <TopFive workouts={filteredWorkouts} />
                <LiftsLog workouts={filteredWorkouts} />
                <PersonalRecords/>
                <PersonalTrainer />
            </ScrollView>

            {isWorkoutFormVisible && (
                <AddWorkoutForm 
                    onRequestClose={HandleOnCloseForm} 
                    isVisible={isWorkoutFormVisible} 
                    onClose={HandleOnCloseForm}
                    onAddWorkout={HandleAddWorkout}
                    editingWorkout={editingWorkout}
                />
            )}

            {!isWorkoutFormVisible && (
                <AddLiftButton onPress={HandleOnOpenForm} />
            )}
        </View>
    };
    
export default Home;