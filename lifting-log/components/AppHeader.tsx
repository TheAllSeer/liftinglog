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
            <FontAwesome5 name='dumbbell' size={20} color={trademarks.white} ></FontAwesome5>
            <Text style={[{color:trademarks.white, fontWeight:"bold", marginLeft:"0.75%"}]}>EAVY LIFTING</Text>
            {/* <Text style={[{color:trademarks.white}]}>BIG TRADEMARK BRAND</Text> */}
        </View>
        <View style={[headerStyles.settings]}>
            <Pressable>
            {(({pressed})=>(
                <Ionicons name='settings' size={24} color={pressed ? trademarks.black : trademarks.white} ></Ionicons>
            ))}
            </Pressable>
        </View>
    </View>
}

const headerStyles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        // alignItems:'center',
        height: screenHeight * 0.08,
        backgroundColor:trademarks.orange,
        marginBottom:"1%",
        //trying to help with status bar color
        alignItems:'flex-end',
        paddingBottom: 8,
        marginTop: -Constants.statusBarHeight

    },
    logo:{
        marginLeft:"3%"
    },
    settings:{
        marginRight:"3%"
    },
    brand:{

    },
    brandText:{
        color:trademarks.white
    }
})


export default AppHeader;