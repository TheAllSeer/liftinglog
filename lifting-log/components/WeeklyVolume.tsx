import React from 'react';
import {Text, View, ViewStyle, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { Ionicons } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';
import { PieChartProps } from 'react-native-chart-kit/dist/PieChart';
import {weeklyVolumeData} from '@/components/weeklyVolumeData'
import { Workout } from '@/utils/types';
import {WeeklyVolumeProps} from '@/utils/props'
import { weeklyData } from '@/utils/mockData';
import {groupColors} from '@/utils/chartColors'
import {calculateWorkoutVolume, mergeTwoVolumeObjects, sendLog} from '@/utils/utilFunctions'
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const mockData = weeklyData;
const legendFontColor = styles.baseText.color;
const legendFontSize = 12;
// data is array of objects like this: {name, population(number), color, legendFontColor and size}
let newData:any = [];
let weeklyVolumeData_new:Record<string, number> = {};
mockData.forEach((workout)=>{
    const workoutVolumeData = calculateWorkoutVolume(workout);
    weeklyVolumeData_new = mergeTwoVolumeObjects(workoutVolumeData, weeklyVolumeData_new);
});
const totalVolume = Object.values(weeklyVolumeData_new).reduce((sum, value) => sum + value, 0);
Object.keys(weeklyVolumeData_new).forEach((key)=>{
    const muscleGroupVolume = weeklyVolumeData_new[key];
    // calculate muscleGroupVolume percent for the legend
    newData.push({
        name:'% | ' + key,
        population:Math.floor(muscleGroupVolume/totalVolume * 100),
        color:groupColors[key as keyof typeof groupColors],
        legendFontColor,
        legendFontSize
    });
})


const WeeklyVolume = ({workouts}:WeeklyVolumeProps)=>{
    // const newData:PieChartProps["data"] = {};

    const data:PieChartProps["data"] = newData
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
             data={data}
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