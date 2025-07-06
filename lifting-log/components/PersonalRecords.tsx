import React from 'react';
import {Text, View, ViewStyle, Dimensions, StyleSheet} from 'react-native';
import styles, {trademarks} from '@/styles/general';

const PersonalRecords = ()=>{

    return <View style={[styles.homeCard, styles.flexCardCol]}>
        <View style={[styles.homeCardHeader]}>
            <Text style={[styles.baseText]}>PRs</Text>
        </View>
        <Text style={[styles.baseText]}>Coming Soon!</Text>

    </View>
};

export default PersonalRecords;