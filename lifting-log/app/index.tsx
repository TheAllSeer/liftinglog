import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import styles from '@/styles/general';
import WeekNavigator from '@/components/WeekNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = () => {
  return <SafeAreaView style={[styles.base, {padding:'8%', height:"100%"}]}>
    <WeekNavigator></WeekNavigator>

    
  </SafeAreaView>;
};

export default Home;

