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
import axios from 'axios'

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    score: 1250,
    locationType: '지역',
    matchType: true
  }

  getRanking = () => {
    //서버에 랭킹 정보 요청
  }
  setMatchState = () => {
    //서버에 매치 상태 변경 요청
  }

  render() {
    return (
      <Layout navigation={this.props.navigation} title="홈">
            <Text>도전 당구왕</Text>
            <Text>현재 {this.state.score}점</Text>
            <List>
              <ListItem>
                <Text>랭킹</Text>
                <Button onPress={()=> {
                  this.state.locationType === "지역" ? this.setState({locationType : "전국"}) : this.setState({locationType : "지역"})

                }}>
                  <Text>변경</Text>
                </Button>
              </ListItem>
              <ListItem>
                <Text>1위 A 1300점</Text>
              </ListItem>
              <ListItem>
                <Text>2위 A 1200점</Text>
              </ListItem>
              <ListItem>
                <Text>3위 A 1100점</Text>
              </ListItem>
              <ListItem>
                <Text>4위 A 1000점</Text>
              </ListItem>
            </List>
            <Button>
              {this.state.matchType === true ? <Text>매칭 ON</Text> : <Text>매칭 OFF</Text>}
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate("RecommendUser")}
            >
              <Text>추천상대확인</Text>
            </Button>
      </Layout>
    )
  }
}

export default Home
