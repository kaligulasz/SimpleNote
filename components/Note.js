import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Note extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onLongPress={() => {this.props.toggleModal(true)}}>
        <View style={styles.container}>
          <Text style={styles.noteContent}>{this.props.noteContent}</Text>
          <Text style={styles.creationTime}>{this.props.creationTime}</Text>
          <TouchableOpacity
            onPress={() => {this.props.removeNote(this.props.itemId)}}
            style={styles.touchable}>
            <Text style={styles.touchableText}>Wyciep</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
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
    textAlign: 'left',
  },
  creationTime: {
    fontSize: 10,
    marginTop: 10,
  },
  touchable: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: 50,
  },
  touchableText: {
    fontSize: 10,
    textAlign: 'center',
  }
});
