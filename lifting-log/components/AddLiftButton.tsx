import React from 'react';
import { StyleSheet, View, Dimensions, Pressable, TouchableOpacity, Button } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {AddLiftButtonProps} from '@/utils/props'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AddLiftButton = ({onPress} : AddLiftButtonProps)=>{
    return <Pressable onPress={onPress} style={[buttonStyle.pressable]}>
            {(({pressed})=>(
                <View style={[buttonStyle.button, {opacity:pressed ? 1 : .4}]}>
                    <MaterialCommunityIcons 
                    name='notebook' 
                    size={40} 
                    color={trademarks.white}
                    ></MaterialCommunityIcons>
                
                </View>
            ))}
            </Pressable>
    
    
};


const buttonStyle = StyleSheet.create({
    button:{
        backgroundColor:trademarks.orange,
        width:screenWidth*0.15,
        height:screenWidth*0.15,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'

    },
    pressable:{
        position:'absolute',
        bottom:'10%',
        right:'10%',
    }
})
export default AddLiftButton;