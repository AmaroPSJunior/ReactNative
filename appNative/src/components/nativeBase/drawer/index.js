import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './yourPathToSideBar';
import styles from '../../../../styles'


closeDrawer = () => { this.drawer._root.close() };  

openDrawer = () => { this.drawer._root.open() };


export default class DrawerExample extends Component {
    
    render() { 
        return ( 
            <Drawer 
                ref={(ref) => { this.drawer = ref; }} 
                content={<SideBar navigator={this.navigator} />} 
                onClose={() => this.closeDrawer()} 
                styles={  }
            /> 
        );
    }
}

const propTypes1 = {
    image: PropTypes.shape({ type: PropTypes.oneOf([Image]) }),
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.shape({
        contentContainer: View.propTypes.style,
        container: View.propTypes.style,
    }),
};

const propTypes2 = {
    avatar: PropTypes.element,
    accounts: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.element,
        onPress: PropTypes.func,
    })),
    footer: ListItem.propTypes,
    style: PropTypes.shape({
        container: View.propTypes.style,
        accountContainer: View.propTypes.style,
        topContainer: View.propTypes.style,
        avatarsContainer: View.propTypes.style,
        activeAvatarContainer: View.propTypes.style,
        inactiveAvatarContainer: View.propTypes.style,
    }),
};

const propTypes3 = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        label: PropTypes.string,
        onPress: PropTypes.func,
        onLongPress: PropTypes.func,
        active: PropTypes.bool,
        disabled: PropTypes.bool,
    })),
    divider: PropTypes.bool,
    style: PropTypes.shape({
        container: View.propTypes.style,
        item: View.propTypes.style,
        subheader: View.propTypes.style,
        icon: Text.propTypes.style,
        value: Text.propTypes.style,
        label: Text.propTypes.style,
    }),
};