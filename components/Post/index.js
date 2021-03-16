import React from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'


const days = 5;

const  Post =(props) => {

    console.log(props)
    const {post} = props
     const navigation = useNavigation()
     
    const goToAccomPage =()=>{
     navigation.navigate('accomodation' ,{postId: post.id})

    }

    return (
        <Pressable onPress={goToAccomPage} style={styles.container}>
            {/* image */}
          <Image style={styles.image}
          source={{uri : post.image}}
          />

         

            {/* bed and bedroom */}
             <Text style={styles.bedrooms}>{post.bed} beds {post.bedroom} betroom</Text>
            {/* type and description */}
            <Text style={styles.description} numberofLines={2}>{post.type}: {post.title}</Text>
            {/* old price and new proce */}
            <Text style={styles.prices}>
              <Text style={styles.oldPrice}>¥{post.oldPrice}</Text>
              <Text style={styles.newPrice}>  ¥{post.newPrice}</Text> / night
            </Text>
            {/* total price  */}
            <Text style={styles.totalPrice}>¥{post.newPrice *days}  total 5days</Text> 
        </Pressable>
    )
}

export default Post;        