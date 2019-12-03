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
          <Button>
            <Icon name="StadiumInfo" />
            <Text>내정보</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
