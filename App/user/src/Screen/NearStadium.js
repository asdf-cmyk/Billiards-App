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
  Footer,
  FooterTab,
  Icon
} from "native-base"

class NearStadium extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>근처 당구장</Text>
        </Content>
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
              active
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
      </Container>
    )
  }
}

export default NearStadium
