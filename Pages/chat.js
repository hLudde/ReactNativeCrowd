/*
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import SocketIOClient from 'socket.io-client';
//import { environment } from '../config/environment';

export default class Chat extends React.Component {
    
	constructor(props) {
        super(props);
        this.state = { msg: 'Not pressed' }
		this.socket = SocketIOClient("http://localhost:80000"); // replace 'environment.serverUrl' with your server url
		this.socket.emit('channel1', 'Hi server'); // emits 'hi server' to your server
		
		// Listens to channel2 and display the data recieved
    this.socket.on('channel2', (data) => {
        console.log('Data recieved from server', data); //this will console 'channel 2'
        Alert.alert('Data recieved from server', data);
      });
    }
	
	clicked = () => {
        
        this.setState({ msg: 'Pressed' })
        //Alert.alert('You tapped the button!');
		const dataObj = {
			action: 'click'
		};
		
		this.socket.emit('channel2', dataObj);
	}

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.clicked}>
                    <Text> Touch Here </Text>
                </TouchableOpacity>
                <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.msg }
          </Text>
        </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF'
    }
  })
  */

 import React from "react";
 import { GiftedChat } from "react-native-gifted-chat";
 import io from 'socket.io-client';
//import console = require("console");
 


 export default class Chat extends React.Component {
    constructor(props){
      super(props);
      this.socket = io('http://10.32.9.69:8080');
      this.socket.on('message',(msg)=>{
        console.log(msg);
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, msg)
        }));
      })
    }
   state = {
     messages: []
   };
 
   

   componentWillMount() {
     this.setState({
       messages: [
         {
           _id: 1,
           text: "Hello developer",
           createdAt: new Date(),
           user: {
             _id: 2,
             name: "React Native",
             avatar: "https://placeimg.com/140/140/any"
           }
         }
       ]
     });
   }
 
   onRecieve(messages = []){
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

   onSend(messages = []) {
     this.socket.emit('message', messages);
     this.setState(previousState => ({
       messages: GiftedChat.append(previousState.messages, messages)
     }));
   }


 
   render() {
    
     return (
       <GiftedChat
         messages={this.state.messages}
         onSend={messages => this.onSend(messages)}
         user={{
           _id: 1 // Change to username when we have that
         }}
       />

     );
   }
 }

 // 10.32.9.1:8080