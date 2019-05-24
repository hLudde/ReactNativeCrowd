import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import io from 'socket.io-client';
//import console = require("console");

const socketID = 'http://10.32.14.56:8080';
const userID = 2;

export default class Chat extends Component {
    constructor(props){
      super(props);
      this.socket = io(socketID);
      this.socket.on('message',(msg)=>{
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, msg)
        }));
      })
    }
    
  state = {
    messages: []
  };

  onRecieve(messages = []){
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    
  }
  onSend(messages = []) {
    this.socket.emit('message', messages); // Id på rom?
    if(!this.socket.connected){
      this.setState({
        messages: [
          {
            _id: 1,
            text: 'Could not connect to server',
            createdAt: new Date(),
            user: {
              _id: userID,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ],
      })
    }
    
  }
  home = () => {
    this.props.navigation.navigate('home');
  }
  render() {
    return (
      <View style={{height: "100%"}}>
        <TouchableOpacity style={styles.button} onPress={this.home}><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: userID // Change to username when we have that
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText:{
    fontSize: 20,
    color: 'black'
  },
  button:{
    margin: 2,
    paddingTop: "2%",
    paddingBottom: 7,
    alignItems:'center',
    backgroundColor: '#00A2AD',
    width: "50%"
  },
})

// Gifted Chat library from Farid Safi:
// https://github.com/FaridSafi/react-native-gifted-chat