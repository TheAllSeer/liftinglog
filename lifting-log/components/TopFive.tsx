import React from 'react';
import {Text, View, ViewStyle, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {weeklyVolumeData} from '@/components/weeklyVolumeData'
import TopFiveGroupCard from './TopFiveGroupCard';
import {TopFiveProps} from '@/utils/props'
const data = weeklyVolumeData;
const TopFive = ({workouts} : TopFiveProps)=>{

    return <View
    style={[styles.base, styles.homeCard, styles.flexCardCol]}>
        <View style={[styles.homeCardHeader]}>
            <Text style={[styles.baseText, styles.homeCardHeaderText]}>Top 5 Muscle Groups</Text>
        </View>
        <View>
            {
                data.slice(0, 5).map((entry, index)=>
                     (<TopFiveGroupCard entry={entry} key = {index}></TopFiveGroupCard>)
                )
            }
        </View>

    </View>
};

export default TopFive;