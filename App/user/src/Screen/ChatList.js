import React from "react"
import {
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base"
import Layout from "../Components/Layout"

class ChatList extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Layout navigation={this.props.navigation} title="채팅리스트">
        <List>
          <ListItem avatar button onPress = {() => this.props.navigation.navigate("Chat")}>
            <Left>
              <Thumbnail source={{ uri: "Image URL" }} />
            </Left>
            <Body>
              <Text>유저 A</Text>
              <Text note>
                오늘 경기 가능하신가요
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar button onPress = {() => this.props.navigation.navigate("Chat")}>
            <Left>
              <Thumbnail source={{ uri: "Image URL" }} />
            </Left>
            <Body>
              <Text>유저 B</Text>
              <Text note>
                안녕하세요
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Layout>
    )
  }
}

export default ChatList
