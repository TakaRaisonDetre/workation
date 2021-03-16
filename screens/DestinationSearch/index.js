import React, {useState}from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'
import {Entypo} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './suggestionRow'
import searchResults from '../../assets/data/search'


const DestinationSearchScreen = () => {


    const navigation = useNavigation();
    

    return (
   
        <View style={styles.container}>
        <GooglePlacesAutocomplete
            placeholder='どこに行きますか？'
            onPress={(data, details = null) =>  {
                // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('Guest', {
                        viewport:details.geometry.viewport
                    });
                    }}
                    fetchDetails
                    styles={{
                        textInput:styles.textInput
                    }}
                    query={{
                        key:'AIzaSyBBQdwYPQ5DTfY64lkYZvUME3l8qHb9_jw',
                        language:'ja',
                        types:'(cities)'
                    }}
                    suppressDefaultStyles
                    renderRow={(item)=><SuggestionRow item={item}/>}
            /> 
          
        </View>  
                
    )
}

export default DestinationSearchScreen


