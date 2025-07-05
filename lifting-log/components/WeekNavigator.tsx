import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import styles from '@/styles/general';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';



const WeekNavigator = ()=>{
    return <View 
    style={[styles.base, styles.homeCard, wnStyles]}
    >
        <Ionicons name='chevron-back-outline' size={24} color={"#ffffff"} ></Ionicons>
        <View>
            <Text style={{color:"#f2f2f2"}}>
                Week 14.6 - 21.6
            </Text>
        </View>
        <Ionicons name='chevron-forward-outline' size={24} color={"#ffffff"} ></Ionicons>
    </View>

};

const wnStyles:ViewStyle = {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}


export default WeekNavigator;