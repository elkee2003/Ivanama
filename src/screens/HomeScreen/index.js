import { View, Text, ImageBackground, Pressable, } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground source={require('../../../assets/data/images/wallpaper.jpg')} style={styles.imgBackground}>
        {/* Search Bar */}
        <Pressable style={styles.searchBtn} onPress={()=> console.warn ('Explore Search Btn clicked')}>
            <FontAwesome name="search" size={24} color="black" />
            <Text style= {styles.searchBtnTxt}>
              Search for Houses
            </Text>
        </Pressable>
        {/* Title */}
        <Text style={styles.title}>
          Go Near
        </Text>

        {/* Button */}
        <Pressable style={styles.btn} onPress={()=> console.warn ('Explore Btn clicked')}>
          <Text style= {styles.btnTxt}>
            Explore nearby house
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen