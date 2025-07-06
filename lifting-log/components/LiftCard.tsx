import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import styles, {trademarks} from '@/styles/general';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const LiftCard = ({entry}:any)=>{

    return <View style = {[cardStyle.card]}>
        <Text style={[styles.baseText, cardStyle.cardText, cardStyle.nameStyle]}>{entry.workoutName}</Text>
        <Text style={[styles.baseText, cardStyle.cardText, cardStyle.dateStyle]}>{entry.date}</Text>
    </View>
}


const cardStyle = StyleSheet.create({
    card:{
        width:screenWidth*0.2,
        backgroundColor:trademarks.black,
        borderColor:trademarks.white,
        borderWidth:1,
        padding:'1%',
        height:screenHeight*0.1,
        marginHorizontal:'0.5%'
    },
    cardText:{
        color:trademarks.white
    },
    dateStyle:{
        
    },
    nameStyle:{

    }
})
export default LiftCard;