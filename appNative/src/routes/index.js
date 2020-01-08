import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './home/homePage'
import About from './home/about'
import AuthPage from './auth/authPage'
import ForgotPassword from './auth/forgotPassword'
import NewUser from './auth/newUser'
import Index from './auth/index'
import ErrorPage from './error'
import Toolbar from '../components/toolbar'
import BottonNav from '../components/bottonNav'


export default class Routes extends Component {
   constructor(props) {
      super(props);
      this.state = {
        auth: true,
      };
   }

   render(){
      if (this.state.auth) {
         return(
            <>
               <Toolbar/>
               <Router>
                  <Scene key = "root" >
                     <Scene key = "index" component = {Index} hideNavBar = {true} />
                     <Scene key = "authPage" component = {AuthPage} hideNavBar = {true} />
                     <Scene key = "forgotPassword" component = {ForgotPassword} hideNavBar = {true} />
                     <Scene key = "home" component = {Home} hideNavBar = {true} initial = {true} />
                     <Scene key = "newUser" component = {NewUser} hideNavBar = {true} />
                     <Scene key = "about" component = {About} hideNavBar = {true} />
                     <Scene key = "error" component = {ErrorPage} hideNavBar = {true} />
                  </Scene>
               </Router>
               <BottonNav/>
            </>
         )
      } else {
       
         return(
            <Router>
               <Scene key = "root" >
                  <Scene key = "index" component = {Index} hideNavBar = {true} initial = {true} />
                  <Scene key = "authPage" component = {AuthPage} hideNavBar = {true} />
                  <Scene key = "forgotPassword" component = {ForgotPassword} hideNavBar = {true} />
                  <Scene key = "home" component = {Home} hideNavBar = {true} />
                  <Scene key = "newUser" component = {NewUser} hideNavBar = {true} />
                  <Scene key = "about" component = {About} hideNavBar = {true} />
                  <Scene key = "error" component = {ErrorPage} hideNavBar = {true} />
               </Scene>
            </Router>
         )
      } 
   }
}