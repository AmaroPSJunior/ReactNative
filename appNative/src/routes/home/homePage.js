import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import IconCustom from '../../components/iconCustom'
import { COLOR } from 'react-native-material-ui'
import api from '../../services'
import axios from 'axios'
import Constants from 'expo-constants'
import ItemList from '../../components/ItemList';
//import Img from '../../Img'
//git

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            error: null,
            data: [ 'pedro', 'amaro', 'junior' ], 
        };
    }
    
    // componentDidMount(){
    //     const url = 'http://localhost:9090/'
    //     const url2 = 'http://www.mocky.io/v2/5e0e4ee0330000b580aa8add'

    //     const handleTeste = async () => {

    //         axios.get(url)
    //         .then((response) => {
    //             console.log('res:', response.status )
    //         })
    //         .catch(function (error) {
    //             console.log('error:', error) 
    //         })
    //     }
    //     handleTeste()
    // }

    render() { 

        return (
            <View style={styles.container}>     
                <SafeAreaView style={styles.Header}>
                    <ScrollView style={styles.scrollView} horizontal={true}>
                        <Text style={styles.text}>item</Text>
                        <Text style={styles.text}>item</Text>
                        <Text style={styles.text}>item</Text>
                        <Text style={styles.text}>item</Text>
                        <Text style={styles.text}>item</Text>
                        <Text style={styles.text}>item</Text>
                    </ScrollView>
                </SafeAreaView>
                <SafeAreaView style={styles.Content}>
                    <ScrollView style={styles.scrollView}>
                        <ItemList />
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#6e9cc1',
        //alignItems: 'center',
        //justifyContent: 'center',
        //height: ScreenHeight,
        height: 100,
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    Header: {
        top: 24,
        flexDirection: "row",
    },
    scrollView: {
        //backgroundColor: '#ccc',
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
        height: '85%',
    },
})

