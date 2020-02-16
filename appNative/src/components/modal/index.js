import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, Button, ScrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { COLOR } from 'react-native-material-ui'
import React from 'react';


export default function ModalExample() {
  const { page, totalPage, modalVisible, images, processes } = useSelector(state => state)
  const dispatch = useDispatch()
  //console.log(page, totalPage, modalVisible, processes[0].images[0])

  function setModalVisible(bool) { return { type: 'CHANGE_MODALVISIBLE', bool }}
  function setPage(number) { return { type: 'CHANGE_PAGE', number }}

  return (
    <>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { dispatch(setModalVisible(!modalVisible)) }}
      >
        <View style={styles.Conteiner}>

          <View style={styles.Header}>
            <Text>Title modal!</Text>
            <Text>{page}/{totalPage}</Text>
          </View>

          <View style={styles.Content}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              >
            
              { images.map(img => {
                return(
                  <Text hash={img.hash} style={styles.Img}>{img.name}</Text>
                )
              })}
        
            </ScrollView>
          </View>

          <View style={styles.Footer}>
            <Button
              title="  <<  "
              color={COLOR.blue700}
              onPress={() => { dispatch(setPage(page - 1)) }}
              disabled={page <= 1 ? true : false}
            />
            <Button
              title="  Sair  "
              color={COLOR.blue700}
              onPress={() => { dispatch(setModalVisible(!modalVisible)) }}
            />
            <Button
              title="  >>  "
              color={COLOR.blue700}
              onPress={() => { dispatch(setPage(page + 1)) }}
              disabled={page >= totalPage ? true : false}
            />
          </View>
          
        </View>
      </Modal>

    </>
  )
}

const styles = StyleSheet.create({
  Conteiner: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    height: '95%',
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    //backgroundColor: 'green',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  Content: {
    height: '18%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    flexGrow: 1,

  },
  Img: {
    height: 200,
    backgroundColor: COLOR.blue700,
    paddingHorizontal: 100,
    marginHorizontal: 10, 
    lineHeight: 180,

    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
  },
  Footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: 'yellow',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 20,
  },
  FooterButton: {
    width: 50,
    backgroundColor: COLOR.blue700,
  }
})
