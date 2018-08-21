/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

 class Mid extends Component {
  render() {
    return (
      <View style={styles.mid}>
        <View style={[styles.outerview, styles.leftbar]}>
          <Text style={styles.textone}>50 +</Text>
          <Text style={styles.texttwo}>Images</Text>
        </View>
        <View style={styles.outerview}>
          <Text style={styles.textone}>100k +</Text>
          <Text style={styles.texttwo}>Subscribers</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mid: {
    flexDirection: 'row',
    borderTopWidth: 6,
    borderTopColor: '#fff',
    backgroundColor: '#2980b9',
  },
  outerview: {
    flex: 1,
    alignItems: 'center',
    padding: 13,
  },
  textone: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  texttwo: {
    fontSize: 14,
    color: '#fff',
    marginTop: 3,
  },
  leftbar: {
    borderRightWidth: 5,
    borderRightColor: '#fff',
  },
});

export default Mid;
