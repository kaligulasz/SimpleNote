import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import { Constants } from 'expo';

// Components
import Note from './components/Note';
import NoteAdd from './components/NoteAdd';
import NoteEditModal from './components/Modal';

const noteStorage = 'noteapp:notes';

export default class App extends Component {
  state = {
    notes: [],
    modalVisible: false,
  };

  componentDidMount() {
    AsyncStorage.getItem(noteStorage)
      .then((value) => {
        if(value !== null) {
          this.setState({ notes: JSON.parse(value) });
        }
      });
  }

  submitNote = (note) => {
    const newItem = {
      noteContent: note,
      creationTime: new Date().toISOString().substring(0, 10),
      done: false,
      id: new Date().getTime()
    }

    this.setState(state => {
      const newState = [newItem, ...state.notes];

      AsyncStorage.setItem(noteStorage, JSON.stringify(newState));

      return {
        notes: newState,
      }
    });
  }

  removeNote = (itemId) => {
    const indexElement = this.state.notes.findIndex((element) => element.id === itemId);

    const newState = this.state.notes;

    newState.splice(indexElement, 1);

    this.setState(() => {
      AsyncStorage.setItem(noteStorage, JSON.stringify(newState));

      return {
        notes: newState,
      }
    })
  }

  toggleModal = (modalVisible) => {
    this.setState({modalVisible: modalVisible})
  }

  render() {
    return (
      <View style={styles.container}>
        <NoteEditModal toggleModal={this.toggleModal} modalVisible={this.state.modalVisible}/>
        <NoteAdd submit={this.submitNote} />
          <FlatList
            data={this.state.notes.filter(item => !item.done)}
            renderItem={({item}) => <Note
              noteContent={item.noteContent}
              itemId={item.id}
              creationTime={item.creationTime}
              removeNote={this.removeNote}
              toggleModal={this.toggleModal}
            />}
            keyExtractor={(item, index) => index}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Constants.statusBarHeight,
  },
});
