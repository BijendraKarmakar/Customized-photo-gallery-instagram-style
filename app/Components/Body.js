/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

 class Body extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.bigview}>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic1.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic2.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic3.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic4.jpg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic5.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic6.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic7.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic8.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic9.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic10.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic11.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.mypic}
              source={require('../images/pic12.jpeg')}
            />
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallview: {
    margin: 2,
    height: 100,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  }
});

export default Body;
