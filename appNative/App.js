import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui'
import { Ionicons } from '@expo/vector-icons'
import React, { Component } from 'react'
import { Container } from 'native-base'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

import Routes from './src/routes'
import store from './src/store'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
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

