import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ActionButton, Snackbar } from 'react-native-material-ui'


export default class ButtonCustom extends Component {
    state = {
        checked: false,
    }
  
    render() {
        const styles = StyleSheet.create({
            snackbar: {
              position: 'absolute',
              top: 200,
              left: 20,
            },
        });

        let press = () => {
            alert('botao precionado!')
            this.setState({ checked: false })
        }
            
        let pressLong = () => {
            alert('botao segurado!')
            this.setState({ checked: true })
        }

        return (
            <View>
                <ActionButton />
                <ActionButton
                    icon="done"
                    label="amaro"
                    name="teste"
                    onPress={press}
                    onLongPress={pressLong}
                />
                <Snackbar 
                    visible={this.state.checked} 
                    message="Mensagem!" 
                    onRequestClose={() => this.setState({ checked: true })} 
                    style={styles.snackbar}
                />
            </View>
        )
    }
}

