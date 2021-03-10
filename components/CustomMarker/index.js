import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'


const CustomMaker = (props) => {

    const {coordinate, price, onPress, isSelected} = props;

    return (
        <Marker 
        coordinate={coordinate}
        onPress={onPress}
       //  title={marker.title}
       //  description={marker.description}
        >
          <View style={{
              backgroundColor: isSelected ? 'orange' :"white", 
              padding: 5, 
              borderRadius:10,
              borderColor:'grey',
              borderWidth:1
              }}>
              <Text style={{color:isSelected ?'white': 'black', fontWeight:'bold', fontSize:12}}>¥{price}</Text>
          </View>

        </Marker>
    )
}

export default CustomMaker


