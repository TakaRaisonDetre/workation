import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DetailedPost from '../../components/DetailedPost'

import {useRoute} from '@react-navigation/native'
import places from '../../assets/data/feed'

const AccomodationScreen = (props) => {
    const route = useRoute();

    console.log(route)

    const post = places.find(place=>place.id===route.params.postId);

    return (
        <View style={{backgroundColor:'white'}}>
           <DetailedPost post={post}/>
        </View>
    )
}

export default AccomodationScreen


