import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Layout from "../Components/Layout"

class Chat extends React.Component {
  render(){
    return (
      <Layout navigation={this.props.navigation} title="채팅방">
        <Text>Chat</Text>
      </Layout>
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

export default Chat
