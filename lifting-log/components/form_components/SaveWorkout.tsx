import React from 'react';
import { StyleSheet, View, Dimensions, Pressable, Text } from 'react-native';
import styles, { trademarks } from '@/styles/general';
import { SaveWorkoutButtonProps } from '../props';
const screenWidth = Dimensions.get("window").width;


const SaveWorkoutButton = ({ onSave, onReset, isLoading = false }: SaveWorkoutButtonProps) => {
    return (
        <View style={swbStyles.actionButtonsContainer}>
        <Pressable 
            style={[swbStyles.actionButton, swbStyles.resetButton]} 
            onPress={onReset}
            disabled={isLoading}
        >
            <Text style={[styles.baseText, swbStyles.resetButtonText]}>Reset</Text>
        </Pressable>
        
        <Pressable 
            style={[swbStyles.actionButton, swbStyles.saveButton]} 
            onPress={onSave}
            disabled={isLoading}
        >
            <Text style={[styles.baseText, swbStyles.saveButtonText]}>
            {isLoading ? 'Saving...' : 'Save Workout'}
            </Text>
        </Pressable>
        </View>
    );
};

const swbStyles = StyleSheet.create({
    actionButtonsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingBottom: 30,
        gap: 12,
    },
    actionButton: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: trademarks.white,
    },
    saveButton: {
        backgroundColor: trademarks.white,
    },
    resetButtonText: {
        color: trademarks.white,
        fontWeight: '600',
        fontSize: 16,
    },
    saveButtonText: {
        color: trademarks.black,
        fontWeight: '600',
        fontSize: 16,
    }
});

export default SaveWorkoutButton;