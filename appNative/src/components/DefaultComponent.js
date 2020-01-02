import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { ComponentDefault } from 'react-native-material-ui';


export default class ComponentCustom extends Component {
    state = {
        item: null,
        pesquisa: null,
    };
    
    render() {

       return(
            <ComponentDefault />
        )
    }
}

const styles = StyleSheet.create({

});
