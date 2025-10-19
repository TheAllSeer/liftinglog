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
import { Workout } from '@/utils/types';
import { weeklyData } from '@/utils/mockData';
import { sendLog } from '@/utils/utilFunctions';
import { getWeekRangeFromDate } from '@/utils/utilFunctions';

const workouts = weeklyData;

const Home = () => {
    sendLog('Home initialized.')
    const [isWorkoutFormVisible, setIsWorkoutFormVisible] = useState(false);
    const [editingWorkout, setEditingWorkout] = useState<Workout | null>(null);
    const [currentDate, setCurrentDate] = useState<Date>(new Date())

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
                    editingWorkout={editingWorkout}
                />
            )}

            {!isWorkoutFormVisible && (
                <AddLiftButton onPress={HandleOnOpenForm} />
            )}
        </View>
    };
    
export default Home;