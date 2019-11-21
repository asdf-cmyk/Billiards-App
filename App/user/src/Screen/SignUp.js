import React from 'react'
import { Container, Header, Content,Button,Text, Form, Item, Input } from 'native-base'

class SignUp extends React.Component {
  render(){
    return (
      <Container>
        <Header />
        <Content>
          <Form>
          <Item>
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <Input placeholder="기존 점수" />
            </Item>
            <Item>
              <Input placeholder="휴대폰 번호" />
            </Item>
            <Button>
              <Text>
                 번호인증
              </Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Login")}>
              <Text>
                제출
              </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }  
}

export default SignUp
