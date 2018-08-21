/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';

 class Header extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require('../images/bg.jpeg')}
        >
        <View style={styles.headercontainer}>
          <View style={styles.profilepic}>
            <Image
              style={styles.mypic}
              source={require('../images/profile.jpg')}
            />
          </View>
          <Text style={styles.name}>Bijendra karmakar</Text>
          <Text style={styles.line}>A part time photographer</Text>
        </View>


      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  headercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  profilepic: {
    width: 120,
    height: 120,
  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    marginTop: 14,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  line: {
    marginTop: 2,
    fontSize: 14,
    color: '#fff',
    fontStyle: 'italic',
  },
});

export default Header;
