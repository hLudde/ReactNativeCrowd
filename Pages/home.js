import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default class Crowd extends Component {
  render() {
    let ws = new WebSocket("ws://10.32.3.9:4141", "TCP")
    ws.onopen = () =>{
      console.log("I am now connected to "+ws.url);
    }
    ws.onmessage = (message) => {
      console.log(message.data);
    }
    return (
      <ImageBackground source={require("../assets/appbilde7.png")} style={styles.main} imageStyle={styles.mainImage}>
        <View style={styles.logoDiv}>
          <Image source={require("../assets/crowd_logo.png")} style={styles.logoImage}></Image>
        </View>
        <View style={styles.whitespace}></View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.signIn}><Text style={styles.buttonText}>Logg Inn</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.doSignUp}><Text style={styles.buttonText}>Ny Bruker</Text></TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
  signIn = () => {
    this.props.navigation.navigate('auth/login');
  };
  doSignUp = () => {
    this.props.navigation.navigate('auth/signup');
  }
}
const styles = StyleSheet.create({
  main:{
    backgroundColor: "#F8F7F5",
    flex: 1,
    alignItems:'center'
  },
  mainImage:{
    opacity: 0.6
  },
  logoDiv:{
    flex: 1,
    alignItems:'center'
  },
  logoImage:{
    flex: 1,
    resizeMode:'contain',
    width: 250
  },
  buttonContainer:{
    flex: 1,
    width: "50%",
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: 'black',
  },
  button:{
    margin: 2,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems:'center',
    backgroundColor: '#00A2AD',
    width: "100%"
  },
  whitespace:{
    flex: 1
  }
})
