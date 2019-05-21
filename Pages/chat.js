import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import io from 'socket.io-client';
//import console = require("console");

const socketID = 'http://10.32.9.27:8080';
const userID = 2;

export default class Chat extends Component {
    constructor(props){
      super(props);
      this.socket = io(socketID);
      this.socket.on('message',(msg)=>{
        //console.log(msg);
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, msg)
        }));
      })
    }
    
  state = {
    messages: []
  };

  componentWillMount() {
    
  }

  onRecieve(messages = []){
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    
  }

  onSend(messages = []) {
    this.socket.emit('message', messages); // Id på rom?
    
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: userID // Change to username when we have that
        }}
      />

    );
  }
}
