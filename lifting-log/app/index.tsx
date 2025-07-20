import React, { useState } from 'react';
import {ScrollView, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import WeekNavigator from '@/components/WeekNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeeklyVolume from '@/components/WeeklyVolume';
import TopFive from '@/components/TopFive';
import LiftsLog from '@/components/LiftsLog';
import AddLiftButton from '@/components/AddLiftButton';
import PersonalRecords from '@/components/PersonalRecords';
import PersonalTrainer from '@/components/PersonalTrainer';
import NavButtons from '@/components/NavButtons'
import AddWorkoutForm from '@/components/form_components/AddWorkoutForm'

const Home = () => {
  const [isWorkoutFormVisible, setIsWorkoutFormVisible] = useState(true);



  return <View style={[styles.base, {flex:1}]}>
        <ScrollView>
            {isWorkoutFormVisible && <AddWorkoutForm onClose={() => setIsWorkoutFormVisible(false)} />}
            <WeekNavigator></WeekNavigator>
            <WeeklyVolume></WeeklyVolume>
            <TopFive></TopFive>
            <LiftsLog></LiftsLog>
            <PersonalRecords></PersonalRecords>
            <PersonalTrainer></PersonalTrainer>
        </ScrollView>
      <AddLiftButton onPress={() => setIsWorkoutFormVisible(true)}></AddLiftButton>
    </View>;
};

export default Home;

