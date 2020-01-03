import React from 'react'
import { TouchableOpacity, Text, View, Dimensions, StyleSheet, ImageComponent, TextInput } from 'react-native'
import FormLogin from '../../components/nativeBase/formLogin'
import { Actions } from 'react-native-router-flux'
import styled from 'styled-components';
import TextInputCustom from '../../components/textInput';
import { Button } from 'native-base';

const goToAbout = () => {
   Actions.home()
}

const About = () => {
   return (
      // <Container>
      //    <TouchableOpacity onPress = {goToAbout}>
      //       <Text>Index</Text>
      //    </TouchableOpacity>
      //    <ContainerTitle>
		// 		<Title>React Native with 💅 Styled Components</Title>
		// 	</ContainerTitle>
      // </Container>

      // <Container>
      //    <ContainerImage>
      //       <Image/>
      //    </ContainerImage>
      //    <ContainerForm>
      //       <Form>
      //          <Title />
      //          <ConteinerInput>
      //             <Text/>
      //             <TextInputCustom/>
      //             <Text />
      //             <TextInputCustom />
      //          </ConteinerInput>
      //          <Button/>
      //          <ConteinerText>
      //             <NewUser/>
      //             <Password/>
      //          </ConteinerText>
      //       </Form>
      //    </ContainerForm>
      // </Container>

      <View>
         <View>
            <Image/>
         </View>
         <View>
            <Form>
               <Text />
               <View>
                  <Text/>
                  <TextInputCustom/>
                  <Text />
                  <TextInputCustom />
               </View>
               <Button/>
               <View>
                  <Text/>
                  <Text/>
               </View>
            </Form>
         </View>
      </View>
   )
}


const ContainerImage = styled.View`
   position: 'relative'
` 
const Image = styled.Text`
   position: 'relative'
`
const ContainerForm = styled.View`
   position: 'relative'
`
const Form = styled.View`
   position: 'relative'
`
const Title = styled.Text`
   position: 'relative'
`
const Input = styled.TextInputCustom` 
   align-items: center;
   justify-content: center;
   background-color: #6e9cc1;
   flex: 1;
`
const Button = styled.TouchableOpacity`
   flex: 1;
   background-color: papayawhip;
   justify-content: center;
   align-items: center;
`
const ConteinerText = styled.View`
   font-size: 20px;
   font-weight: 500;
   color: palevioletred;
`
const NewUser = styled.Text`
   font-size: 20px;
   font-weight: 500;
   color: palevioletred;
`
const Password = styled.Text`
   font-size: 20px;
   font-weight: 500;
   color: palevioletred;
`

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
   Container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6e9cc1',
      flex: 1, 
   },
})

export default About