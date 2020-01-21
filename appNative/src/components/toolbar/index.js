import React from 'react'
import { StyleSheet } from 'react-native'
import { Toolbar } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux'
import { useSelector, useDispatch } from 'react-redux';
import Logout from '../../services/Logout'


export default function ToolbarCustom() {
    const dispatch = useDispatch();

    state = {
        ListItem: null,
        pesquisa: null,
    };
    
    
    function goToIndex () {
        dispatch(changeAuthAction(false))
        Actions.index()
    }
    
    function changeAuthAction (bool) {
        return { type: 'CHANGE_AUTH', bool }
    }
    
    function listFunction(index) {
        const access_token = useSelector(state => state.user.access_token);

        if ( index == 0 ) {
            alert('selecionado item 1')    
        } else if ( index == 1 ) {
            alert('selecionado item 2')    
        }else if ( index == 2 ) {
            //reqLogoutUser()
            Logout(access_token)
            goToIndex()
        }
    }

    return(
        <Toolbar
            style={ styles.Toolbar }
            leftElement="menu"
            centerElement="Pesquisar"
            searchable={{ 
            autoFocus: true, 
            placeholder: 'Digite...',  
                onLeftElementPress: () => { console.log('teste'); alert('chama menu') },
                onChangeText: () => { console.log('digitou') },
                onSearchClosed: () => { console.log('fechou') },
                onSearchCloseRequested: () => { console.log('clicou em fechar') },
                onSearchPressed: () => { console.log('clicou em pesquisar') },
                onSubmitEditing: (obj) => { 
                    this.setState({ pesquisa: obj.nativeEvent.text })
                    setTimeout(() => {
                    console.log('Pesquisou:', this.state.pesquisa) 
                    }, 300);
                },
            }}
            rightElement={{ menu: { icon: "more-vert", labels: ["item 1", "item 2", "Sair"] }}}
            onRightElementPress={ ( label ) => { 
            //this.setState({ ListItem: label.index + 1 })
            //console.log('item', this.state.ListItem)
            //console.log('../toolbar label: ', label )
            listFunction( label.index )
                
            }}
            
            // placeholder={ '' }
            // autoFocus={ true }
            // autoCapitalize={ '' }
            // autoCorrect={ true }
            // icon={ '' }
        />
    )
}

const styles = StyleSheet.create({
    Toolbar: {

    }
});
