import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Layout from "../Components/Layout"

class StadiumInfo extends React.Component {
  render(){
    return (
      <Layout navigation={this.props.navigation} title="당구장 정보">
        <Text>당구장 정보</Text>
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
