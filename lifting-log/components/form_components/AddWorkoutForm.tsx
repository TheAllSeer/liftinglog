import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, ScrollView, Text, Modal } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {AddWorkoutFormProps, Set} from '@/components/props'
import AddSetModal from './AddSetModal';

import SetsView from './SetsView';
import SaveWorkout from './SaveWorkout';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const AddWorkoutForm = ({onClose, isVisible, onRequestClose}:AddWorkoutFormProps)=>{
    const [sets, setSets] = useState<Set[]>([{
        reps:5,
        exerciseName:"Bicep Curls",
        weight:{
            amount:50,
            type:"kgs"
        }
    },
    {
            reps:7,
            exerciseName:"Squats",
            weight:{
                amount:55,
                type:"kgs"
            }
        }]);
    const [showAddSetModal, setShowAddSetModal] = useState(false);
    const handleAddSet = (newSet: Set) => {
        setSets([...sets, newSet]);
        
    };

    return <Modal 
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}>
        <Pressable style={{flex: 1}} onPress={onClose}>
            <Pressable onPress={() => {}} style={[wfStyles.workoutFormContainer]}>
            <ScrollView 
            style={[{flex:1}]}
            // onTouchStart={(e) => e.stopPropagation()}
            >
                <View style={{alignItems:'center'}}>
                    <Text style={[styles.baseText, wfStyles.workoutFormHeader]}>Add Workout</Text>
                </View>
                <SetsView sets={sets} onAddSet={() => {setShowAddSetModal(true)}} ></SetsView>
            </ScrollView>
            <SaveWorkout onReset={()=>{}} onSave={()=>{}}></SaveWorkout>
            </Pressable>
        </Pressable>
                <AddSetModal
                    visible={showAddSetModal}
                    onClose={() => setShowAddSetModal(false)}
                    onAddSet={handleAddSet}
                />

    </Modal>

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
        height:screenHeight*0.6,
        width:screenWidth,
        backgroundColor:trademarks.black,
        zIndex:2147483647,
    }, 
})

export default AddWorkoutForm