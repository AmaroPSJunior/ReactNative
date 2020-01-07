import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import IconCustom from '../../components/iconCustom'
import { COLOR } from 'react-native-material-ui'
import api from '../../services'
import axios from 'axios'
import Constants from 'expo-constants'
//import Img from '../../../assets'


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

                        {
                            this.state.data.map((item, i) => {
                                <TouchableOpacity style={styles.item} key={i} onPress={() => alert('item:', i)}>
                                    <Image  style={styles.ImgItem} />
                                    <View style={styles.DescriptionItem}>
                                        <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                        <Text style={styles.FooterItem}>{i, item}  - 01-01/2020</Text>
                                    </View>
                                </TouchableOpacity>
                            })
                        }

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
        height: ScreenHeight,
    },
    item:{
        //backgroundColor: "#bbb",
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
        //backgroundColor: "#ccc",
        fontWeight: 'bold',
        fontSize: 15,
        paddingHorizontal: 10,
        paddingRight: 10,
        width: 240,
        //height: 83,
        textAlign: 'justify',
    },
    FooterItem:{
        //backgroundColor: "#ddd",
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

