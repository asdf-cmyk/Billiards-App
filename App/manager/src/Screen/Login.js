import React from 'react'
import { Container, Header, Content,Button,Text, Form, Item, Input } from 'native-base';
import { StyleSheet} from 'react-native';
import Layout from "../Components/Layout"

class Login extends React.Component {
  render(){
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button onPress={() => {this.props.navigation.navigate("Home")}}>
            <Text>로그인</Text>
          </Button>
          <Button onPress={() => {this.props.navigation.navigate("SignUp")}}>
            <Text>회원가입</Text>
          </Button>
        </Content>
      </Container>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login
