import React from "react"
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  List,
  ListItem,
  Footer,
  FooterTab,
  Icon,
  Body,
  Title,
  Left
} from "native-base"
import MyFooter from "../Components/MyFooter"

class Home extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{flex:1}}>{this.props.children}</Content>
        <MyFooter navigation={this.props.navigation}></MyFooter>
      </Container>
    )
  }
}

export default Home
