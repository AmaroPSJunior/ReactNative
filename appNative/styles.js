import { StyleSheet, Dimensions } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import { hide } from 'expo/build/launch/SplashScreen';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6e9cc1',
      //height: ScreenHeight,
      flex: 1, 
    },
    text: {
      backgroundColor: COLOR.blue700, 
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 40,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 10, 
      padding: 20,
    },
    bottom: { 
      //height: ScreenHeight,
      flex: 1, 
    },
    remove: {
      display: "none",
    },
    widthD: {
      width: ScreenWidth,
    },
    teste: {
      backgroundColor: 'red',
      color: 'red',
      borderColor: 'red',
    }
});


export default styles