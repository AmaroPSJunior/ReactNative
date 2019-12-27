import styles from './styles.js'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, ThemeContext, getTheme,Subheader,Toolbar } from 'react-native-material-ui'
import ButtonCustom from './src/components/buttonCustom'
import RadioButtonCustom from './src/components/radioButtonCustom'
import IconCustom from './src/components/iconCustom'


export default class App2 extends Component {
  state = {
    dialog: null,
  }

  render() {
    const uiTheme = {
      palette: {
        primaryColor: COLOR.blue700,
      },
      toolbar: {
        
        container: {
          height: 50,
          top: 0,
        },
      },
      Toolbar: {
        top: 110,
      },
      Subheader: {
        color: '#fff',
      },
    };

    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Toolbar
          leftElement="menu"
          centerElement="Searchable"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          rightElement={{
              menu: {
                  icon: "more-vert",
                  labels: ["item 1", "item 2"]
              }
          }}
          onRightElementPress={ (label) => { console.log(label) }}
        />
        
        <View style={styles.container}>
          <IconCustom />
          <Text style={styles.text}>app Expo</Text>
          <Subheader text="Subheader text" />
        </View>


        <ButtonCustom />

        <RadioButtonCustom />

      </ThemeContext.Provider>
    )
  }
}


// import stylesDefault from './styles.js'
// import React, { Component } from 'react'
// import { Text, View, StyleSheet } from 'react-native'
// import ModalCustom from './src/components/modal'


// export default class App extends Component {
//   state = {

//   }

//   render() {
    
//     return (
//       <View style={stylesDefault.container}> 
//         <Text style={stylesDefault.text}>Expo</Text>
//         <ModalCustom />
//       </View>
//     )
//   }
// }

// AppRegistry.registerComponent('App', () => App);