
import React from 'react';
import { StyleSheet, View, Dimensions, Pressable, ScrollView, Text } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {SetsViewProps, WeightTypeSwitchProps} from '@/utils/props'
import { Set } from '@/utils/types';
import KglbSwitch from './KglbSwitch';
import AddSet from './AddSet';
import SingleSetView from './SingleSetView'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const SetsView = ({sets, onAddSet, onSetUpdate}:SetsViewProps)=>{

    const handleSetUpdate = (index: number, updatedSet: Set) => {
        onSetUpdate(index, updatedSet);
    };
    return <View key={"setsviewcontainer"} style={[svStyle.allSetsContainerStyle]}>
        {sets.map((set, index)=>(
            <View key={index}>
                {(!sets?.[index-1] || sets?.[index-1].exerciseName !== set.exerciseName)
                && (<View style={{alignItems:'center'}}>
                    <Text style={[styles.baseText, svStyle.exerciseNameHeader]}>{set.exerciseName}</Text>
                </View>)
                }
            <SingleSetView set={set} key={'_' + index.toString()} setIndex={index} onSetUpdate={handleSetUpdate}>
            </SingleSetView>
            </View>
        ))
        }
        <AddSet onAddSet = {()=>{onAddSet()}}></AddSet>
        <View>

        </View>
    </View>

}


const svStyle = StyleSheet.create({
    allSetsContainerStyle:{
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
    },
    setContainerStyle:{
        width:'80%',
    },
    exerciseNameHeader:{
        textAlign:'center',
        fontWeight:'400',
        fontSize:18,
        borderBottomWidth:.25,
        borderBottomColor:trademarks.white,
        width:screenWidth*0.75
    },
    // some styles from here are ai
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
    // ai gave me help

})
export default SetsView