import React from 'react';
import {Text, View, ViewStyle, Pressable} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { Ionicons } from '@expo/vector-icons';



const WeekNavigator = ()=>{
    return <View 
        style={[styles.base, styles.homeCard, wnStyles]}
        >
            <Pressable>
            {(({pressed})=>(
                <Ionicons name='chevron-back-outline' size={24} color={pressed ? "#ff8c00" : "#ffffff"} ></Ionicons>
            ))}
            </Pressable>
            <View>
                <Text style={styles.baseText}>
                    Week 14.6 - 21.6
                </Text>
            </View>
            <Pressable>
            {(({pressed})=>(
                <Ionicons name='chevron-forward-outline' size={24} color={pressed ? "#ff8c00" : "#ffffff"} ></Ionicons>
            ))}
            </Pressable>
        </View>
};

const wnStyles:ViewStyle = {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}


export default WeekNavigator;