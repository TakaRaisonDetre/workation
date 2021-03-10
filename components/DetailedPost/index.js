import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import styles from './styles'


const  DetailedPost =(props) => {

    console.log(props)
    const post = props.post

    return (
      <ScrollView>
        <View style={styles.container}>
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
            <Text style={styles.totalPrice}>¥{post.totalPrice}  total</Text> 

            <Text style={styles.longDescription}>
              {post.description}
            </Text>
        </View>
        </ScrollView>
    )
}

export default DetailedPost;        