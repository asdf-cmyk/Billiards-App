import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Layout from "../Components/Layout"

class StadiumInfo extends React.Component {
  render(){
    return (
      <Layout navigation={this.props.navigation} title="당구장 정보">
        <Text>당구장 프로필사진</Text>
        <Text>당구장 정보</Text>
        <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>★★★★★</Text>
                <Text>유저A</Text>
                <Text note numberOfLines={1}>최고의 당구장입니다</Text>
              </Body>
            </ListItem>
          </List>
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

export default StadiumInfo
