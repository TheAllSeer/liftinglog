import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, Text, Modal } from 'react-native';
import styles, { trademarks } from '@/styles/general';
import KglbSwitch from './KglbSwitch';

//@ts-ignore becuase fuck you
import NumberInputBox from './NumberInputBox';


import {AddSetModalProps} from '@/components/props'
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



const AddSetModal = ({ visible, onClose, onAddSet }: AddSetModalProps) => {
  const [selectedExercise, setSelectedExercise] = useState('Bicep Curls');
  const [reps, setReps] = useState(5);
  const [weight, setWeight] = useState(50);
  const [weightType, setWeightType] = useState<'kgs' | 'lbs'>('kgs');
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSetInputNumber, setCurrentSetInputNumber] = useState(0);

  const exercises = ['Bicep Curls', 'Squats'];

  const handleSave = () => {
    onAddSet({
      exerciseName: selectedExercise,
      reps,
      weight: {
        amount: weight,
        type: weightType
      }
    });
    onClose();
  };

  const handleRepsChange = () => {
    // You can implement number input modal here later
    const newReps = reps === 5 ? 10 : 5; // Simple toggle for now
    setReps(newReps);
  };

  const handleWeightChange = () => {
    // You can implement number input modal here later
    const newWeight = weight === 50 ? 60 : 50; // Simple toggle for now
    setWeight(newWeight);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <Pressable style={asmStyles.backdrop} onPress={onClose}>
        <Pressable onPress={() => {}} style={asmStyles.modalContainer}>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.baseText, asmStyles.modalHeader]}>Add Set</Text>
          </View>

          {/* Exercise Dropdown */}
          <View style={asmStyles.exerciseDropdownContainer}>
            <Pressable
              style={asmStyles.dropdownButton}
              onPress={() => setShowDropdown(!showDropdown)}
            >
              <Text style={[styles.baseText, asmStyles.dropdownText]}>
                {selectedExercise}
              </Text>
              <Text style={[styles.baseText, asmStyles.dropdownArrow]}>
                {showDropdown ? '▲' : '▼'}
              </Text>
            </Pressable>

            {showDropdown && (
              <View style={asmStyles.dropdownMenu}>
                {exercises.map((exercise) => (
                  <Pressable
                    key={exercise}
                    style={asmStyles.dropdownItem}
                    onPress={() => {
                      setSelectedExercise(exercise);
                      setShowDropdown(false);
                    }}
                  >
                    <Text style={[styles.baseText, asmStyles.dropdownItemText]}>
                      {exercise}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          {/* Set Input (matching existing design) */}
          <View style={asmStyles.setView}>
            <Pressable onPress={handleRepsChange}>
              <NumberInputBox
                inputNumber={currentSetInputNumber}
                onChange={(newValue) => setCurrentSetInputNumber(newValue)}
              ></NumberInputBox>
            </Pressable>
            <Pressable onPress={handleWeightChange}>
              <Text style={[styles.baseText, asmStyles.repWeight]}>{weight}</Text>
            </Pressable>
            <KglbSwitch 
              weightType={weightType}
              onTypeChange={(type) => setWeightType(type)}
            />
          </View>

          {/* Action Buttons */}
          <View style={asmStyles.actionButtons}>
            <Pressable style={asmStyles.cancelButton} onPress={onClose}>
              <Text style={[styles.baseText, asmStyles.cancelButtonText]}>Cancel</Text>
            </Pressable>
            <Pressable style={asmStyles.addButton} onPress={handleSave}>
              <Text style={[styles.baseText, asmStyles.addButtonText]}>Add Set</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const asmStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: screenWidth * 0.9,
    backgroundColor: trademarks.black,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: trademarks.white,
    padding: 20,
  },
  modalHeader: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: trademarks.white,
    width: '100%',
    paddingBottom: 10,
    marginBottom: 20,
  },
  exerciseDropdownContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: trademarks.black,
    borderColor: trademarks.white,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: trademarks.white,
  },
  dropdownArrow: {
    fontSize: 12,
    color: trademarks.white,
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: trademarks.black,
    borderColor: trademarks.white,
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1000,
  },
  dropdownItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: trademarks.white,
  },
  dropdownItemText: {
    fontSize: 16,
    color: trademarks.white,
  },
  setView: {
    flexDirection: 'row',
    height: screenHeight * 0.06,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
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
  repWeight: {
    backgroundColor: trademarks.black,
    borderColor: trademarks.white,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    textAlign: 'center',
    minWidth: 80,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: trademarks.white,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  addButton: {
    flex: 1,
    backgroundColor: trademarks.white,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: trademarks.white,
    fontWeight: '600',
  },
  addButtonText: {
    color: trademarks.black,
    fontWeight: '600',
  },
});

export default AddSetModal;