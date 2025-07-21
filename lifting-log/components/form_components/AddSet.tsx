import React from 'react';
import { StyleSheet, View, Dimensions, Pressable, Text } from 'react-native';
import styles, { trademarks } from '@/styles/general';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import {AddSetProps} from '@/components/props'

const AddSet = ({ onAddSet }: AddSetProps) => {
    return (
        <Pressable 
        style={addSetStyles.addSetButton}
        onPress={onAddSet}
        >
        <Text style={[styles.baseText, addSetStyles.addSetText]}>+</Text>
        </Pressable>
    );
};

const addSetStyles = StyleSheet.create({
    addSetButton: {
        width: screenWidth * 0.8,
        height: screenHeight * 0.06,
        borderWidth: 2,
        borderColor: trademarks.white,
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    addSetText: {
        fontSize: 24,
        fontWeight: '300',
        color: trademarks.white,
    }
});

export default AddSet;