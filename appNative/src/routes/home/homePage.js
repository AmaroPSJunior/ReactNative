import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Portal, Provider } from 'react-native-paper'
import { COLOR } from 'react-native-material-ui'
import Constants from 'expo-constants'
import React from 'react'

import getUser from '../../services/getUser'
import getImg from '../../services/getImg'
import getProjects from '../../services/getProject'
import getPhase from '../../services/getPhase'
import Login from '../../services/login'
import Data from '../../components/dataHora'
import PostSignUp from '../../services/postSignUp'



export default function Home() {
    const { admin, login, user, project, phase, process, image, ...state } = useSelector(state => state)
    const dispatch = useDispatch()
    const Process = []

    function UserLogin() { Login('amaro', '1234', dispatch) }
    function ReadState() { console.log('state: ', state) }

    const phases = user.user.project.phase
    console.log(`\n\n\n\--------------- ${Data('hours')} --------------`)
    

    const userHash = user.user.hash
    const processHash = phases[0].process[1].hash 
    const imageTitle = phases[0].process[1].images[1].name
    //getImg(userHash, processHash, imageTitle)
    
    let link =  'https://img.ibxk.com.br/2019/07/26/26000559344397.jpg?w=1120&h=420&mode=crop&scale=both'
    let link2 = 'http://localhost:9090/uploads/e966bb69-462d-0d6660cf/2887d7bc-2741-4e1bb8ab/pro-amaro-2.jpg'
    

    
    function PhaseList() { phases.map(phase => { return console.log('phase: ', phase.name) }) }
    
    function ProcessList() { phases.map(phase => {
        if (phase.process != null) { phase.process.map(p => { 
            console.log('    process: ', p.name) 
            Process.push(p)
            console.log('   array: ', Process) 

        })}
    })}

    function ImageList() { 
        phases.map(phase => {
            if (phase.process != null) {
                phase.process.map(p => {
                    if (p.images != null) {
                        p.images.map(image => { console.log('       image: ', image.name) })
                    }
                })
            }
        })
    }


    function SelectionList() { 
        console.log(this.hash) 
    }

    function seeDetails() {
        console.log(this) 
    }

    return (
        <Provider>
            <Portal>
                <View style={styles.container}>
                    <SafeAreaView style={styles.Header}>
                        <ScrollView style={styles.scrollView} horizontal={true}>
                        
                            { phases.map(phase => { 
                                return (
                                    <TouchableOpacity hash={phase.hash} style={styles.item} onPress={SelectionList}>
                                        <Text style={styles.text}>{phase.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}

                        </ScrollView>
                    </SafeAreaView>
                    <SafeAreaView style={styles.Content}>
                        <ScrollView style={styles.scrollView}>
                            
                            { Process.map(p => { 
                                return (
                                    <TouchableOpacity hash={p.hash} style={styles.item} onPress={seeDetails}>
                                        <Image source={require(`../../../assets/${1}.jpg`)} style={styles.ImgItem} />
                                        <View style={styles.DescriptionItem}>
                                            <Text style={styles.TextItem}>{p.description}</Text>
                                            <View style={styles.FooterItem}>
                                                <Text style={styles.TitleFooterItem}>{p.name}</Text>
                                                <Text style={styles.DataFooterItem}>{p.price} - {p.price}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}

                            <Image source={{uri: link}} style={styles.ImgItem} />
                            <Image source={{uri: link2}} style={styles.ImgItem} />
                        
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

