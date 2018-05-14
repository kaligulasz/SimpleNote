import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

export default class NoteEditModal extends Component {

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Nowy popup</Text>

              <TouchableHighlight
                onPress={() => {
                  this.props.toggleModal(false)
                }}>
                <Text>Wróć</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}