import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Drawer, Avatar, COLOR, ActionButton  } from 'react-native-material-ui'


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

select = () => {
    console.log('teste')
}

export default class DrawerCustom extends Component {
    state = {
        item: null,
        pesquisa: null,
    };
    
    render() {
 
       return( 
        <View>
            <Drawer style={ styles } >
                <Drawer.Header >
                    <Drawer.Header.Account
                        style={{container: { 
                            backgroundColor: COLOR.blue700, 
                            color: 'red', 
                        }}}
                        avatar={<Avatar text="A" />}
                        accounts={[
                            { avatar: <Avatar text="B" /> },
                            { avatar: <Avatar text="C"  /> },
                        ]}
                        footer={{
                            dense: true,
                            centerElement: {
                                primaryText: 'Reservio',
                                secondaryText: 'business@email.com',
                            },
                            rightElement: 'arrow-drop-down',
                        }}
                    />
                </Drawer.Header>
                <Drawer.Section
                    divider
                    items={[
                        { icon: 'bookmark-border', value: 'Notifications' },
                        { icon: 'today', value: 'Calendar', active: true },
                        { icon: 'people', value: 'Clients' },
                    ]}
                />
                <Drawer.Section
                    title="Personal"
                    items={[
                        { icon: 'info', value: 'Info' },
                        { icon: 'settings', value: 'Settings' },
                    ]}
                    
                />
            </Drawer>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        width: ScreenWidth,
    },
});
