import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import AppHeader from '@/components/AppHeader';
import WeekNavigator from '@/components/WeekNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeeklyVolume from '@/components/WeeklyVolume';
import TopFive from '@/components/TopFive';
import LiftsLog from '@/components/LiftsLog';

const Home = () => {
  return <SafeAreaView style={[styles.base, {height:"100%"}]}>
    <AppHeader></AppHeader>
    <WeekNavigator></WeekNavigator>
    <WeeklyVolume></WeeklyVolume>
    <TopFive></TopFive>
    <LiftsLog></LiftsLog>
    
  </SafeAreaView>;
};

export default Home;

