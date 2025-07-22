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

export const root = {
    // this is to be filled out but maybe work on backend first 
    // so ye? you took an hour to remove some borders and margin?
    
}




const styles = StyleSheet.create({
    base:{
        backgroundColor:"#000000"
    },
    baseText:{
        color:"#ffffff",
    },
    homeCardHeader:{
        backgroundColor:"#262626",
        alignItems:'center',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginTop:'-3%',
        width:"104.5%",
        // borderBottomColor:'#ffffff',
        // borderBottomWidth:0.5,
        marginBottom:'1%'
    },
    homeCardHeaderText:{
        fontWeight:"600",
        fontSize:20,
        color:trademarks.white,
        padding:2
    },
    homeCard:{
        backgroundColor:"#404040",
        borderRadius:10,
        padding:"2%",
        elevation:5,
        borderWidth:0,
        borderColor:"#0d0d0d",
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