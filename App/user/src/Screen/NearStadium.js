import React from "react"
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import MyFooter from '../Components/MyFooter'
import Layout from "../Components/Layout"

class NearStadium extends React.Component {
  state = {
    score: 1250
  }
  render() {
    return (
      <Layout navigation={this.props.navigation} title="근처 당구장">
        <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>인하 당구장</Text>
                <Text note numberOfLines={1}>인천 남구 용현동</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => this.props.navigation.navigate("StadiumInfo")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>정석 당구장</Text>
                <Text note numberOfLines={1}>인천 남구 용현동</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => this.props.navigation.navigate("StadiumInfo")}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
      </Layout>
    )
  }
}

export default NearStadium
