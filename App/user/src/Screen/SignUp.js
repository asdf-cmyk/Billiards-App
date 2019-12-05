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
  Toast
} from "native-base"
import axios from 'axios'
import {server} from '../../lib'

class SignUp extends React.Component {
  state = {
    userId : "",
    password : "",
    score : "",
    nickname : "",
    phoneNumber : "",
    certificationNumber : "",
    addInputCertificationNumber : false,
    checkCertification : false,
    checkUserID : false,
    checknickname : false
  }

  checkUserID = async () => {
    const data = await axios.post(server + '/checkUserID', {
      userId : this.state.userId
    })
    console.log(data)
  }

  checkUserNickname = async () => {
    const data = await axios.post(server + '/checkUserNickname', {
      nickname : this.state.nickname
    })
  }

  checkPhone = async () => {
    this.setState({
      addInputCertificationNumber : true
    })
    const data = await axios.post(server + '/checkPhone', {
      phone: this.state.phone
    })
    console.log(data)
  }

  certificationPhone = async () => {
    const data = await axios.post(server + '/certificationPhone', {
      certificationNumber: this.state.certificationNumber
    })
  }

  submit = async () => {
    console.log(this.state)
    if(this.state.checkUserID && this.state.checknickname && this.state.checkCertification){
      const data = await axios.post(server + '/makeUser', {
        userId : this.state.userId,
        password : this.state.password,
        phoneNumber : this.state.phoneNumber,
        nickname : this.state.nickname,
        score : this.state.score
      })
    }
    else {
      console.log('중복확인하세요')
      if(!this.state.checkUserID){
        return Toast.show({
          text: 'Wrong password!',
          buttonText: 'Okay',
          type: "warning"
        })
      }
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="아이디" name="userId" value={this.state.userId} onChangeText={text => this.setState({userId: text})}/>
              <Button onPress={() => this.checkUserID()}>
                <Text>중복확인</Text>
              </Button>
            </Item>
            <Item>
              <Input secureTextEntry={true} placeholder="패스워드" name="password" value={this.state.password} onChangeText={text => this.setState({password: text})}/>
            </Item>
            <Item>
              <Input placeholder="당구 점수" name="score" value={this.state.score} onChangeText={text => this.setState({score: text})}/>
            </Item>
            <Item>
              <Input placeholder="닉네임" name="nickname" value={this.state.nickname} onChangeText={text => this.setState({nickname: text})}/>
              <Button onPress={() => this.checkUserNickname()}>
                <Text>중복확인</Text>
              </Button>
            </Item>
            <Item>
              <Input placeholder="휴대폰 번호" name="phoneNumber" value={this.state.phoneNumber} onChangeText={text => this.setState({phoneNumber: text})}/>
              <Button onPress={() => this.checkPhone()}>
                <Text>인증요청</Text>
              </Button>
            </Item>
            {this.state.addInputCertificationNumber ? <Item>
              <Input placeholder="인증번호" name="certificationNumber" value={this.state.certificationNumber} onChangeText={text => this.setState({certificationNumber: text})}></Input>
              <Button onPress={() => this.certificationPhone()}>
                <Text>번호인증</Text>
              </Button>
            </Item> : undefined}
            
            <Item>
              <Button onPress={() => this.submit()}>
                <Text>제출</Text>
              </Button>
            </Item>
            <Item>
              <Button onPress={() => this.props.navigation.navigate("Login")}>
                <Text>홈으로</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default SignUp
