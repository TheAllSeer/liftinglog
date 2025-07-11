import React from 'react';
import {Text, View, Dimensions, StyleSheet, Pressable} from 'react-native';
import styles, {trademarks} from '@/styles/general';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AppHeader = ()=>{

    return <View style={[headerStyles.container]}>
        <View style={[headerStyles.logo]}>
            <FontAwesome5 name='dumbbell' size={24} color={trademarks.white} ></FontAwesome5>
        </View>
        <View style={{flexDirection:'row'}}>
            <FontAwesome5 name='dumbbell' size={20} color={trademarks.white} style={[{transform:[{translateY:0}, {translateX: 0}]}]}></FontAwesome5>
            <Text style={[{color:trademarks.white, fontSize:16, fontWeight:'800', marginLeft:4}]}>EAVY LIFTING</Text>
        </View>
        <View style={[headerStyles.settings]}>
            <Pressable>
            {(({pressed})=>(
                <Ionicons name={pressed ? 'settings-outline' : 'settings'} size={24} color={trademarks.white} ></Ionicons>
            ))}
            </Pressable>
        </View>
    </View>
}

const headerStyles = StyleSheet.create({
    container:{
        // some corrections done here for status bar. 
        // height is 0.05 + sbHeight, align items flex end, padding bottom, margintop of -sbHeight.
        flexDirection:'row',
        justifyContent:'space-between',
        height: screenHeight * 0.05 + Constants.statusBarHeight,
        backgroundColor:trademarks.orange,
        marginBottom:8,
        alignItems:'flex-end',
        paddingBottom: 8,
        paddingTop:Constants.statusBarHeight
        

    },
    logo:{
        marginLeft:screenWidth * 0.03,
    },
    settings:{
        marginRight:screenWidth * 0.03
    },
    brand:{

    },
    brandText:{
        color:trademarks.white
    }
})


export default AppHeader;