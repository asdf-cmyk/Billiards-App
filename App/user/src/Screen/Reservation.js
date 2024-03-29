import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Layout from "../Components/Layout"

class Reservation extends React.Component {
  render(){
    return (
      <Layout navigation={this.props.navigation} title="예약하기">
        <Text>예약하기</Text>
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

export default Reservation
