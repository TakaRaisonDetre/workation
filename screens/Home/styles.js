import {StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({

   image :{
       width: '100%',
       height:500,
       resizeMode: 'cover',
       justifyContent:'center',
       
   },
   title :{
      fontSize:60,
      fontWeight:'bold',
      color:'white',
      width:'70%',
      marginLeft:25,
   },
   buttonText :{
    fontSize:16,
    fontWeight:'bold',
    
   },
   button :{
     backgroundColor:'#fff',
     width:200,
     marginLeft:25,
     height:40,
     borderRadius:6,
     justifyContent:'center',
     alignItems:'center',
     marginTop:20
   },
   searchButton:{
    backgroundColor:'#fff',
    width:Dimensions.get('screen').width - 20,
    marginHorizontal:10,
    height:60,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:48,
    zIndex:100,
   },
   searchButtonText :{
    fontSize:16,
    fontWeight:'bold'
   }


})

export default styles