import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 15,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#bbb'
  },
  noteContent: {
    textAlign: 'center',
  },
  creationTime: {
    fontSize: 10,
    marginTop: 10,
  }
});
