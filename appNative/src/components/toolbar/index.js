import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Toolbar } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux'
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services'

const reqLogoutUser = async () => {
    const state = useSelector(state => state)
    const { token } = state
    console.log('token', token)
  
    alert('teste')

    api.post('logout/' + access_token)
    .then((response) => {
 
       alert(response.data)
    })
    .then((response) => {
       const { access_token } = response.data
 
       if (response.data.error) {
          alert(response.data.error_description)
       } 
       
       alert('access_token: ' + access_token)
 
    })
    .catch(function (error) {
      console.log('ER' + error) 
    })
 }

export default ToolbarCustom = () => {
    state = {
        ListItem: null,
        pesquisa: null,
    };

    const dispatch = useDispatch();

    function goToIndex () {
        dispatch(changeAuthAction(false))
        Actions.index()
    }

    function changeAuthAction (bool) {
        return { type: 'CHANGE_AUTH', bool }
    }

    const listFunction = ( index ) => {
        
        if ( index == 0 ) {
            alert('selecionado item 1')    
        } else if ( index == 1 ) {
            alert('selecionado item 2')    
        }else if ( index == 2 ) {
            reqLogoutUser()
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
