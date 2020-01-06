import React, { Component } from 'react'
import { COLOR, ThemeContext, getTheme, Snackbar } from 'react-native-material-ui'
import Routes from './src/routes'
import BottonNav from './src/components/bottonNav'
import Toolbar from './src/components/toolbar'
import styles from './styles'

import { AppLoading } from 'expo';
import { Container, Text, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const alerta = () => {
  alert('teste alerta')
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      auth: false,
      teste: 'amaro',
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

  }



  onChildChanged(bool) {
    this.setState({auth: bool});
    alert('App.js state auth:', this.state.auth)
  }

  render() {
    const goBack = () => {
      alert('teste alerta:', bool)
    }

    const { auth } = this.state
    //console.log('app.js this', this)
    if (!this.state.isReady) {
      return <AppLoading/>;
    }

    return (
      <Container>
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <Routes auth={auth} alerta={alert} callbackParent={(bool) => onChildChanged(bool)} isCentered={true}/>
          {/* <Routes goBack={goBack}/> */}
        </ThemeContext.Provider>
      </Container>
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
}

