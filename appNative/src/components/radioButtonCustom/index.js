import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { RadioButton, Snackbar } from 'react-native-material-ui'

export default class RadioButtonCustom extends Component {
    state = {
      checked: false,
    }

    render() {
      const styles = StyleSheet.create({
          View: {
            position: 'relative',
            height: 50,
          },
          snackbar: {
            position: 'absolute',
            top: 100,
          },
      });

      return (
        <View style={styles.View}>
          <RadioButton
            label="Checar"
            checked={this.state.checked}
            value="teste"
            onCheck={
              checked => {
                alert(checked)
                this.setState({ checked })
              }
            }
            uncheckedIcon="star-border"
            checkedIcon="star"
            value="Value"
            disabled={false}
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

