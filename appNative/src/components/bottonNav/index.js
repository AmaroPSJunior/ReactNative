import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { BottomNavigation } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';


export default class bottomNav extends Component {
    state = {
        active: null,
    };
    
    render() {
        const goToAbout = () => {
            Actions.about()
            this.setState({ active: 'today' })
        }

        const goToHome = () => {
            Actions.home()
            this.setState({ active: 'settings' })
        }

       return(
            <BottomNavigation active={this.state.active} hidden={false} >
                <BottomNavigation.Action
                    key="home"
                    icon="home"
                    label="home"
                    onPress={() => goToHome()}
                />
                <BottomNavigation.Action
                    key="people"
                    icon="people"
                    label="People"
                    onPress={() => {this.setState({ active: 'people' })
                        alert(this.state.active)
                    }}
                />
                <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="Bookmark"
                    onPress={() => this.setState({ active: 'bookmark-border' })}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Settings"
                    onPress={() => goToAbout()}
                />
            </BottomNavigation>
        )
    }
}

const styles = StyleSheet.create({

});