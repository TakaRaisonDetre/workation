import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DetailedPost from '../../components/DetailedPost'

import {useRoute} from '@react-navigation/native'

//import places from '../../assets/data/feed'

import {API, graphqlOperation} from 'aws-amplify'
import {getPost} from '../../src/graphql/queries'


const AccomodationScreen = (props) => {
    const route = useRoute();
    const [post, setPost] = useState([])

    console.log(route)

    useEffect(()=>{
      const fetchAccom =async()=>{
          try {
            const result = await API.graphql(
                graphqlOperation(getPost, {id:route.params.postId} )
            )
            setPost(result.data.getPost);
            console.log('result is ', result)
          }
          catch (e){
              console.log(e)
          }
      }
      fetchAccom()
    },[])

 //   const post = places.find(place=>place.id===route.params.postId);

    return (
        <View style={{backgroundColor:'white'}}>
           <DetailedPost post={post}/>
        </View>
    )
}

export default AccomodationScreen


