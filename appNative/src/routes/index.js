import { Router, Scene } from 'react-native-router-flux'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

import ForgotPassword from './auth/forgotPassword'
import AuthPage from './auth/authPage'
import NewUser from './auth/newUser'
import Index from './auth/index'
import BottonNav from '../components/bottonNav'
import Toolbar from '../components/toolbar'
import Home from './home/homePage'
import About from './home/about'


export default Routes = () => {
   const authenticated = useSelector(state => state.authenticated);

   if (authenticated) {
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
               </Scene>
            </Router>
            <BottonNav/>
         </>
      )
   } else {
      
      return(
         <>
            <Router>
               <Scene key = "root" >
                  <Scene key = "index" component = {Index} hideNavBar = {true} initial = {true} />
                  <Scene key = "authPage" component = {AuthPage} hideNavBar = {true} />
                  <Scene key = "forgotPassword" component = {ForgotPassword} hideNavBar = {true} />
                  <Scene key = "home" component = {Home} hideNavBar = {true} />
                  <Scene key = "newUser" component = {NewUser} hideNavBar = {true} />
                  <Scene key = "about" component = {About} hideNavBar = {true} />
               </Scene> 
            </Router>
         </>
      )
   }
}