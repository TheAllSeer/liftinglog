import React from 'react';
import {Text, View, ViewStyle, Dimensions, StyleSheet, ScrollView} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import LiftCard from './LiftCard';
import { weeklyData } from './weeklyWorkoutsData';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const LiftsLog = ()=>{

    return <View style = {[styles.homeCard, styles.flexCardCol]}>
        <View style={[styles.homeCardHeader]}>
            <Text style={[styles.baseText]}>Lifting Log</Text>
        </View>
        <ScrollView 
        style={[logStyles.cardsContainer]} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
            {
                weeklyData.map((workout, index)=>{
                    return <LiftCard entry={workout} key={index}></LiftCard>
                })
            }
        </ScrollView>
        </View>
}

const logStyles = StyleSheet.create({
    cardsContainer:{
        flexDirection:'row',
        marginHorizontal:'-0.5%' //make up for the horizontal margin of the lift logs inside

    }
})
export default LiftsLog;