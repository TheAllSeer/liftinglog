import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import styles, { trademarks } from '@/styles/general';
import { WeightTypeSwitchProps } from '../../utils/props';

const WeightTypeSwitch = ({ weightType, onTypeChange }: WeightTypeSwitchProps) => {
    return (
        <View style={wtsStyles.switchContainer}>
        <Pressable 
            style={weightType === 'kgs' ? wtsStyles.selectedSegment : wtsStyles.unselectedSegment}
            onPress={() => onTypeChange('kgs')}
        >
            <Text style={[styles.baseText, 
            weightType === 'kgs' ? wtsStyles.selectedText : wtsStyles.unselectedText]}>
            KGS
            </Text>
        </Pressable>
        <Pressable 
            style={weightType === 'lbs' ? wtsStyles.selectedSegment : wtsStyles.unselectedSegment}
            onPress={() => onTypeChange('lbs')}
        >
            <Text style={[
            styles.baseText, 
            weightType === 'lbs' ? wtsStyles.selectedText : wtsStyles.unselectedText
            ]}>
            LBS
            </Text>
        </Pressable>
        </View>
    );
};

const wtsStyles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: trademarks.white,
        overflow: 'hidden',
        height: 36,
    },
    selectedSegment: {
        backgroundColor: trademarks.white,
        paddingHorizontal: 15,
        paddingVertical: 8,
        justifyContent: 'center',
    },
    unselectedSegment: {
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
        paddingVertical: 8,
        justifyContent: 'center',
    },
    selectedText: {
        color: trademarks.black,
        fontWeight: '600',
        textAlign: 'center',
    },
    unselectedText: {
        color: trademarks.white,
        textAlign: 'center',
    }
});

export default WeightTypeSwitch;