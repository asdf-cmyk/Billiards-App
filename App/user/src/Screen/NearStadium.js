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

class NearStadium extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Layout navigation={this.props.navigation} title="근처 당구장">
        <Text>근처 당구장</Text>
      </Layout>
    )
  }
}

export default NearStadium
