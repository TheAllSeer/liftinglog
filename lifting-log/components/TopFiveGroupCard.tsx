import React from 'react';
import {Text, View, ViewStyle, Dimensions, StyleSheet} from 'react-native';
import styles, {trademarks} from '@/styles/general';

const TopFiveGroupCard = ({entry}:any)=>{

    return <View
        style={[cardStyle.card]}>
            <View style={[cardStyle.name, {backgroundColor:entry.color, alignItems:"center"}]}>
                <Text style={[styles.baseText, cardStyle.nameText]}>{entry.name}</Text>
            </View>
            <View style={[cardStyle.pop]}>
                <Text style={[styles.baseText, cardStyle.popText]}>{entry.population}</Text>
            </View>
    </View>
};

const cardStyle = StyleSheet.create({
    card:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:"100%",
        paddingHorizontal:"5%",
        marginVertical:".5%"
    },
    name:{
        backgroundColor:'red',
        padding:"1%",
        borderRadius:5,
    },
    nameText:{
        fontWeight:600
    },
    pop:{
        backgroundColor:'silver',
        padding:"1.25%",
        borderRadius:2.5,
        
    },
    popText:{
        fontWeight:600,
        color:trademarks.black
    }


})

export default TopFiveGroupCard;