import React from 'react';
import {Text, View, ViewStyle, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {weeklyVolumeData} from '@/components/weeklyVolumeData'
import TopFiveGroupCard from './TopFiveGroupCard';
import {TopFiveProps} from '@/utils/props'
import { volumeData } from '@/utils/types';
import { calculateWeeklyVolume, convertVolumeDataToPieChart } from '@/utils/utilFunctions';
import { PieChartProps } from 'react-native-chart-kit/dist/PieChart';
const data = weeklyVolumeData;

const TopFive = ({workouts} : TopFiveProps)=>{
    const weeklyVolumeData:volumeData = calculateWeeklyVolume(workouts);
    const pieChartData:PieChartProps["data"] = convertVolumeDataToPieChart(weeklyVolumeData, false);

    return <View
    style={[styles.base, styles.homeCard, styles.flexCardCol]}>
        <View style={[styles.homeCardHeader]}>
            <Text style={[styles.baseText, styles.homeCardHeaderText]}>Top 5 Muscle Groups</Text>
        </View>
        <View>
            {
                pieChartData.slice(0, 5).map((entry, index)=>
                     (<TopFiveGroupCard entry={entry} key = {index}></TopFiveGroupCard>)
                )
            }
        </View>

    </View>
};

export default TopFive;