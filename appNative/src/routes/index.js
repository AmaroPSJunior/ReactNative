import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './home/homePage'
import About from './home/about'
import AuthPage from './auth/authPage'
import ForgotPassword from './auth/forgotPassword'
import Login from './auth/login'
import Index from './auth/index'
import ErrorPage from './error'

const Routes = () => (
   <Router>
      <Scene key = "root" >
         <Scene key = "index" component = {Index} hideNavBar = {true} initial = {true} />
         <Scene key = "authPage" component = {AuthPage} hideNavBar = {true} />
         <Scene key = "forgotPassword" component = {ForgotPassword} hideNavBar = {true} />
         <Scene key = "home" component = {Home} hideNavBar = {true}/>
         <Scene key = "login" component = {Login} hideNavBar = {true} />
         <Scene key = "about" component = {About} hideNavBar = {true} />
         <Scene key = "error" component = {ErrorPage} hideNavBar = {true} />
      </Scene>
   </Router>
)
export default Routes