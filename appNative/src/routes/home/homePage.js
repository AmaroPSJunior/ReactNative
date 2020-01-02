import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IconCustom from '../../components/iconCustom'
import styles from '../../../styles.js'
import api from '../../services'
import axios from 'axios'

handleTeste = async () => {
    axios.get('http://www.mocky.io/v2/5e0e4ee0330000b580aa8add')

    .then((response) => {
        console.log('res:', response.status )
    })
    .catch(function (error) {
        console.log( error ) 
    })

    authTeste()
};

teste = () => {
    fetch('http://localhost:9090/')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
    });
}

export default class Home extends Component {
    state = {
        item: null,
        error: null,
    }
    
    componentDidMount() {
        handleTeste()
        //teste()
    }

    render() { 
        return (
            <View style={ styles.container }>     
                <View style={ styles.container }>
                    <IconCustom />
                    <Text style={ styles.text }>teste</Text>
                </View>
            </View>
        )
    }
}


