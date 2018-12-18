import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, Button, ImageBackground } from 'react-native';
import {createStackNavigator} from 'react-navigation';

let username;
let password;

const styles = StyleSheet.create({
  main:{
    opacity: 0.9,
    backgroundColor: "#024757",
    flex: 1
  },
  logoDiv:{
    flex: 1,
    alignItems:'center'
  },
  logoImage:{
    flex: 1,
    resizeMode:'contain',
    width:"100%"
  },
  black:{
    backgroundColor: '#36382E'
  },
  red:{
    backgroundColor: '#F06449'
  },
  white:{
    backgroundColor: '#EDE6E3'
  },
  font:{
    fontSize:100,
    color: 'orange'
  },
  TextInputForm:{
    backgroundColor: "#EDE6E3",
    width: 300,
    height: 40,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1
  },
  PasswordInputForm:{
    backgroundColor: "#EDE6E3",
    width: 300,
    height: 40,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1
  }
})

class Username extends Component {
  constructor(props){
    super(props);
    this.state = { placeholder: this.props.placeholder };
  }
  render() {
    return (
        <View>
          <TextInput style={styles.TextInputForm} onChangeText={(text) => {this.setState({text}); username=text}}
        value={this.state.placeholder} placeholder="username"/>
        </View>
    );
  }
}
class Password extends Component {
  constructor(props){
    super(props);
    this.state = { placeholder: this.props.placeholder };
  }
  render() {
    return (
        <View>
          <TextInput style={styles.TextInputForm} onChangeText={(text) => {this.setState({text}); password=text}}
        value={this.state.placeholder} placeholder="password" secureTextEntry={true}/>
        </View>
    );
  }
}
export default class Crowd extends Component {
  render() {
    return (
      <ImageBackground source={require("../assets/appbilde7.png")} style={styles.main}>
          <View style={styles.logoDiv}>
            <Image source={require("../assets/crowd_logo.png")} style={styles.logoImage}></Image>
          </View>
          <View style={{flex:1}}>
            <Button title="Logg Inn" onPress={this.signIn}/>
            <Button title="Ny Bruker" onPress={this.signUp}/>
          </View>
      </ImageBackground>
    );
  }
  signIn = () => {
    this.props.navigation.navigate('login');
  }
  signUp = () => {
    this.props.navigation.navigate('signUp');
  }
}