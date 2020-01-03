import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native'
import { COLOR } from 'react-native-material-ui'



export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container style={styles.Container} >
        <Header style={styles.Header} />
        <Content style={styles.Content}>
          <Form style={styles.Form}>
            <Item floatingLabel style={styles.Item}>
              <Label style={styles.Label}>Username</Label>
              <Input style={styles.Input} />
            </Item>
            <Item floatingLabel last style={styles.Item}>
              <Label style={styles.Label} >Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    ); 
  }
}


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
    Container: {
        width: ScreenWidth,
        borderTopLeftRadius: 3, 
        borderTopRightRadius: 3,
    },
    Header: {
        borderTopLeftRadius: 3, 
        borderTopRightRadius: 3, 
        backgroundColor: COLOR.blue600,
    },
    Content: {
        width: ScreenWidth,
    },
    Form: {
        //borderWidth: 1,
        shadowRadius: 1,
        shadowColor: 'red',
        textShadowColor: 'red',
        shadowRadius: 1,
        width: ScreenWidth-50,
    },  
    Item: {
        
    },
    Label: {
        
    },
    Input: {
        
    },
})
