import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './home/homePage'
import About from './home/about'
import AuthPage from './auth/authPage'
import ForgotPassword from './auth/forgotPassword'
import NewUser from './auth/newUser'
import Index from './auth/index'
import ErrorPage from './error'
import Teste from './auth/teste'


export default class Routes extends Component {
   constructor(props) {
      super(props);
      this.state = {
        auth: false,
      };
   }
   
   componentDidMount(){
      const { auth } = this.props
      if (auth) {
         this.setState({auth})
      } 
   }

   render(){
      //const [auth, setAuth] = React.useState(false)
      const { auth } = this.state

      return(
         <Router>
            <Scene key = "root" >
               <Scene key = "index" component = {Index} hideNavBar = {true} initial = {!auth} />
               <Scene key = "authPage" component = {AuthPage} hideNavBar = {true} />
               <Scene key = "forgotPassword" component = {ForgotPassword} hideNavBar = {true} />
               <Scene key = "home" component = {Home} hideNavBar = {true} initial = {auth}/>
               <Scene key = "newUser" component = {NewUser} hideNavBar = {true} />
               <Scene key = "about" component = {About} hideNavBar = {true} />
               <Scene key = "error" component = {ErrorPage} hideNavBar = {true} />
               <Scene key = "teste" component = {Teste} hideNavBar = {true} />
            </Scene>
         </Router>

         // //tentativa !!!
         // <Toolbar />
         //       <Routes auth={obj.data}/>
         // <BottonNav />
      )
      
   }
}