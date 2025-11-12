// ExerciseDropdown.tsx
import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Dimensions, TextInput } from 'react-native';
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
  const [searchQuery, setSearchQuery] = useState('');
  
  const allExercises = Object.values(Exercise).filter(ex => ex !== Exercise.DEFAULT) as Exercise[];

  // Filter exercises based on search query
  const filteredExercises = useMemo(() => {
    if (!searchQuery.trim()) {
      return allExercises;
    }
    
    const query = searchQuery.toLowerCase();
    return allExercises.filter(exercise => 
      exercise.toLowerCase().startsWith(query)
    );
  }, [searchQuery]);

  const handleOpen = () => {
    setSearchQuery('');
    setIsOpen(true);
  };

  const handleClose = () => {
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleSelect = (exercise: Exercise) => {
    onExerciseChange(exercise);
    handleClose();
  };

  return (
    <>
      <TouchableOpacity
        style={dropdownStyles.selector}
        onPress={handleOpen}
      >
        <Text style={[styles.baseText, selectedExercise === Exercise.DEFAULT && { opacity: 0.5 }]}>
          {selectedExercise === Exercise.DEFAULT ? "Enter your exercise here..." : selectedExercise}
        </Text>
        <Text style={[styles.baseText]}>▼</Text>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="fade">
        <TouchableOpacity
          style={dropdownStyles.overlay}
          activeOpacity={1}
          onPress={handleClose}
        >
          <TouchableOpacity 
            activeOpacity={1} 
            style={dropdownStyles.dropdown}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <View style={dropdownStyles.searchContainer}>
              <TextInput
                style={[styles.baseText, dropdownStyles.searchInput]}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search exercises..."
                placeholderTextColor="#808080"
                autoFocus={true}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Exercise List */}
            <FlatList
              data={filteredExercises}
              keyExtractor={(item) => item}
              keyboardShouldPersistTaps="handled"
              ListEmptyComponent={
                <View style={dropdownStyles.emptyContainer}>
                  <Text style={[styles.baseText, dropdownStyles.emptyText]}>
                    No exercises found
                  </Text>
                </View>
              }
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={dropdownStyles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.baseText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </TouchableOpacity>
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
    maxHeight: '60%',
    backgroundColor: trademarks.black,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: trademarks.white,
    overflow: 'hidden',
  },
  searchContainer: {
    borderBottomWidth: 1,
    borderBottomColor: trademarks.white,
    padding: 10,
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: trademarks.white,
    borderRadius: 6,
    fontSize: 16,
  },
  option: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: trademarks.white,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    opacity: 0.5,
    fontSize: 14,
  },
});

export default ExerciseDropdown;