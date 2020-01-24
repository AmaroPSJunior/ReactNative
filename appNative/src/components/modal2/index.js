import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class ModalExample extends Component {
  state = {
    //modalVisible: false,
    modalVisible: this.props.visible,
  };

  setModalVisible(visible) { this.setState({ modalVisible: visible })}


  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                    <Text>Fechar Modal</Text>
                </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}