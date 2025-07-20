import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, ScrollView, Text } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {AddWorkoutFormProps, Set} from '@/components/props'

import SetsView from './SetsView';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const AddWorkoutForm = ({onClose}:AddWorkoutFormProps)=>{
    const [sets, setSets] = useState<Set[]>([{
        reps:5,
        exerciseName:"Bicep Curls",
        weight:{
            amount:50,
            type:"kgs"
        }
    }])

    return <ScrollView 
    style={[wfStyles.workoutFormContainer]}
    onTouchStart={(e) => e.stopPropagation()}
    onTouchEnd={(e) => e.stopPropagation()}>
        <View style={{alignItems:'center'}}>
            <Text style={[styles.baseText, wfStyles.workoutFormHeader]}>Add Workout</Text>
        </View>
        <SetsView sets={sets}></SetsView>
    </ScrollView>

}

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
        height:screenHeight*0.8,
        width:screenWidth,
        backgroundColor:trademarks.black,
        zIndex:2147483647,
    }, 
})

export default AddWorkoutForm