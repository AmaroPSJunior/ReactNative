import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Portal, Provider } from 'react-native-paper'
import { COLOR } from 'react-native-material-ui'
import Constants from 'expo-constants'
import React from 'react'

import getUser from '../../services/getUser'
import Login from '../../services/login'
import Projects from '../../services/getProject'
import Data from '../../components/dataHora'
import PostSignUp from '../../services/postSignUp'
        


export default function Home() {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    
    function SignUp() {
        PostSignUp(
            'amaro silva',
            'arcamos.j@gmail.com',
            'amaro',
            '1234',
            'rua da portal',
            '2000',
            'casa',
            '12397060',
            'village',
            'cacapava',
            'SP',
            '1'
        )
    } 

    function UserLogin() { Login('amaro', '1234', dispatch) }
    function ReadState() { console.log('state: ', state.user) }
    function ProjectList() { Projects(state.user.access_token, dispatch) }


    return (

        <Provider>
            <Portal>
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

                            <TouchableOpacity style={styles.item} onPress={ReadState}>
                                <Image source={require(`../../../assets/${1}.jpg`)} style={styles.ImgItem} />
                                <View style={styles.DescriptionItem}>
                                    <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                    <View style={styles.FooterItem}>
                                        <Text style={styles.TitleFooterItem}>Title</Text>
                                        <Text style={styles.DataFooterItem}>{Data}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item} onPress={UserLogin}>
                                <Image source={require(`../../../assets/${2}.jpg`)} style={styles.ImgItem} />
                                <View style={styles.DescriptionItem}>
                                    <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                    <View style={styles.FooterItem}>
                                        <Text style={styles.TitleFooterItem}>Title</Text>
                                        <Text style={styles.DataFooterItem}>{Data}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item} onPress={SignUp}>
                                <Image source={require(`../../../assets/${3}.jpg`)} style={styles.ImgItem} />
                                <View style={styles.DescriptionItem}>
                                    <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                    <View style={styles.FooterItem}>
                                        <Text style={styles.TitleFooterItem}>Title</Text>
                                        <Text style={styles.DataFooterItem}>{Data}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item} onPress={ProjectList}>
                                <Image source={require(`../../../assets/${4}.jpg`)} style={styles.ImgItem} />
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

