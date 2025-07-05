import React from 'react';
import {Text, View, ViewStyle, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { Ionicons } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';
import { PieChartProps } from 'react-native-chart-kit/dist/PieChart';
import {weeklyVolumeData} from '@/components/weeklyVolumeData'
const WeeklyVolume = ()=>{
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const data:PieChartProps["data"] = weeklyVolumeData
    const piechartWidth = screenWidth * 0.95;
    const piechartHeight = screenHeight * 0.3;
    const chartConfig = {
        backgroundColor: "transparent",        
        color: (opacity = 1) => `rgba(255, 140, 0, ${opacity})`, 
        labelColor: (opacity = 1) => `rgba(242, 242, 242, ${opacity})`,
    };

    return <View
    style={[styles.base, styles.homeCard, wvStyles]}>
        <View style={[{flexDirection:'column',alignItems:"center"}]}>
            <Text style={[styles.baseText]}>This is a BIG chart!!</Text>
            <PieChart
             data={data}
             width={piechartWidth}
             height={piechartHeight}
             accessor="population"
             absolute
             chartConfig={chartConfig}
             backgroundColor="transparent"
             paddingLeft="20">

            </PieChart>
        </View>
    </View>
};

const wvStyles:ViewStyle = {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
}


export default WeeklyVolume;