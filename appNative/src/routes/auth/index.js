import React from 'react'
import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Image, } from 'react-native'
import { Actions } from 'react-native-router-flux'
import TextInputCustom from '../../components/textInput';
import { COLOR } from 'react-native-material-ui';
import img from '../../../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux';
//git

export default Index = () => {
   const [value, onChangeText] = React.useState('');
   const dispatch = useDispatch(); 

   const goToForgotPassword = () => {
      Actions.forgotPassword()
   }
   
   function goToHome () {
      dispatch(changeAuthAction(true))
   }
   
   function changeAuthAction (bool) {
      return { type: 'CHANGE_AUTH', bool }
   } 

   return (
      <View style={styles.Container}>
         <View style={styles.Header}>
               <Image source={img} style={styles.Image}/>
         </View>
         <View style={styles.Content}>
            <View style={styles.ContainerContent}>
               <Text style={styles.Title}>Login</Text>
               <View>
                  <Text style={styles.LabelImput}>Nome</Text>
                  <TextInputCustom onChangeText={text => onChangeText(text)} value={value} />
                  <Text style={styles.LabelImput}>Senha</Text>
                  <TextInputCustom/>
               </View>
               <TouchableOpacity style={styles.TouchableOpacity} onPress = {goToHome} >
                  <Text style={styles.TextButton}>Entrar</Text>
               </TouchableOpacity>
               <View style={styles.ContainerContentFooter}>
                  <TouchableOpacity onPress = {goToForgotPassword}>
                     <Text style={styles.TextFooter}>Esqueceu a Senha</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View> 
      </View>
   )
}

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
   Container: {
      alignItems: 'center',
      height: ScreenHeight,
   },
   Header: {
      alignItems: 'center',
      backgroundColor: '#ccc',
      backgroundColor: COLOR.blue700,
      position: "relative",
      width: ScreenWidth,
      height: '38%',
      paddingTop: '15%',
   },
   Image: {
      height: 95,
      width: 95,
      borderRadius: 50,
      paddingTop: 10,
      backgroundColor: '#fff',
   },
   Content: {
      alignItems: 'center',
      width: ScreenWidth,
   },
   ContainerContent:{
      width: ScreenWidth-50,
      padding: 15,
      top: -70,
      backgroundColor: COLOR.white,
   
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
      color: COLOR.white,
      fontWeight: "bold",
      fontSize: 20,
   },
   ContainerContentFooter:{
      flexDirection: "row",
      justifyContent: "center",
   },
   TextFooter:{
      fontWeight: "bold",
      color: COLOR.blue700,
      marginVertical: 10
   },
})
 