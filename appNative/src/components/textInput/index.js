import React, { Component } from 'react';
import { TextInput, Dimensions, StyleSheet } from 'react-native';
import { COLOR } from 'react-native-material-ui';


export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={styles.Input}
      onChangeText={text => onChangeText(text)}
      onFocus={text => onChangeText('')}
      value={value}
    />
  );
}

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width
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