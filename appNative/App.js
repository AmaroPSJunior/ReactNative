import styles from './styles.js'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, ThemeContext, getTheme, Toolbar, Snackbar } from 'react-native-material-ui'
import ButtonCustom from './src/components/buttonCustom'
import IconCustom from './src/components/iconCustom'
import BottonNav from './src/components/bottonNav'


export default class App extends Component {
  state = {
    dialog: null,
    item: null,
  }

  render() {
    const uiTheme = {
      palette: {
        primaryColor: COLOR.blue700,
      },
      toolbar: {
        container: {
          height: 50,
          top: 24,
          paddingTop: 0,
        },
      },
      Toolbar: {
        top: 100,
      },
      Subheader: {
        color: '#fff',
      },
    };

    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Toolbar
          style={{ padding: 10 }}
          leftElement="menu"
          centerElement="Searchable"
          searchable={{ autoFocus: true, placeholder: 'Search' }}
          rightElement={{ menu: { icon: "more-vert", labels: ["item 1", "item 2", "item 3"] }}}
          onRightElementPress={ (label) => { 
            this.setState({ item: label.index + 1 })
            console.log(label)
          }}
          onLeftElementPress={ () => { alert('chama menu') }}
        />
       
        
        <View style={ styles.container }>
          <IconCustom />
          <Text style={ styles.text }>app Expo</Text>
        </View>

        <View>
          <Snackbar 
            visible={ this.state.item > 0 } 
            message={'Selecionado item ' + this.state.item} 
            onRequestClose={() => {
              setTimeout(() => {
                this.setState({ item: 0 })
              }, 500);
            }}
          />
        </View>


        <ButtonCustom />

        <BottonNav />
      </ThemeContext.Provider>
    )
  }
}