import React from 'react';
import {Text, View, ViewStyle, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { Ionicons } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';
import { PieChartProps } from 'react-native-chart-kit/dist/PieChart';
// import {weeklyVolumeData} from '@/components/weeklyVolumeData'
import { volumeData, Workout } from '@/utils/types';
import {WeeklyVolumeProps} from '@/utils/props'
import { weeklyData } from '@/utils/mockData';
import {calculateWeeklyVolume, calculateWorkoutVolume, convertVolumeDataToPieChart, mergeTwoVolumeObjects, sendLog} from '@/utils/utilFunctions'
import { Exercise, MuscleGroup } from '@/utils/exercise_enums';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// const weeklyVolumeData:volumeData = calculateWeeklyVolume(weeklyData);
// const pieChartData:PieChartProps["data"] = convertVolumeDataToPieChart(weeklyVolumeData, true);

const WeeklyVolume = ({workouts}:WeeklyVolumeProps)=>{
    const weeklyVolumeData:volumeData = calculateWeeklyVolume(workouts);
    const pieChartData:PieChartProps["data"] = convertVolumeDataToPieChart(weeklyVolumeData, true);
    const piechartWidth = screenWidth * 0.91;
    const piechartHeight = screenHeight * 0.3;
    const chartConfig = {
        backgroundColor: "transparent",        
        color: (opacity = 1) => `rgba(255, 140, 0, ${opacity})`, 
        labelColor: (opacity = 1) => `rgba(242, 242, 242, ${opacity})`,
    };

    return <View
    style={[styles.base, styles.homeCard, wvStyles]}>
        <View style={[{flexDirection:'column',alignItems:"center"}]}>
            <View style={[styles.homeCardHeader, {width:"105.5%"}]}>
                <Text style={[styles.baseText, styles.homeCardHeaderText]}>Weekly Volume</Text>
            </View>
            <PieChart
             data={pieChartData}
             width={piechartWidth}
             height={piechartHeight}
             accessor="population"
             absolute
             chartConfig={chartConfig}
             backgroundColor="transparent"
             paddingLeft="20">

            </PieChart>
        </View>
    </View>
};

const wvStyles:ViewStyle = {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth:screenWidth //this at 95 and piechartWidth at 91 aligns the header with the homeCard. 
    // i have no idea why. 
}


export default WeeklyVolume;