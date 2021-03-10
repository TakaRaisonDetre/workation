import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import styles from './styles'

const SuggestionRow =({item})=> (
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                 <Entypo name="location-pin" size={25} color={'black'}/>
                </View>
            <Text style={styles.locationText}>{item.description}</Text>
            </View> 
            )

export default SuggestionRow


