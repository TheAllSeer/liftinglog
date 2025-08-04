import React from 'react';
import {Text, View, ViewStyle, Dimensions, StyleSheet, ScrollView} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import LiftCard from './LiftCard';
import { weeklyData } from '@/utils/mockData';

import {LiftLogProps} from '@/utils/props'
import { sendLog } from '@/utils/utilFunctions';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const LiftsLog = ({workouts, onStartEditWorkout, onEditWorkout, onDeleteWorkout}:LiftLogProps)=>{
    //youre not doing anything with onEdit and onDelete yet
    sendLog(`LiftsLog created.`)

    return <View style = {[styles.homeCard, styles.flexCardCol]}>
        <View style={[styles.homeCardHeader]}>
            <Text style={[styles.baseText, styles.homeCardHeaderText]}>Lifting Log</Text>
        </View>
        <ScrollView 
        style={[logStyles.cardsContainer]} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
            {
                workouts.map((workout, index)=>{
                    return <LiftCard entry={workout} key={workout.workoutId} onDelete={()=>{onDeleteWorkout(workout.workoutId)}} onEdit={()=>{onStartEditWorkout(workout.workoutId)}}></LiftCard>
                })
            }
        </ScrollView>
        </View>
}

const logStyles = StyleSheet.create({
    cardsContainer:{
        flexDirection:'row',
    }
})
export default LiftsLog;