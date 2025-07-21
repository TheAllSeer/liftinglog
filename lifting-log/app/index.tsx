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
  const HandleOnCloseForm = () => setIsWorkoutFormVisible(false)
  const HandleOnOpenForm = () => setIsWorkoutFormVisible(true)



  return <View style={[styles.base, {flex:1}]}>
        <ScrollView>
            <WeekNavigator></WeekNavigator>
            <WeeklyVolume></WeeklyVolume>
            <TopFive></TopFive>
            <LiftsLog></LiftsLog>
            <PersonalRecords></PersonalRecords>
            <PersonalTrainer></PersonalTrainer>
        </ScrollView>
        {isWorkoutFormVisible && (
          <AddWorkoutForm onRequestClose={HandleOnCloseForm} isVisible = {isWorkoutFormVisible} onClose={HandleOnCloseForm} />
        )}
        {!isWorkoutFormVisible && <AddLiftButton onPress={HandleOnOpenForm}></AddLiftButton>}
    </View>;
};

export default Home;

