import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IconCustom from '../../components/iconCustom'
import BottonNav from '../../components/bottonNav'
import Toolbar from '../../components/toolbar'
import styles from '../../../styles.js'

export default class Home extends Component {
    state = {
        item: null,
    }
    
    render() { 
        const goToAbout = () => {
            Actions.about()
        }

        return (
            <View  style={{ height: 10 }} >     
                <Toolbar />
                    
                <View style={ styles.container }>
                    <IconCustom />
                    <Text style={ styles.text }>app Expo</Text>
                </View>

                <BottonNav />
            </View>
        
       )
    }
}


