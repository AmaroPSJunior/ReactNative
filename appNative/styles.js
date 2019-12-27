import { StyleSheet } from 'react-native'
import { COLOR } from 'react-native-material-ui'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6e9cc1',
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
    }
});

export default styles