import React, { Component } from 'react';
import { TextInput, Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('Texto');

  return (
    <TextInput
      style={{ height: 40, width: ScreenWidth-20, borderColor: '#FFF', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      onFocus={text => onChangeText('')}
      value={value}
    />
  );
}
