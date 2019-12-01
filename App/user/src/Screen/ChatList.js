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
import Layout from "../Components/Layout"

class ChatList extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Layout navigation={this.props.navigation} title="채팅리스트">
        <Text>채팅 리스트</Text>
      </Layout>
    )
  }
}

export default ChatList
