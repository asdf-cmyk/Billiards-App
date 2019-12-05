import React, { Component } from "react"
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base"

export default class MyFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("Home")
            }}
          >
            <Icon name="home" />
            <Text>홈</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("ChatList")
            }}
          >
            <Icon name="md-chatboxes" />
            <Text>채팅</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("NearStadium")
            }}
          >
            <Icon active name="map" />
            <Text>근처당구장</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("UserInfo")
            }}
          >
            <Icon name="person" />
            <Text>내정보</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
