import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, AsyncStorage } from 'react-native';
import {createStackNavigator} from 'react-navigation';

let username;
let name;
let dateofbirth;
let password;

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
    color: 'black'
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
  /*black:{
    backgroundColor: '#F8F7F5'
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
  }*/
});

export class Username extends Component {
  constructor(props){
    super(props);
    this.state = { placeholder: this.props.placeholder };
  }
  render() {
    return (
        <View>
          <TextInput style={styles.TextInputForm} onChangeText={(text) => {this.setState({text}); username=text}} value={this.state.placeholder} placeholder="username"/>
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
          <TextInput style={styles.TextInputForm} onChangeText={(text) => {this.setState({text}); password=text}} value={this.state.placeholder} placeholder="password" secureTextEntry={true}/>
        </View>
    );
  }
}
export default class SignUp extends Component {
  render() {
    let pic = {
      uri: "https://lh3.googleusercontent.com/7IL0Ra3uJgLV5sVbHaxCxmbByVDC8qpbzgbh9ouV5HtOafO4npW_edf6w6Kb4tv5xzEJkWExJQgls2Xd8XVtZM_7O9TTUzd0vOJAk1WgMvCTPiYcekpA5LsqL5FB8EcFoPyg0bU3Ode_cMfFcf_GwYq6Zu8OlLAYbPQ3EzwCuhhfsR0MFzNUrbBekisMBMjN6Jh9i4zKdvd9Ik8qP3aq0T_Y6QZrWpg3QtQfNi2NJ4tNtz9_V8ye36g7bTbVO74exb82FWYifb27dxi2j8_ywYC6clsLltTI3i_WkxjvYMsXrXW5xJlmy9XTL-CYjxIA92hdDVcezs9uDKSXz2yuxQ9Vhi5BwVK_-LArCfdl5I-9uyuuawxlXF7ZQ5PcWZ_MjDbUCQ4VMXRw_2GyuqTEf_MkbM2SI2NMtfesxAfrK2skX2Aip1JGow2noU08cvKs6j6zK9gY_ergF7pqRjt81Yi9Jc6htnVTXg5TWJ1ZXBqQ0tGyUFfkA0aT8ziY-5RJv3tiHrOwV9U9LjhGIRcdXU9evkJHX0tH7ReUGOZAaBI5aeC7GLE0B9Ub0lgYVOG3pcH2NAMzIFN8JyRyS2w2eSwcRkocaxna=w2000-h2500"
    };
    return (
      <View style={[styles.black,{flex:1},{alignItems:'center'}]}>
        <View style={{flex:1}}>
          <Image source={pic} style={[{width:200, height: 60}, {resizeMode:'center'}, {top:50}]}></Image>
        </View>
        <View style={{flex:1}}>
          <Username/>
          <Password/>
        </View>
        <View style={{flex:1}}>
          <Button title="Sign in" onPress={this.signIn}/>
          <Button title="Return" onPress={this.return}/>
        </View>
      </View>
    );
  }
  signIn = async () => {
    if(password==null||username==null){
      alert("Could not sign in with the username and password, please try again")
      return;
    }
    let prepareUrl = "https://jsonplaceholder.typicode.com/users?id="+password+"&username="+username;
    console.log(prepareUrl)
    await fetch(prepareUrl)
      .then(Response => Response.json())
      .then(json => {
        if(json[0]){
          this.props.navigation.navigate('User',{username: json[0].name})
        }else{
          alert("Could not sign in with the username and password, please try again")
        }
      })
    //this.props.navigation.navigate('User', {username: username});
    /*const {navigate} = object.props.navigation;
    navigate('Profile', {username: "Hans Ludvig"})
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => alert(json.title))*/
  }
  return = () => {
    this.props.navigation.goBack();
  }
}
function signUp(){
  alert("Welcome 😄😄😄");
}