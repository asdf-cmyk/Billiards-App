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
      </Layout>
    )
  }
}

export default Home
