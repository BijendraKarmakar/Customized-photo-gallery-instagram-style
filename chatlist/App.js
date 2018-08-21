import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chatlist from './Components/Chatlist';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Chatlist />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

  },
});
