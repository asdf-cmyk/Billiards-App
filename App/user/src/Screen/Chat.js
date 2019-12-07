import React from "react"
import { Platform  } from "react-native"
import { GiftedChat } from "react-native-gifted-chat"
import Layout from "../Components/Layout"
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Chat extends React.Component {
  state = {
    messages: []
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
  }
  render() {
    return (
      <Layout navigation={this.props.navigation} title="채팅방">
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
        {Platform.OS === 'android' ? <KeyboardSpacer /> : null }
      </Layout>
    )
  }
}

export default Chat
