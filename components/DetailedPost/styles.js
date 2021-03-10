import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container :{
       margin:20,

    },
    image :{
        width:'100%',
        aspectRatio:3/2,
        resizeMode:'cover',
        borderRadius:10,

    },
    bedrooms :{
       marginVertical:10,
       color:"#5b5b5b" 
    },
    description:{
      fontSize:16,
      lineHeight:20,
    },
    prices :{
        fontSize:18,
        marginVertical:10
    },
    oldPrice:{
       color:'#5b5b5b',
       textDecorationLine :'line-through'
       
    },
    newPrice :{
       fontWeight:'bold'
    },
    totalPrice:{
        color:'#5b5b5b',
        textDecorationLine :'underline'
    },
    longDescription:{
       marginVertical:20,
        fontSize: 15,
        lineHeight:20
    }
   
   
})

export default styles