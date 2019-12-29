import React, { Component } from 'react'
import { Card } from 'react-native-material-ui'
import { Text, View, StyleSheet } from 'react-native'



export default class CardCustom extends Component {
    state = {
    }
    
    render() {

        return (
            <View styles={styles.View}> 
                <Card styles={styles.Card}>
                    <Text styles={styles.Text}>Hello world!</Text>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        display: 'flex',
    },
    Card: {
        display: 'flex',
    },
    Text: {
        display: 'flex',
    },  


});