import React from 'react';
import {Text, View, ViewStyle, Dimensions, StyleSheet} from 'react-native';
import styles, {trademarks} from '@/styles/general';

const PersonalTrainer = ()=>{

    return <View style={[styles.homeCard, styles.flexCardCol]}>
        <View style={[styles.homeCardHeader]}>
            <Text style={[styles.baseText]}>Your Personal Trainer</Text>
        </View>
        <Text style={[styles.baseText]}>Coming Soon!</Text>

    </View>
};

export default PersonalTrainer;