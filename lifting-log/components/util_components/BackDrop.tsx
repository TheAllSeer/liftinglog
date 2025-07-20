import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface BackDropProps {
  onPress: () => void;
  children: React.ReactNode;
}

const BackDrop = ({ onPress, children }: BackDropProps) => {
  return (
    <TouchableOpacity 
      style={styles.backdrop}
      activeOpacity={1}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2147483646,
  }
});

export default BackDrop;