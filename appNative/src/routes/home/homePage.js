import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Image, ScrollView, SafeAreaView, TouchableHighlight, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Portal, Provider } from 'react-native-paper'
import { COLOR } from 'react-native-material-ui'
import Constants from 'expo-constants'
import React from 'react'

import Login from '../../services/login'
import Data from '../../components/dataHora'
import Modal from '../../components/modal'



export default function Home() {
    const dispatch = useDispatch()
    const { admin, login, user, project, phase, processes, process, modalVisible, images, ...state } = useSelector(state => state)
    const phases = user.user.project.phase

    console.log(`\n\n\n\--------------- ${Data('hours')} --------------`)
    
    let link =  'https://img.ibxk.com.br/2019/07/26/26000559344397.jpg?w=1120&h=420&mode=crop&scale=both'
    let link2 = 'http://localhost:9090/uploads/e966bb69-462d-0d6660cf/2887d7bc-2741-4e1bb8ab/pro-amaro-2.jpg'
   
    function UserLogin() { Login('amaro', '1234', dispatch) }
    function ReadState() { console.log('state: ', state) }

    function Images(obj) { return { type: 'CHANGE_IMAGES', obj }}
    function Process(obj) { return { type: 'CHANGE_PROCESSES', obj }}
    function setPage(number) { return { type: 'CHANGE_PAGE', number }}
    function setTotalPage(number) { return { type: 'CHANGE_TOTALPAGE', number }}
    function setModalVisible(bool) { return { type: 'CHANGE_MODALVISIBLE', bool }}
    function SelectionPhase() { ProcessList(this) }
    function SelectionProcess() { ImageList(this) }
    
    function openModal() { dispatch(setModalVisible(true)) }
    
    function ProcessList(itemPphase = phases[0]) {
        phases.map(phase => {
            if (phase.hash === itemPphase.hash) {
                if (phase.process != null) {
                    dispatch(Process(phase.process))
                } else {
                    dispatch(Process([]))
                }
            }
        })
    }
    
    function ImageList(itemProcess = processes[0]) {
        processes.map(pcess => {
            if (pcess.hash === itemProcess.hash) {
                if (pcess.images != null) {
                    dispatch(Images(pcess.images))
                    dispatch(setTotalPage(pcess.images.length))
                    dispatch(setPage(1))
                    console.log(pcess.images)
                } else {
                    dispatch(Images([]))
                }
            }
        })

        dispatch(setModalVisible(true))
        console.log()
    }

    return (
        <Provider>
            <Portal>
                <View style={styles.Container}>
                    <SafeAreaView style={styles.Header}>
                        <ScrollView style={styles.scrollView} horizontal>

                            { phases.map(phase => {
                                return (
                                    <TouchableOpacity hash={phase.hash} style={styles.item} onPress={SelectionPhase}>
                                        <Text style={styles.text}>{phase.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}

                        </ScrollView>
                    </SafeAreaView>

                    <Modal visible={modalVisible} />

                    <SafeAreaView style={styles.Content}>
                        <ScrollView style={styles.scrollView}>
                            { 
                                processes.map((p) => {
                                    return (
                                        <View style={styles.Process}>
                                            <TouchableOpacity hash={p.hash} style={styles.item} onPress={SelectionProcess}>
                                                <Image source={require(`../../../assets/${1}.jpg`)} style={styles.ImgItem} />
                                                <View style={styles.DescriptionItem}>
                                                    <Text style={styles.TextItem}>{p.description}</Text>
                                                    <View style={styles.FooterItem}>
                                                        <Text style={styles.TitleFooterItem}>{p.name}</Text>
                                                        <Text style={styles.DataFooterItem}>{p.price} - {p.price}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }

                            {/*
                            <Image source={{uri: link}} style={styles.ImgItem} />
                            <Image source={{uri: link2}} style={styles.ImgItem} />
                            */}

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
        //height: 'auto',
        //marginTop: Constants.statusBarHeight,
        //padding: 0,
    },
    Header: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 5,
    },
    scrollView: {
    },
    Process: {
        backgroundColor: '#fff',
        marginVertical: 5,
        paddingHorizontal: 10,

        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 5,
        marginHorizontal: 5,
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
        padding: 5,
        height: '80.3%',
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
        borderColor: '#ccc',
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 100,
        margin: 0,
        height: 100,
        width: 100,
    },
    DescriptionItem:{
        height: 100,
        justifyContent: 'space-between',
        alignItems: "flex-start",
    },
    TextItem:{
        fontSize: 15,
        paddingHorizontal: 10,
        paddingRight: 10,
        width: 240,
    },
    FooterItem:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-end",
        flexGrow: 1,
        paddingHorizontal: 10,
        width: '70%',
    },
    TitleFooterItem:{
        color: '#aaa',
        fontSize: 12,
        height: 'auto',
    },
    DataFooterItem:{
        color: '#aaa',
        fontSize: 12,
        height: 'auto',
    },
})

