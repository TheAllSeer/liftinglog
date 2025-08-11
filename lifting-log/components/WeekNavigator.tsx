import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { Ionicons } from '@expo/vector-icons';
import {WeeklyNavigatorProps} from '@/utils/props';
import {getWeekRangeFromDate} from '@/utils/utilFunctions'

const WeekNavigator = ({date, setDate} : WeeklyNavigatorProps)=>{
    
    const weekRange = getWeekRangeFromDate(date);
    let start = `${weekRange.start.getDate()}.${weekRange.start.getMonth() + 1}`;
    let end = `${weekRange.end.getDate()}.${weekRange.end.getMonth() + 1}`;

    const goToPreviousWeek = () => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - 7);
        setDate(newDate);
    };
    const goToNextWeek = () => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + 7);
        setDate(newDate);
    };


    return <View 
        style={[styles.base, styles.homeCard, wnStyles.container]}
        >
            <Pressable onPress={goToPreviousWeek}>
            {(({pressed})=>(
                <Ionicons name='chevron-back-outline' size={24} color={pressed ? "#ff8c00" : "#ffffff"} ></Ionicons>
            ))}
            </Pressable>
            <View>
                <Text style={[styles.baseText, wnStyles.weekText]}>
                    Week {start} - {end}
                </Text>
            </View>
            <Pressable onPress={goToNextWeek}>
            {(({pressed})=>(
                <Ionicons name='chevron-forward-outline' size={24} color={pressed ? "#ff8c00" : "#ffffff"} ></Ionicons>
            ))}
            </Pressable>
        </View>
};

const wnStyles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    weekText:{

    }
})


export default WeekNavigator;