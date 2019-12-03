import React from "react"
import { StyleSheet, View, Image  } from "react-native"
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base"
import Layout from "../Components/Layout"

class RecommendUser extends React.Component {
  render() {
    return (
      <Layout navigation={this.props.navigation} title="추천 유저">
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: "Image URL" }} />
              <Body>
                <Text>유저 A</Text>
                <Text note>인천 남구 용현동</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text>점수 : 1500점 {'\n\n\n\n'}</Text>
            <Text>이 상대를 이기면 35점이 추가됩니다!</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>수락하기</Text>
              </Button>
            </Left>
            <Right>
              <Text>거절하기</Text>
            </Right>
          </CardItem>
        </Card>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default RecommendUser
