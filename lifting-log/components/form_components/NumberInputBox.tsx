import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, ScrollView, Text, Modal } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { NumberInputBoxProps } from '../../utils/props';




const NumberInputBox = ({onChange, inputNumber = 0 }:NumberInputBoxProps)=>{
    const handleChange = (newValue: number) => {
        onChange(newValue); // This calls the parent's function to update state
    };
    return <View><Text style={[styles.baseText, nibStyles.repNumber]}> {inputNumber}</Text></View>
}


const nibStyles = StyleSheet.create({
    repNumber: {
        backgroundColor: trademarks.black,
        borderColor: trademarks.white,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 8,
        textAlign: 'center',
        minWidth: 60,
    },

})

export default NumberInputBox