import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text } from 'native-base';


export default class ContentExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}