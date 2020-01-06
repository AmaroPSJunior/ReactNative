import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import TextInputCustom from '../../components/textInput'
import { COLOR } from 'react-native-material-ui'

const goToIndex = () => {
   Actions.index()
}

const NewUser = () => {
   return (
      <View style={styles.Container}>
         <View style={styles.Header}>
            <TouchableOpacity onPress = {goToIndex}>
               <Text style={styles.PrimeiroTextHeader}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.TextHeader}>New User</Text>
         </View>
         <View style={styles.Content}>
            <View style={styles.Form}>
               <Text style={styles.LabelImput}>Nome completo</Text>
               <TextInputCustom/>
               <Text style={styles.LabelImput}>CPF</Text>
               <TextInputCustom/>
               <Text style={styles.LabelImput}>Email</Text>
               <TextInputCustom/>
               <Text style={styles.LabelImput}>Senha</Text>
               <TextInputCustom/>
               <Text style={styles.LabelImput}>Confirmar Senha</Text>
               <TextInputCustom/>
               <TouchableOpacity style={styles.TouchableOpacity}>
                  <Text style={styles.TextButton} >Cadastrar</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}
export default NewUser 

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
      width: ScreenWidth,
      height: ScreenHeight,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingHorizontal: 15,
   },
   Form: {
      paddingHorizontal: 30,
      
      borderWidth: 1,
      borderRadius: 6,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 6,
      elevation: 5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,

   },
   Title:{
      width: '100%',
      textAlign: "center",
      color: COLOR.blue700,
      fontWeight: "bold",
      fontSize: 20,
      marginVertical: 10,
   },
   LabelImput:{
      color: COLOR.grey500,
      marginTop: 20,
      marginBottom: 0,
   },
   TouchableOpacity: {
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      borderRadius: 5,
      backgroundColor: COLOR.blue700,
      marginVertical: 20
   },
   TextButton:{
      textAlign: "center",
      color: COLOR.white,
      fontWeight: "bold",
      fontSize: 20,
      width: '80%',
   },

})
