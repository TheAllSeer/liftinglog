import React from 'react';
import {Text, View, ViewStyle, Dimensions, StyleSheet, ScrollView} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import LiftCard from './LiftCard';
import { weeklyData } from '@/utils/mockData';

import {LiftLogProps} from '@/utils/props'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const LiftsLog = ({workouts, onEditWorkout}:LiftLogProps)=>{
    //youre not doing anything with onEdit and onDelete yet
    return <View style = {[styles.homeCard, styles.flexCardCol]}>
        <View style={[styles.homeCardHeader]}>
            <Text style={[styles.baseText, styles.homeCardHeaderText]}>Lifting Log</Text>
        </View>
        <ScrollView 
        style={[logStyles.cardsContainer]} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
            {
                weeklyData.map((workout, index)=>{
                    return <LiftCard entry={workout} key={index} onEdit={() => onEditWorkout(workout.workoutId)}></LiftCard>
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