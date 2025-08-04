import React from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import styles, {trademarks} from '@/styles/general';

import { sendLog } from '@/utils/utilFunctions';
import {LiftCardProps} from '@/utils/props'
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const LiftCard = ({entry, onEdit}:LiftCardProps)=>{
    sendLog(`Lift Card Created for workout [${entry.workoutName}] | workoutId: [${entry.workoutId}]`)
    return <TouchableOpacity style = {[cardStyle.card]} onPress={onEdit}>
        <Text style={[styles.baseText, cardStyle.cardText, cardStyle.nameStyle]}>{entry.workoutName}</Text>
        <Text style={[styles.baseText, cardStyle.cardText, cardStyle.dateStyle]}>{entry.workoutDate.toString()}</Text>
    </TouchableOpacity>
}


const cardStyle = StyleSheet.create({
    card:{
        width: screenWidth * 0.25,
        backgroundColor: trademarks.black,
        borderRadius: 12,
        padding: 12,
        height: screenHeight * 0.12,
        marginHorizontal: 6,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardText:{
        color: trademarks.white,
    },
    nameStyle:{
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 4,
    },
    dateStyle:{
        fontSize: 11,
        fontWeight: '400',
        textAlign: 'center',
        opacity: 0.8,
        marginTop: 'auto',
    }
})
export default LiftCard;