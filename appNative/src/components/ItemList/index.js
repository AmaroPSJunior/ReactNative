import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, Text, Button, View, Dimensions, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import Constants from 'expo-constants'


export default function ItensList() {
  const qty = 100;
  const itens = useSelector(state => state.itens.slice(0, qty));
  const dispatch = useDispatch();

  function addItem() {
    dispatch(addItemAction('amaro'))
    console.log(itens)
  }

  function addItemAction(title) {
    return { type: 'ADD_ITEM', title }
  }

  return ( 
    <>
      <View> 
        { itens.map((item, i) => 
          <TouchableOpacity key={i} style={styles.item} onPress={() => alert('item:')}>
            <Text style={styles.ImgItem}>{item + '-' + i}</Text>
            <View style={styles.DescriptionItem}>
              <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
              <Text style={styles.FooterItem}>{ item + '-' + i }  - 01-01/2020</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <Button title="Adicionar curso" onPress={addItem} />
    </>
  );
}

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#6e9cc1',
        height: 100,
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    Header: {
        top: 24,
        flexDirection: "row",
    },
    scrollView: {
    },
    text: {
        backgroundColor: COLOR.blue700, 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10, 
        padding: 15,
        margin: 10,
    },
    Content:{
        padding: 10,
        paddingTop: 30,
        height: ScreenHeight,
    },
    item:{
        flexDirection: 'row',
        height: 'auto',
        width: 'auto',
        marginVertical: 10,
    },
    ImgItem:{
        backgroundColor: COLOR.blue700, 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10, 
        textAlign: "center",
        lineHeight: 100,
        margin: 0,
        height: 100,
        width: 100,
    },
    DescriptionItem:{
        
    },
    TextItem:{
        fontWeight: 'bold',
        fontSize: 15,
        paddingHorizontal: 10,
        paddingRight: 10,
        width: 240,
        textAlign: 'justify',
    },
    FooterItem:{
        fontSize: 12,
        margin: 0,
        paddingRight: 10,
        width: '100%',
        height: 'auto',
        textAlign: "right",
        bottom: 0,
        textAlign: 'right',
    },
})