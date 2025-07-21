
import React from 'react';
import { StyleSheet, View, Dimensions, Pressable, ScrollView, Text } from 'react-native';
import styles, {trademarks} from '@/styles/general';
import {SetsViewProps} from '@/components/props'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const SetsView = ({sets}:SetsViewProps)=>{


    return <View style={[svStyle.allSetsContainerStyle]}>
        {sets.map((set, index)=>(
            <View key={index} style={[svStyle.setContainerStyle]}>
                {(!sets?.[index-1] || sets?.[index-1].exerciseName !== set.exerciseName)
                && (<View style={{alignItems:'center'}}>
                    <Text style={[styles.baseText, svStyle.exerciseNameHeader]}>{set.exerciseName}</Text>
                </View>)
                }
                <View style={[svStyle.setView]}>
                    <View><Text style={[[styles.baseText, svStyle.repNumber]]}>{set.reps}</Text></View>
                    <View><Text style={[[styles.baseText, svStyle.repWeight]]}>{set.weight.amount}</Text></View>
                    <View><Text style={[[styles.baseText, svStyle.repWeightType]]}>{set.weight.type}</Text></View>
                </View>
            </View>
        ))

        }
    </View>

}


const svStyle = StyleSheet.create({
    allSetsContainerStyle:{
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
    },
    setContainerStyle:{
        width:'80%',
    },
    exerciseNameHeader:{
        textAlign:'center',
        fontWeight:'400',
        fontSize:18,
        borderBottomWidth:.25,
        borderBottomColor:trademarks.white,
        width:screenWidth*0.75
    },
    setView:{
        flexDirection:'row',
        height:screenHeight * 0.03,
        width:screenWidth*0.9,
        alignSelf:'center'
    },
    repNumber:{

    },
    repWeight:{

    },
    repWeightType:{

    }

})
export default SetsView