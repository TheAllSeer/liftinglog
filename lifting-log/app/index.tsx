import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import AppHeader from '@/components/AppHeader';
import WeekNavigator from '@/components/WeekNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeeklyVolume from '@/components/WeeklyVolume';
import TopFive from '@/components/TopFive';
import LiftsLog from '@/components/LiftsLog';
import AddLiftButton from '@/components/AddLiftButton';
import PersonalRecords from '@/components/PersonalRecords';
import PersonalTrainer from '@/components/PersonalTrainer';


const Home = () => {
  return <SafeAreaView style={[styles.base, {flex:1}]}>
    <AppHeader></AppHeader>
    <ScrollView>
        <WeekNavigator></WeekNavigator>
        <WeeklyVolume></WeeklyVolume>
        <TopFive></TopFive>
        <LiftsLog></LiftsLog>
        <PersonalRecords></PersonalRecords>
        <PersonalTrainer></PersonalTrainer>
    </ScrollView>
    <AddLiftButton></AddLiftButton>
  </SafeAreaView>;
};

export default Home;

