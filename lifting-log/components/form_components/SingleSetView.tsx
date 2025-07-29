import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, ScrollView, Text } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {Set, SetsViewProps, WeightTypeSwitchProps, singleSetViewProps} from '@/components/props'
import KglbSwitch from './KglbSwitch';
import AddSet from './AddSet';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



const SingleSetView = ({set, setIndex}:singleSetViewProps)=>{


    const [weightType, setWeightType] = useState<'kgs'|'lbs'>(set.weight.type)
    const onWeightTypeChange = (type: 'kgs'|'lbs')=>{
        setWeightType(type === 'kgs' ? 'lbs' : 'kgs');
    };
    
    return (
        <View style={[ssvStyle.setContainerStyle]}>
            <View style={[ssvStyle.setView]}>
                <View><Text style={[[styles.baseText, ssvStyle.repNumber]]}>{set.reps}</Text></View>
                <View><Text style={[[styles.baseText, ssvStyle.repWeight]]}>{set.weight.amount}</Text></View>
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