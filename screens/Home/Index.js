import React from 'react'
import { Text, View , ImageBackground, Pressable} from 'react-native'
import {Fontisto} from '@expo/vector-icons'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>

         <Pressable style={styles.searchButton}
            onPress={()=>navigation.navigate('Destination')}>
                <Fontisto name="search" size={25} color={'#f15454'}/>
                <Text style={styles.searchButtonText}>どこで仕事をしますか？</Text>
            </Pressable>    

            <ImageBackground 
            source={require('../../assets/images/unnamed.jpg')} 
            style={styles.image}>
            <Text style={styles.title}>New Working Style</Text>
            <Pressable style={styles.button}
            onPress={()=>console.log('botton click')}>
                <Text style={styles.buttonText}>好きな場所で働く</Text>
            </Pressable>    
            </ImageBackground>
           
        </View>
    )
}

export default HomeScreen;


