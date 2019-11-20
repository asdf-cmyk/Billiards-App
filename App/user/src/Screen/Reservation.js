import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class Reservation extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Reservation</Text>
      </View>
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
