import React, {useEffect, useState} from 'react'
import { Text, View, FlatList } from 'react-native'
import styles from './styles'
//import feed from '../../assets/data/feed'
import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../src/graphql/queries'


import Post from '../../components/Post'


const SearchResultScreen = (props) => {
  
   const {posts} = props

   
    return (
        <View>
           <FlatList 
           data={posts}
           renderItem ={({item})=>(<Post post={item}/>)}
           
           />
        </View>
    )
}

export default SearchResultScreen


