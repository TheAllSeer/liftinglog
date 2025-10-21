// ExerciseDropdown.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Dimensions } from 'react-native';
import styles, { trademarks } from '@/styles/general';
import { Exercise } from '@/utils/exercise_enums';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface ExerciseDropdownProps {
  selectedExercise: Exercise;
  onExerciseChange: (exercise: Exercise) => void;
}

const ExerciseDropdown = ({ selectedExercise, onExerciseChange }: ExerciseDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const exercises = Object.values(Exercise) as Exercise[];

  return (
    <>
      <TouchableOpacity
        style={dropdownStyles.selector}
        onPress={() => setIsOpen(true)}
      >
        <Text style={[styles.baseText, selectedExercise === Exercise.DEFAULT && { opacity: 0.5 }]}>
          {selectedExercise === Exercise.DEFAULT ? "Enter your exercise here..." : selectedExercise}
        </Text>
        <Text style={[styles.baseText]}>▼</Text>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="fade">
        <TouchableOpacity
          style={dropdownStyles.overlay}
          onPress={() => setIsOpen(false)}
        >
          <View style={dropdownStyles.dropdown}>
            <FlatList
              data={exercises}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={dropdownStyles.option}
                  onPress={() => {
                    onExerciseChange(item);
                    setIsOpen(false);
                  }}
                >
                  <Text style={styles.baseText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const dropdownStyles = StyleSheet.create({
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.25,
    borderBottomColor: trademarks.white,
    width: screenWidth * 0.75,
    padding: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    width: '80%',
    maxHeight: '50%',
    backgroundColor: trademarks.black,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: trademarks.white,
  },
  option: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: trademarks.white,
  },
});

export default ExerciseDropdown;