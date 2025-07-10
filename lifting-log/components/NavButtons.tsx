import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles, {trademarks} from '@/styles/general';


const NavButtons = ()=>{

    return <View style={[styles.base, navStyle.navContainer]}>
        <View style={[styles.base, navStyle.navButton]}>
            <Text>HOME</Text>
        </View>
        <View style={[styles.base, navStyle.navButton]}>
            <Text>PRESETS</Text>
        </View>
    </View>
}

const navStyle = StyleSheet.create({
    navContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    navButton:{
        borderWidth:1,
        borderColor:'black',
        padding:1,
        margin:1
    }
})

export default NavButtons