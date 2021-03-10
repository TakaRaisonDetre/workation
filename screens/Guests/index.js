import React, {useState} from 'react'
import { StyleSheet, Text, View , Pressable} from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

const GuestScreen = () => {

    const [adult , setAdult] = useState(0)
    const [children, setChildren]=useState(0)
    const [infant, setInfant]=useState(0)

     const navigation = useNavigation();

    return (
    <View style={{justifyContent:'space-between', height: '100%'}}>


        {/* <View　style={{justifyContent:'space-between', height: '100%'}}> */}
        {/* <View style={{justifyContent:'space-between', height:'100%'}}> */}
        <View>
          {/* row 1 adult */}
          <View style={styles.row}>
           {/* title  */}
           <View>
               <Text style={{fontWeight:'bold' , marginBottom:7}}>大人</Text>
               <Text>  １３歳以上</Text>
           </View>
            {/* buttom with value  */}
            <View style={{flexDirection:'row', alignItems:'center'}}>
              {/*  - */}
              <Pressable 
              onPress={()=>setAdult(Math.max(0, adult -1))} 
              style={styles.button}
              >
                  <Text style={{fontSize:20, color:'#474747'}}>-</Text>
              </Pressable>
             
               {/*  value */}
               <Text style={{marginHorizontal:20, fontSize:16}}>{adult}</Text>
               {/*  + */}
               <Pressable 
              onPress={()=>setAdult(adult +1 )} 
              style={styles.button}
              >
                  <Text style={{fontSize:20, color:'#474747'}}>+</Text>
              </Pressable>
           </View>
            </View>

          {/* row 1 children */}
           <View style={styles.row}>
           {/* title  */}
           <View>
               <Text style={{fontWeight:'bold' , marginBottom:7}}>子供</Text>
               <Text>  １３歳未満</Text>
           </View>
            {/* buttom with value  */}
            <View style={{flexDirection:'row', alignItems:'center'}}>
              {/*  - */}
              <Pressable 
              onPress={()=>setChildren(Math.max(0, children -1))} 
              style={styles.button}
              >
                  <Text style={{fontSize:20, color:'#474747'}}>-</Text>
              </Pressable>
             
               {/*  value */}
               <Text style={{marginHorizontal:20, fontSize:16}}>{children}</Text>
               {/*  + */}
               <Pressable 
              onPress={()=>setChildren(children +1 )} 
              style={styles.button}
              >
                  <Text style={{fontSize:20, color:'#474747'}}>+</Text>
              </Pressable>
           </View>
            </View>

          {/* row 1 infant */}
           <View style={styles.row}>
           {/* title  */}
           <View>
               <Text style={{fontWeight:'bold' , marginBottom:7}}>乳幼児</Text>
               <Text>  ２歳未満</Text>
           </View>
            {/* buttom with value  */}
            <View style={{flexDirection:'row', alignItems:'center'}}>
              {/*  - */}
              <Pressable 
              onPress={()=>setInfant(Math.max(0, infant -1))} 
              style={styles.button}
              >
                  <Text style={{fontSize:20, color:'#474747'}}>-</Text>
              </Pressable>
             
               {/*  value */}
               <Text style={{marginHorizontal:20, fontSize:16}}>{infant}</Text>
               {/*  + */}
               <Pressable 
              onPress={()=>setInfant(infant +1 )} 
              style={styles.button}
              >
                  <Text style={{fontSize:20, color:'#474747'}}>+</Text>
              </Pressable>
           </View>
            </View>

         </View>
    
   
        <Pressable 
        onPress={()=>
            navigation.navigate('Home', {
            screen : 'Explore',
            params :{
                screen:'SearchResults'
            }
        })}
         style={{
            marginBottom:20, 
            backgroundColor:'#f15454',
            alignItems:'center',
            justifyContent:'center',
            height:50,
            marginHorizontal:20,
            borderRadius:10
            }} >
            <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>検索する</Text>    
        </Pressable>   
     
    </View>




    )
}

export default GuestScreen

