import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class NoteAdd extends Component {
  state = {
    value: '',
  }

  textChanged = value => {
    this.setState({ value });
  }

  submitNote = () => {
    this.props.submit(this.state.value);
    this.setState(state => ({value: ''}));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Weź se cosik nakryklaj"
          returnKeyType="done"
          value={this.state.value}
          onChangeText={this.textChanged}
          style={styles.input}
          onSubmitEditing={this.submitNote}
        />
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
  },
  input: {
    height: 50,
  }
});
