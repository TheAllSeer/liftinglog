import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import styles from '@/styles/general';
import { Ionicons } from '@expo/vector-icons';

const WeeklyVolume = ()=>{
    return <View
    style={[styles.base, styles.homeCard, wvStyles]}>
        <View>
            <Text>This is a BIG chart!!</Text>
        </View>
    </View>
};

const wvStyles:ViewStyle = {
    // flexDirection:'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
}


export default WeeklyVolume;