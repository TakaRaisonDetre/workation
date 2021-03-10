import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styles from './styles'
import feed from '../../assets/data/feed'
import Post from '../../components/Post'

const SearchResultScreen = (props) => {
    return (
        <View>
           <FlatList 
           data={feed}
           renderItem ={({item})=>(<Post post={item}/>)}
           
           />
        </View>
    )
}

export default SearchResultScreen


