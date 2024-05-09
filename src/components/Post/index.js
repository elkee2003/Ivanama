import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Image */}
         <Image source={require('../../../assets/data/images/house2.jpg')} style={styles.image}/>
      </View>
     

      {/* Bed & Bedrooms */}
      <Text style={styles.bedroom}>4 Bedroom Apartment</Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>It is a four bedroom apartment located at Odili Road, fully furnished. It also has a pool and the rooms are airy. Great ambiance and neighbours always willing to help. Security is top notch and you have different services around you, ranging from banks, filling stations, fastfoods etc.</Text>

      {/* Old Price & New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>₦500,000.00 </Text>
        <Text style={styles.newPrice}>  ₦900,000.00 </Text>
        / year 
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>
        ₦1,200,000.00 
      </Text>
    </View>
  )
}

export default Post