import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../../../styles.js'


const goToAbout = () => {
   Actions.home()
}

export default About = () => (
   <>
      <View style = { styles.container }>
         <TouchableOpacity style = { styles.container } onPress = {goToAbout}>
            <Text>Auth Page</Text>
         </TouchableOpacity>
      </View>
   </>
)

