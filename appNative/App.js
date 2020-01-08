import React, { Component } from 'react'
import { COLOR, ThemeContext, getTheme, Snackbar } from 'react-native-material-ui'
import Routes from './src/routes'
import { Provider } from 'react-redux'
import store from './src/store'
import { AppLoading } from 'expo'
import { Container, Text, Button } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import DataHora from './src/components/dataHora'


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

  render() {
    console.log('app.js', DataHora('hours'))

    if (!this.state.isReady) {
      return <AppLoading/>;
    }

    return (
      <Provider store={store}>
        <Container>
            <ThemeContext.Provider value={getTheme(uiTheme)}>
            <Routes />
          </ThemeContext.Provider>
        </Container>
      </Provider>
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

