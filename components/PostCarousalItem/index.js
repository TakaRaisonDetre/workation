import React from 'react'
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native'

import styles from './styles'

import {useNavigation} from '@react-navigation/native'

const  PostCarousalItem =(props) => {

    console.log(props)
    const post = props.post
    const width = useWindowDimensions().width
    const navigation = useNavigation();

  
    const goToAccomPage = ()=>{
      navigation.navigate('accomodation', {postId: post.id})
    }

    return (
        <Pressable onPress={goToAccomPage} style={[styles.container,{ width:width-60}]}>
          <View style={styles.innerContainer}>


        
          
            {/* image */}
          <Image style={styles.image}
          source={{uri : post.image}}
          />
 
          <View style={{flex:1, marginHorizontal:7}}>
          {/* bed and bedroom */}
          <Text style={styles.bedrooms}>{post.bed} beds {post.bedroom} betroom</Text>
            {/* type and description */}
            <Text style={styles.description} numberofLines={2}>{post.type}: {post.title}</Text>
            {/* old price and new proce */}
            <Text style={styles.prices}>
            
              <Text style={styles.newPrice}> ¥{post.newPrice}</Text> / night
            </Text>
          
          </View>

          </View>
        </Pressable>
    )
}

export default PostCarousalItem;        