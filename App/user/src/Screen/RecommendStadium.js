import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Layout from "../Components/Layout"

class RecommendStadium extends React.Component {
  render(){
    return (
      <Layout navigation={this.props.navigation} title="추천 당구장">
        <Text>추천 당구장</Text>
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

export default RecommendStadium
