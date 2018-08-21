import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/Components/Header';
import Mid from './app/Components/Mid';
import Body from './app/Components/Body';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Mid />
        <Body />
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
