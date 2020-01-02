import React, { Component } from 'react'
import { COLOR, ThemeContext, getTheme, Snackbar } from 'react-native-material-ui'
import Routes from './src/routes'
import BottonNav from './src/components/bottonNav'
import Toolbar from './src/components/toolbar'
import styles from './styles'

export default class App extends Component {
  state = {
    dialog: null,
    item: null,
    page: '',
  }

  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Toolbar style={styles.remove} />
          <Routes />
         <BottonNav />
      </ThemeContext.Provider>
    )
  }
}

const uiTheme = {
  palette: {
    primaryColor: COLOR.blue700,
  },
  toolbar: {
    container: {
      height: 80,
      top: 0,
      paddingTop: 25,
    },
  },
  Toolbar: {
    top: 100,
  },
  Subheader: {
    color: '#fff',
  },
};