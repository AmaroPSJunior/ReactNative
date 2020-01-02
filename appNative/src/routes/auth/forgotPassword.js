import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../../../styles.js'


const About = () => {
   const goToAbout = () => {
      Actions.home()
   }
   return (
      <>
         <Toolbar />
         
         <View style = { styles.container }>
            <TouchableOpacity style = { styles.container } onPress = {goToAbout}>
               <Text>Forgot Password</Text>
            </TouchableOpacity>
         </View>
         
         <BottonNav />
      </>
      
   )
}
export default About