import React from 'react';
import { StyleSheet, View, Dimensions, Pressable, TouchableOpacity, Button } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {AddWorkoutFormProps} from '@/components/props'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const AddWorkoutForm = ({onClose}:AddWorkoutFormProps)=>{


    return <View style={[wfStyles.workoutFormContainer]}>
        
    </View>

}

const wfStyles = StyleSheet.create({
    workoutFormContainer:{
        position:'absolute',
        bottom:0,
        height:screenHeight*0.8,
        width:screenWidth,
        backgroundColor:trademarks.black,
        zIndex:2147483647,

    }
})

export default AddWorkoutForm