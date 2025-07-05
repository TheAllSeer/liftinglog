import {StyleSheet} from 'react-native';

export const colors = {
    _1:'#FF8C00',
    _2:'',
    _3:''
}


const styles = StyleSheet.create({
    base:{
        backgroundColor:"#8c8c8c",
        color:"#f2f2f2",
    },
    homeCard:{
        backgroundColor:"#737373",
        borderRadius:10,
        padding:"2%",
        elevation:5,
        borderWidth:1,
        borderColor:"#4d4d4d",
        borderStyle:"solid"
    }
})

export default {...styles}