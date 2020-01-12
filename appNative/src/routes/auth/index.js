import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Image, } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { COLOR } from 'react-native-material-ui'
import React from 'react'

import TextInputCustom from '../../components/textInput'
import img from '../../../assets/logo.png'
import login from '../../services/login'


export default Index = () => {
   const dispatch = useDispatch(); 
   const state = useSelector(state => state)
   const [user, setUser] = React.useState('am');
   const [password, setPassword] = React.useState('1234');
   const { token } = state
   alert('token: ' + token)
   
   const goToForgotPassword = () => {
      Actions.forgotPassword()
   }
   
   function authenticated () {
      dispatch(User(user))
      dispatch(Password(password))
      login(user, password)
      dispatch(changeAuthAction(true))
      dispatch(changeTockenAction(token))
   }
   function User(text) {
      return { type: 'CHANGE_USER', text } 
   } 
   function Password(text) {
      return { type: 'CHANGE_PASSWORD', text } 
   } 
   function changeAuthAction (bool) {
      return { type: 'CHANGE_AUTH', bool } 
   }
   function changeTockenAction (text) {
      return { type: 'CHANGE_TOKEN', text } 
   }

   const authUser = async (user, password) => {
      login(user, password)
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
                  <TextInputCustom onChangeText={text => setUser(text)} value={user} secureTextEntry={false}/>
                  <Text style={styles.LabelImput}>Senha</Text>
                  <TextInputCustom onChangeText={text => setPassword(text)} value={password} secureTextEntry={true}/>
               </View>
               <TouchableOpacity style={styles.TouchableOpacity} onPress = {authenticated} >
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
 