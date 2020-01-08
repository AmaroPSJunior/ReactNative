import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import api from '../../services'
import axios from 'axios'
import Constants from 'expo-constants'
import DataHora from '../../components/dataHora'
import { Modal, Portal, Button, Provider, Drawer } from 'react-native-paper'
import * as Paper from 'react-native-paper'
const Text2 = Paper.Text

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            error: null,
            data: [ 'pedro', 'amaro', 'junior' ],
            visible: false,
            active: 'first',
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

    _showModal = () => this.setState({ visible: true });
    _hideModal = () => this.setState({ visible: false });

    render() { 
        const { active } = this.state;
        const { visible } = this.state;
        const Data = DataHora('data')
        console.log('home.js', DataHora('hours'))

        return (

            <Provider>
                <Portal>
                    <Drawer.Section title="Some title">
                        <Drawer.Item
                            label="First Item"
                            active={active === 'first'}
                            onPress={() => { this.setState({ active: 'first' }); }}
                        />
                        <Drawer.Item
                            label="Second Item"
                            active={active === 'second'}
                            onPress={() => { this.setState({ active: 'second' }); }}
                        />
                    </Drawer.Section>
                    <Modal visible={visible} onDismiss={this._hideModal} style={styles.Modal}>
                        <Text2>Example Modal</Text2>
                    </Modal>

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

                                <TouchableOpacity style={styles.item} onPress={this._showModal}>
                                    <Image source={require(`../../../assets/${1}.jpg`)} style={styles.ImgItem} />
                                    <View style={styles.DescriptionItem}>
                                        <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                        <View style={styles.FooterItem}>
                                            <Text style={styles.TitleFooterItem}>Title</Text>
                                            <Text style={styles.DataFooterItem}>{Data}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>
                                    <Image source={require(`../../../assets/${2}.jpg`)} style={styles.ImgItem} />
                                    <View style={styles.DescriptionItem}>
                                        <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                        <View style={styles.FooterItem}>
                                            <Text style={styles.TitleFooterItem}>Title</Text>
                                            <Text style={styles.DataFooterItem}>{Data}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>
                                    <Image source={require(`../../../assets/${3}.jpg`)} style={styles.ImgItem} />
                                    <View style={styles.DescriptionItem}>
                                        <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                        <View style={styles.FooterItem}>
                                            <Text style={styles.TitleFooterItem}>Title</Text>
                                            <Text style={styles.DataFooterItem}>{Data}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>
                                    <Image source={require(`../../../assets/${4}.jpg`)} style={styles.ImgItem} />
                                    <View style={styles.DescriptionItem}>
                                        <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                        <View style={styles.FooterItem}>
                                            <Text style={styles.TitleFooterItem}>Title</Text>
                                            <Text style={styles.DataFooterItem}>{Data}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>
                                    <Image source={require(`../../../assets/${5}.jpg`)} style={styles.ImgItem} />
                                    <View style={styles.DescriptionItem}>
                                        <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                        <View style={styles.FooterItem}>
                                            <Text style={styles.TitleFooterItem}>Title</Text>
                                            <Text style={styles.DataFooterItem}>{Data}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>
                                    <Image source={require(`../../../assets/${6}.jpg`)} style={styles.ImgItem} />
                                    <View style={styles.DescriptionItem}>
                                        <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                        <View style={styles.FooterItem}>
                                            <Text style={styles.TitleFooterItem}>Title</Text>
                                            <Text style={styles.DataFooterItem}>{Data}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>
                                    <Image source={require(`../../../assets/${7}.png`)} style={styles.ImgItem} />
                                    <View style={styles.DescriptionItem}>
                                        <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                        <View style={styles.FooterItem}>
                                            <Text style={styles.TitleFooterItem}>Title</Text>
                                            <Text style={styles.DataFooterItem}>{Data}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </Portal>
            </Provider>
        )
    }
}

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
    Modal:{
        height: 100, 
        width: 100, 
        backgroundColor: 'red',
        zIndex: 50, 
        left: '50%',
        top: '50%',

    },
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
        height: '85.3%',
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
        height: 100,
    },
    TextItem:{
        fontSize: 15,
        paddingHorizontal: 10,
        paddingRight: 10,
        width: 240,
    },
    FooterItem:{
        flexDirection: "row",
    },
    TitleFooterItem:{
        color: '#aaa',
        fontSize: 12,
        margin: 0,
        paddingLeft: 10,
        width: 100,
        height: 'auto',
        bottom: 0,
        flex: 1,
        lineHeight: 40,
    },
    DataFooterItem:{
        color: '#aaa',
        fontSize: 12,
        margin: 0,
        paddingRight: 10,
        width: 100,
        height: 'auto',
        bottom: 0,
        textAlign: 'right',
        flex: 1,
        lineHeight: 40,
    },
})

