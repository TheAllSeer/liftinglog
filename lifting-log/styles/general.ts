import {StyleSheet} from 'react-native';

export const colors = {
    _1:'#FF8C00',
    _2:'',
    _3:''
}


export const trademarks = {
    orange:'#ec9224',
    white:"#f2f2f2",
    black:"#202020"
}

const styles = StyleSheet.create({
    base:{
        backgroundColor:"#8c8c8c",
        color:"#f2f2f2",
    },
    baseText:{
        color:"#f2f2f2",
    },
    homeCardHeader:{
        backgroundColor:'black',
        alignItems:'center',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginTop:'-2%',
        width:"104%",
        marginBottom:'1%'


    },
    homeCard:{
        backgroundColor:trademarks.black,
        borderRadius:10,
        padding:"2%",
        elevation:5,
        borderWidth:0,
        borderColor:"#000000",
        borderStyle:"solid",
        marginVertical:"1%",
        margin:"2%"
    },
    flexCardCol:{
        flexDirection:'column',
        alignItems: 'center',
    }
})

export default {...styles}