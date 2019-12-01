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
import MyFooter from '../Components/MyFooter'
import Layout from "../Components/Layout"

class UserInfo extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Layout navigation={this.props.navigation} title="유저 정보">
        <Text>유저정보</Text>
      </Layout>
    )
  }
}

export default UserInfo
