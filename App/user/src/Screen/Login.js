import React from "react"
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input
} from "native-base"
import { StyleSheet } from "react-native"
import Layout from "../Components/Layout"
import axios from 'axios'
import {server} from '../../lib'

class Login extends React.Component {
  state = {
    userID: "",
    password: ""
  }

  submit = () => {
    axios.post(server + '/Login', this.state)
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="아이디"
                name="userID"
                value={this.state.userID}
                onChangeText={text => this.setState({ userID: text })}
              />
            </Item>
            <Item last>
              <Input
                secureTextEntry={true}
                placeholder="패스워드"
                name="password"
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>
          </Form>
          <Item>
            <Button
              onPress={() => {
                this.props.navigation.navigate("Home")
              }}
            >
              <Text>로그인</Text>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate("SignUp")
              }}
            >
              <Text>회원가입</Text>
            </Button>
          </Item>
          <Button
              onPress={() => {
                this.props.navigation.navigate("Home")
              }}
            >
              <Text>홈으로</Text>
            </Button>
        </Content>
      </Container>
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

export default Login
