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
import Layout from "../Components/Layout"

class Home extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Layout navigation={this.props.navigation} title="홈">
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
            <Button
              onPress={() => this.props.navigation.navigate("RecommendUser")}
            >
              <Text>추천상대확인</Text>
            </Button>
      </Layout>
    )
  }
}

export default Home
