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
import BackDrop from '@/components/util_components/BackDrop';

const Home = () => {
  const [isWorkoutFormVisible, setIsWorkoutFormVisible] = useState(false);



  return <View style={[styles.base, {flex:1}]}>
        <ScrollView>
            {isWorkoutFormVisible && (
              <BackDrop onPress={() => setIsWorkoutFormVisible(false)}>
                <AddWorkoutForm onClose={() => setIsWorkoutFormVisible(false)} />
              </BackDrop>
            )}
            <WeekNavigator></WeekNavigator>
            <WeeklyVolume></WeeklyVolume>
            <TopFive></TopFive>
            <LiftsLog></LiftsLog>
            <PersonalRecords></PersonalRecords>
            <PersonalTrainer></PersonalTrainer>
        </ScrollView>
      {!isWorkoutFormVisible && <AddLiftButton onPress={() => setIsWorkoutFormVisible(true)}></AddLiftButton>}
    </View>;
};

export default Home;

