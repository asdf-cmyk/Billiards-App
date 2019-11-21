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
  Icon
} from "native-base"
import MyFooter from "../Components/MyFooter"

class Home extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>도전 당구왕</Text>
          <Text>현재 {this.state.score}점</Text>
          <List>
            <ListItem>
              <Text>랭킹</Text>
              <Button>
                <Text>변경</Text>
              </Button>
            </ListItem>
            <ListItem>
              <Text>1위 A 1300점</Text>
            </ListItem>
            <ListItem>
              <Text>2위 A 1200점</Text>
            </ListItem>
            <ListItem>
              <Text>3위 A 1100점</Text>
            </ListItem>
            <ListItem>
              <Text>4위 A 1000점</Text>
            </ListItem>
          </List>
          <Button>
            <Text>매칭 ON</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate("RecommendStadium")}>
            <Text>추천상대확인</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              vertical
              active
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
      </Container>
    )
  }
}

export default Home
