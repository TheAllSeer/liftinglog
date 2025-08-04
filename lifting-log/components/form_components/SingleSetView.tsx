import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Dimensions, Pressable, ScrollView, Text } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {SetsViewProps, WeightTypeSwitchProps, singleSetViewProps} from '@/utils/props'
import { Set } from '@/utils/types';
import KglbSwitch from './KglbSwitch';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



const SingleSetView = ({set, setIndex, onSetUpdate}:singleSetViewProps)=>{


    // const [weightType, setWeightType] = useState<'kgs'|'lbs'>(set.weight.type)
    const onWeightTypeChange = (type: 'kgs'|'lbs')=>{
        onSetUpdate(setIndex, { 
            ...set, 
            weight: { 
                ...set.weight, 
                type: type  // This updates the real data
            } 
        });
    };
    const onWeightAmountChange = (amount:number) =>{
        onSetUpdate(setIndex, { 
            ...set, 
            weight: { 
                ...set.weight, 
                amount: amount  // This updates the real data
            } 
        });
    }
    const onRepsChange = (reps:number) =>{
        onSetUpdate(setIndex, { 
            ...set, 
            reps:reps
        });
    }

    
    return (
        <View style={[ssvStyle.setContainerStyle]}>
            <View style={[ssvStyle.setView]}>
                <TextInput
                    style={[styles.baseText, ssvStyle.repNumber]}
                    value={set.reps.toString()}
                    onChangeText={(text) => {
                        const numValue = parseInt(text) || 0;
                        onRepsChange(numValue);
                    }}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor={trademarks.white}
                />
                <TextInput
                    style={[styles.baseText, ssvStyle.repWeight]}
                    value={set.weight.amount.toString()}
                    onChangeText={(text) => {
                        const numValue = parseFloat(text) || 0;
                        onWeightAmountChange(numValue);
                    }}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor={trademarks.white}
                />
                <KglbSwitch weightType={set.weight.type} onTypeChange={onWeightTypeChange} ></KglbSwitch>
            </View>
        </View>
    )
}



const ssvStyle = StyleSheet.create({
    setContainerStyle:{
        width:'80%',
    },
    setView:{
        flexDirection:'row',
        height:screenHeight * 0.06, 
        width:screenWidth*0.9,
        alignSelf:'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    repNumber:{
        backgroundColor: trademarks.black,
        borderColor: trademarks.white,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 8,
        textAlign: 'center',
        minWidth: 60,
    },
    repWeight:{
        backgroundColor: trademarks.black,
        borderColor: trademarks.white,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 8,
        textAlign: 'center',
        minWidth: 80,
    },
})


export default SingleSetView