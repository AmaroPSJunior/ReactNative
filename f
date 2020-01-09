[1mdiff --cc appNative/App.js[m
[1mindex 99a932a,05eedda..0000000[m
[1m--- a/appNative/App.js[m
[1m+++ b/appNative/App.js[m
[36m@@@ -3,18 -3,20 +3,33 @@@[m [mimport { COLOR, ThemeContext, getTheme[m
  import Routes from './src/routes'[m
  import { Provider } from 'react-redux'[m
  import store from './src/store'[m
[32m++<<<<<<< HEAD[m
[32m +[m
[32m +import { AppLoading } from 'expo'[m
[32m +import { Container, Text, Button } from 'native-base'[m
[32m +import * as Font from 'expo-font'[m
[32m +import { Ionicons } from '@expo/vector-icons'[m
[32m +[m
[32m +[m
[32m++=======[m
[32m+ import { AppLoading } from 'expo'[m
[32m+ import { Container, Text, Button } from 'native-base'[m
[32m+ import * as Font from 'expo-font'[m
[32m+ import { Ionicons } from '@expo/vector-icons'[m
[32m+ import DataHora from './src/components/dataHora'[m
[32m+ [m
[32m+ [m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
  export default class App extends Component {[m
    constructor(props) {[m
      super(props);[m
      this.state = {[m
        isReady: false,[m
[32m++<<<<<<< HEAD[m
[32m++=======[m
[32m+       auth: false,[m
[32m+       teste: 'amaro',[m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
      };[m
    }[m
    [m
[36m@@@ -26,16 -28,18 +41,31 @@@[m
      });[m
      this.setState({ isReady: true });[m
    }[m
[32m++<<<<<<< HEAD[m
[32m +[m
[32m +  render() {[m
[32m +    if (!this.state.isReady) {[m
[32m +      return <AppLoading/>;[m
[32m +    }[m
[32m +[m
[32m +    return ([m
[32m +      <Provider store={store}>[m
[32m +        <Container>[m
[32m +          <ThemeContext.Provider value={getTheme(uiTheme)}>[m
[32m++=======[m
[32m+ [m
[32m+   render() {[m
[32m+     console.log('app.js', DataHora('hours'))[m
[32m+ [m
[32m+     if (!this.state.isReady) {[m
[32m+       return <AppLoading/>;[m
[32m+     }[m
[32m+ [m
[32m+     return ([m
[32m+       <Provider store={store}>[m
[32m+         <Container>[m
[32m+             <ThemeContext.Provider value={getTheme(uiTheme)}>[m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
              <Routes />[m
            </ThemeContext.Provider>[m
          </Container>[m
[1mdiff --cc appNative/src/routes/home/homePage.js[m
[1mindex 6fc63e6,c2e4e8f..0000000[m
[1m--- a/appNative/src/routes/home/homePage.js[m
[1m+++ b/appNative/src/routes/home/homePage.js[m
[36m@@@ -5,9 -4,10 +4,16 @@@[m [mimport { COLOR } from 'react-native-mat[m
  import api from '../../services'[m
  import axios from 'axios'[m
  import Constants from 'expo-constants'[m
[32m++<<<<<<< HEAD[m
[32m +import ItemList from '../../components/ItemList';[m
[32m +//import Img from '../../Img'[m
[32m +//git[m
[32m++=======[m
[32m+ import DataHora from '../../components/dataHora'[m
[32m+ import { Modal, Portal, Button, Provider, Drawer } from 'react-native-paper'[m
[32m+ import * as Paper from 'react-native-paper'[m
[32m+ const Text2 = Paper.Text[m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
  [m
  export default class Home extends Component {[m
      constructor(props) {[m
[36m@@@ -15,7 -15,9 +21,13 @@@[m
          this.state = {[m
              item: null,[m
              error: null,[m
[32m++<<<<<<< HEAD[m
[32m +            data: [ 'pedro', 'amaro', 'junior' ], [m
[32m++=======[m
[32m+             data: [ 'pedro', 'amaro', 'junior' ],[m
[32m+             visible: false,[m
[32m+             active: 'first',[m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
          };[m
      }[m
      [m
[36m@@@ -36,26 -38,124 +48,146 @@@[m
      //     handleTeste()[m
      // }[m
  [m
[32m+     _showModal = () => this.setState({ visible: true });[m
[32m+     _hideModal = () => this.setState({ visible: false });[m
[32m+ [m
      render() { [m
[32m++<<<<<<< HEAD[m
[32m +[m
[32m +        return ([m
[32m +            <View style={styles.container}>     [m
[32m +                <SafeAreaView style={styles.Header}>[m
[32m +                    <ScrollView style={styles.scrollView} horizontal={true}>[m
[32m +                        <Text style={styles.text}>item</Text>[m
[32m +                        <Text style={styles.text}>item</Text>[m
[32m +                        <Text style={styles.text}>item</Text>[m
[32m +                        <Text style={styles.text}>item</Text>[m
[32m +                        <Text style={styles.text}>item</Text>[m
[32m +                        <Text style={styles.text}>item</Text>[m
[32m +                    </ScrollView>[m
[32m +                </SafeAreaView>[m
[32m +                <SafeAreaView style={styles.Content}>[m
[32m +                    <ScrollView style={styles.scrollView}>[m
[32m +                        <ItemList />[m
[32m +                    </ScrollView>[m
[32m +                </SafeAreaView>[m
[32m +            </View>[m
[32m++=======[m
[32m+         const { active } = this.state;[m
[32m+         const { visible } = this.state;[m
[32m+         const Data = DataHora('data')[m
[32m+         console.log('home.js', DataHora('hours'))[m
[32m+ [m
[32m+         return ([m
[32m+ [m
[32m+             <Provider>[m
[32m+                 <Portal>[m
[32m+                     <Drawer.Section title="Some title">[m
[32m+                         <Drawer.Item[m
[32m+                             label="First Item"[m
[32m+                             active={active === 'first'}[m
[32m+                             onPress={() => { this.setState({ active: 'first' }); }}[m
[32m+                         />[m
[32m+                         <Drawer.Item[m
[32m+                             label="Second Item"[m
[32m+                             active={active === 'second'}[m
[32m+                             onPress={() => { this.setState({ active: 'second' }); }}[m
[32m+                         />[m
[32m+                     </Drawer.Section>[m
[32m+                     <Modal visible={visible} onDismiss={this._hideModal} style={styles.Modal}>[m
[32m+                         <Text2>Example Modal</Text2>[m
[32m+                     </Modal>[m
[32m+ [m
[32m+                     <View style={styles.container}>[m
[32m+                         <SafeAreaView style={styles.Header}>[m
[32m+                             <ScrollView style={styles.scrollView} horizontal={true}>[m
[32m+                                 <Text style={styles.text}>item</Text>[m
[32m+                                 <Text style={styles.text}>item</Text>[m
[32m+                                 <Text style={styles.text}>item</Text>[m
[32m+                                 <Text style={styles.text}>item</Text>[m
[32m+                                 <Text style={styles.text}>item</Text>[m
[32m+                                 <Text style={styles.text}>item</Text>[m
[32m+                             </ScrollView>[m
[32m+                         </SafeAreaView>[m
[32m+                         <SafeAreaView style={styles.Content}>[m
[32m+                             <ScrollView style={styles.scrollView}>[m
[32m+ [m
[32m+                                 <TouchableOpacity style={styles.item} onPress={this._showModal}>[m
[32m+                                     <Image source={require(`../../../assets/${1}.jpg`)} style={styles.ImgItem} />[m
[32m+                                     <View style={styles.DescriptionItem}>[m
[32m+                                         <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>[m
[32m+                                         <View style={styles.FooterItem}>[m
[32m+                                             <Text style={styles.TitleFooterItem}>Title</Text>[m
[32m+                                             <Text style={styles.DataFooterItem}>{Data}</Text>[m
[32m+                                         </View>[m
[32m+                                     </View>[m
[32m+                                 </TouchableOpacity>[m
[32m+                                 <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>[m
[32m+                                     <Image source={require(`../../../assets/${2}.jpg`)} style={styles.ImgItem} />[m
[32m+                                     <View style={styles.DescriptionItem}>[m
[32m+                                         <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>[m
[32m+                                         <View style={styles.FooterItem}>[m
[32m+                                             <Text style={styles.TitleFooterItem}>Title</Text>[m
[32m+                                             <Text style={styles.DataFooterItem}>{Data}</Text>[m
[32m+                                         </View>[m
[32m+                                     </View>[m
[32m+                                 </TouchableOpacity>[m
[32m+                                 <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>[m
[32m+                                     <Image source={require(`../../../assets/${3}.jpg`)} style={styles.ImgItem} />[m
[32m+                                     <View style={styles.DescriptionItem}>[m
[32m+                                         <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>[m
[32m+                                         <View style={styles.FooterItem}>[m
[32m+                                             <Text style={styles.TitleFooterItem}>Title</Text>[m
[32m+                                             <Text style={styles.DataFooterItem}>{Data}</Text>[m
[32m+                                         </View>[m
[32m+                                     </View>[m
[32m+                                 </TouchableOpacity>[m
[32m+                                 <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>[m
[32m+                                     <Image source={require(`../../../assets/${4}.jpg`)} style={styles.ImgItem} />[m
[32m+                                     <View style={styles.DescriptionItem}>[m
[32m+                                         <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>[m
[32m+                                         <View style={styles.FooterItem}>[m
[32m+                                             <Text style={styles.TitleFooterItem}>Title</Text>[m
[32m+                                             <Text style={styles.DataFooterItem}>{Data}</Text>[m
[32m+                                         </View>[m
[32m+                                     </View>[m
[32m+                                 </TouchableOpacity>[m
[32m+                                 <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>[m
[32m+                                     <Image source={require(`../../../assets/${5}.jpg`)} style={styles.ImgItem} />[m
[32m+                                     <View style={styles.DescriptionItem}>[m
[32m+                                         <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>[m
[32m+                                         <View style={styles.FooterItem}>[m
[32m+                                             <Text style={styles.TitleFooterItem}>Title</Text>[m
[32m+                                             <Text style={styles.DataFooterItem}>{Data}</Text>[m
[32m+                                         </View>[m
[32m+                                     </View>[m
[32m+                                 </TouchableOpacity>[m
[32m+                                 <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>[m
[32m+                                     <Image source={require(`../../../assets/${6}.jpg`)} style={styles.ImgItem} />[m
[32m+                                     <View style={styles.DescriptionItem}>[m
[32m+                                         <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>[m
[32m+                                         <View style={styles.FooterItem}>[m
[32m+                                             <Text style={styles.TitleFooterItem}>Title</Text>[m
[32m+                                             <Text style={styles.DataFooterItem}>{Data}</Text>[m
[32m+                                         </View>[m
[32m+                                     </View>[m
[32m+                                 </TouchableOpacity>[m
[32m+                                 <TouchableOpacity style={styles.item} onPress={() => alert('item:')}>[m
[32m+                                     <Image source={require(`../../../assets/${7}.png`)} style={styles.ImgItem} />[m
[32m+                                     <View style={styles.DescriptionItem}>[m
[32m+                                         <Text style={styles.TextItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>[m
[32m+                                         <View style={styles.FooterItem}>[m
[32m+                                             <Text style={styles.TitleFooterItem}>Title</Text>[m
[32m+                                             <Text style={styles.DataFooterItem}>{Data}</Text>[m
[32m+                                         </View>[m
[32m+                                     </View>[m
[32m+                                 </TouchableOpacity>[m
[32m+                             </ScrollView>[m
[32m+                         </SafeAreaView>[m
[32m+                     </View>[m
[32m+                 </Portal>[m
[32m+             </Provider>[m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
          )[m
      }[m
  }[m
[36m@@@ -93,7 -198,62 +230,66 @@@[m [mconst styles = StyleSheet.create([m
      Content:{[m
          padding: 10,[m
          paddingTop: 30,[m
[32m++<<<<<<< HEAD[m
[32m +        height: '85%',[m
[32m++=======[m
[32m+         height: '85.3%',[m
[32m+     },[m
[32m+     item:{[m
[32m+         flexDirection: 'row',[m
[32m+         height: 'auto',[m
[32m+         width: 'auto',[m
[32m+         marginVertical: 10,[m
[32m+     },[m
[32m+     ImgItem:{[m
[32m+         backgroundColor: COLOR.blue700, [m
[32m+         color: '#fff',[m
[32m+         fontWeight: 'bold',[m
[32m+         fontSize: 20,[m
[32m+         borderWidth: 1,[m
[32m+         borderColor: '#fff',[m
[32m+         borderRadius: 10, [m
[32m+         textAlign: "center",[m
[32m+         lineHeight: 100,[m
[32m+         margin: 0,[m
[32m+         height: 100,[m
[32m+         width: 100,[m
[32m+     },[m
[32m+     DescriptionItem:{[m
[32m+         height: 100,[m
[32m+     },[m
[32m+     TextItem:{[m
[32m+         fontSize: 15,[m
[32m+         paddingHorizontal: 10,[m
[32m+         paddingRight: 10,[m
[32m+         width: 240,[m
[32m+     },[m
[32m+     FooterItem:{[m
[32m+         flexDirection: "row",[m
[32m+     },[m
[32m+     TitleFooterItem:{[m
[32m+         color: '#aaa',[m
[32m+         fontSize: 12,[m
[32m+         margin: 0,[m
[32m+         paddingLeft: 10,[m
[32m+         width: 100,[m
[32m+         height: 'auto',[m
[32m+         bottom: 0,[m
[32m+         flex: 1,[m
[32m+         lineHeight: 40,[m
[32m+     },[m
[32m+     DataFooterItem:{[m
[32m+         color: '#aaa',[m
[32m+         fontSize: 12,[m
[32m+         margin: 0,[m
[32m+         paddingRight: 10,[m
[32m+         width: 100,[m
[32m+         height: 'auto',[m
[32m+         bottom: 0,[m
[32m+         textAlign: 'right',[m
[32m+         flex: 1,[m
[32m+         lineHeight: 40,[m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
      },[m
  })[m
  [m
[1mdiff --cc appNative/src/routes/index.js[m
[1mindex 0e6c172,59303f5..0000000[m
[1m--- a/appNative/src/routes/index.js[m
[1m+++ b/appNative/src/routes/index.js[m
[36m@@@ -7,51 -7,52 +7,100 @@@[m [mimport ForgotPassword from './auth/forg[m
  import NewUser from './auth/newUser'[m
  import Index from './auth/index'[m
  import ErrorPage from './error'[m
[32m++<<<<<<< HEAD[m
[32m +import Teste from './auth/teste'[m
[32m +import { useSelector, useDispatch } from 'react-redux'[m
[32m +import Toolbar from '../components/toolbar'[m
[32m +import BottonNav from '../components/bottonNav'[m
[32m +//git[m
[32m +[m
[32m +[m
[32m +export default Routes = () => {[m
[32m +   const data = useSelector(state => state.authenticated);[m
[32m +[m
[32m +   if (data) {[m
[32m +[m
[32m +      return ([m
[32m +         <>[m
[32m +            <Toolbar/>[m
[32m +            <Router> [m
[32m++=======[m
[32m+ import Toolbar from '../components/toolbar'[m
[32m+ import BottonNav from '../components/bottonNav'[m
[32m+ [m
[32m+ [m
[32m+ export default class Routes extends Component {[m
[32m+    constructor(props) {[m
[32m+       super(props);[m
[32m+       this.state = {[m
[32m+         auth: true,[m
[32m+       };[m
[32m+    }[m
[32m+ [m
[32m+    render(){[m
[32m+       if (this.state.auth) {[m
[32m+          return([m
[32m+             <>[m
[32m+                <Toolbar/>[m
[32m+                <Router>[m
[32m+                   <Scene key = "root" >[m
[32m+                      <Scene key = "index" component = {Index} hideNavBar = {true} />[m
[32m+                      <Scene key = "authPage" component = {AuthPage} hideNavBar = {true} />[m
[32m+                      <Scene key = "forgotPassword" component = {ForgotPassword} hideNavBar = {true} />[m
[32m+                      <Scene key = "home" component = {Home} hideNavBar = {true} initial = {true} />[m
[32m+                      <Scene key = "newUser" component = {NewUser} hideNavBar = {true} />[m
[32m+                      <Scene key = "about" component = {About} hideNavBar = {true} />[m
[32m+                      <Scene key = "error" component = {ErrorPage} hideNavBar = {true} />[m
[32m+                   </Scene>[m
[32m+                </Router>[m
[32m+                <BottonNav/>[m
[32m+             </>[m
[32m+          )[m
[32m+       } else {[m
[32m+        [m
[32m+          return([m
[32m+             <Router>[m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
                 <Scene key = "root" >[m
[31m-                   <Scene key = "index" component = {Index} hideNavBar = {true} />[m
[32m+                   <Scene key = "index" component = {Index} hideNavBar = {true} initial = {true} />[m
                    <Scene key = "authPage" component = {AuthPage} hideNavBar = {true} />[m
                    <Scene key = "forgotPassword" component = {ForgotPassword} hideNavBar = {true} />[m
[32m++<<<<<<< HEAD[m
[32m +                  <Scene key = "home" component = {Home} hideNavBar = {true} initial = {true}/>[m
[32m +                  <Scene key = "newUser" component = {NewUser} hideNavBar = {true} />[m
[32m +                  <Scene key = "about" component = {About} hideNavBar = {true} />[m
[32m +                  <Scene key = "error" component = {ErrorPage} hideNavBar = {true} />[m
[32m +                  <Scene key = "teste" component = {Teste} hideNavBar = {true} />[m
[32m +               </Scene> [m
[32m +            </Router>[m
[32m +            <BottonNav/>[m
[32m +         </>[m
[32m +      )[m
[32m +[m
[32m +   }else{[m
[32m +      return ([m
[32m +         <Router>[m
[32m +            <Scene key = "root" >[m
[32m +               <Scene key = "index" component = {Index} hideNavBar = {true} initial = {true} />[m
[32m +               <Scene key = "authPage" component = {AuthPage} hideNavBar = {true} />[m
[32m +               <Scene key = "forgotPassword" component = {ForgotPassword} hideNavBar = {true} />[m
[32m +               <Scene key = "home" component = {Home} hideNavBar = {true} />[m
[32m +               <Scene key = "newUser" component = {NewUser} hideNavBar = {true} />[m
[32m +               <Scene key = "about" component = {About} hideNavBar = {true} />[m
[32m +               <Scene key = "error" component = {ErrorPage} hideNavBar = {true} />[m
[32m +               <Scene key = "teste" component = {Teste} hideNavBar = {true} />[m
[32m +            </Scene>[m
[32m +         </Router>[m
[32m +      )[m
[32m++=======[m
[32m+                   <Scene key = "home" component = {Home} hideNavBar = {true} />[m
[32m+                   <Scene key = "newUser" component = {NewUser} hideNavBar = {true} />[m
[32m+                   <Scene key = "about" component = {About} hideNavBar = {true} />[m
[32m+                   <Scene key = "error" component = {ErrorPage} hideNavBar = {true} />[m
[32m+                </Scene>[m
[32m+             </Router>[m
[32m+          )[m
[32m+       } [m
[32m++>>>>>>> f825b07f7af935a7bad20c68d9803a460afb961b[m
     }[m
  }[m
