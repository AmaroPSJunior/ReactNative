import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { TouchableOpacity, View, Dimensions, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'


export default class ModalCustom extends React.Component {
  state = {
    visible: false,
  };

  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <Provider>
         <Portal>
           <Modal visible={visible} onDismiss={this._hideModal}>
              <View styles={styles.Content}>
                <Text>Example Modal</Text>
                <Text>Example Modal</Text>
                <Text>Example Modal</Text>
                <Text>Example Modal</Text>
                <Text>Example Modal</Text>
                <Text>Example Modal</Text>
              </View>
           </Modal>
           <Button onPress={this._showModal}>
             Show
           </Button>
         </Portal>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  Content:{
    justifyContent: "center",
    alignItems: "center",
    color: '#fff',
  },
});
