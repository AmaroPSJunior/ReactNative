import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-material-ui';


export default class avatar extends Component {
    state = {

    };
    
    render() {

       return(
            <View>
                <Avatar text="A" />
                <Avatar icon="grade" />
                <Avatar icon="person" iconColor="blue" />
                <Avatar icon="history" iconSize={20} />
                <Avatar icon="mic" size={75} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});