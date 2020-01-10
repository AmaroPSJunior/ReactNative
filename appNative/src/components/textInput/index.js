import React, { Component } from 'react';
import { TextInput, Dimensions, StyleSheet } from 'react-native';
import { COLOR } from 'react-native-material-ui';


export default function UselessTextInput(props) {
  //const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={styles.Input}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      //onFocus={text => onChangeText('')}
      //value={value}
    />
  );
}

const styles = StyleSheet.create({
    Input: {
      height: 40, 
      position: "relative",
      width: '100%', 
      borderColor: '#000', 
      borderBottomWidth: 1,
      paddingHorizontal: 7,
      borderColor: COLOR.grey400,
    },
})