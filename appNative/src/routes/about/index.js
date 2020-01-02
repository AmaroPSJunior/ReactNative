import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import BottonNav from '../../components/bottonNav'
import styles from '../../../styles.js'
import Toolbar from '../../components/toolbar'

const About = () => {
   const goToAbout = () => {
      Actions.home()
   }
   return (

      <View>
         <Toolbar />

         <TouchableOpacity style = { styles.container } onPress = {goToAbout}>
            <Text>ABOUT</Text>
         </TouchableOpacity>

         <BottonNav />
      </View>
   )
}
export default About