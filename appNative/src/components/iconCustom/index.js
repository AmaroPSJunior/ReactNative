import React, { Component } from 'react'
import { Icon } from 'react-native-material-ui'
import { StyleSheet } from 'react-native'
import { COLOR } from 'react-native-material-ui'


export default class IconCustom extends Component {
    state = {
    }
    
    render() {
        const styles = StyleSheet.create({
            icon: {
              backgroundColor: COLOR.blue700, 
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 40,
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 10, 
              padding: 20,
              margin: 10
            }
        });

        return (
            <Icon
                name="person" 
                style={styles.icon}
            />
        )
    }
}


