import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import TextInputCustom from '../../components/textInput'
import { COLOR } from 'react-native-material-ui'


const goToIndex = () => {
   Actions.index()
}

const forgotPassword = () => {
   return (
      <View style={styles.Container}>
         <View style={styles.Header}>
            <TouchableOpacity onPress = {goToIndex}>
               <Text style={styles.PrimeiroTextHeader}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.TextHeader}>Forgot Password</Text>
         </View>
         <View style={styles.Content}>
            <Text style={styles.TextContent}>Texto 1</Text>
            <Text style={styles.TextContent}>Texto 2</Text>
         </View>
      </View>
   )
}

export default forgotPassword

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
   Container: {
      height: ScreenHeight,
      backgroundColor: COLOR.blue700,
   },
   Header: {
      flexDirection: "row",
      alignItems: "center",
      top: 24,
      backgroundColor: COLOR.blue700,
      height: '38%',
      height: 50,

      borderBottomColor: '#000',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.9,
      shadowRadius: 6,
      elevation: 9,
   },
   PrimeiroTextHeader:{ 
      fontSize: 30, 
      fontWeight: "bold",
      color: '#fff',
      padding: 20,
   },
   TextHeader:{
      fontWeight: "bold",
      color: '#fff',
      margin: 20,
   },
   Content: {
      alignItems: 'center',
      width: ScreenWidth,
      height: ScreenHeight,
      backgroundColor: '#fff',
      paddingTop: 40,
   },
   TextContent:{
      marginVertical: 10
   },
})