import React from 'react';
import {Text, View, ViewStyle, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {weeklyVolumeData} from '@/components/weeklyVolumeData'
import TopFiveGroupCard from './TopFiveGroupCard';

const data = weeklyVolumeData;
const TopFive = ()=>{

    return <View
    style={[styles.base, styles.homeCard, styles.flexCardCol]}>
        <View style={[styles.homeCardHeader]}>
            <Text style={[styles.baseText]}>Top 5 Muscle Groups</Text>
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