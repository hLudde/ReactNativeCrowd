import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, AsyncStorage } from 'react-native';

export default class Profile extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let pic = {
        uri: "https://lh3.googleusercontent.com/7IL0Ra3uJgLV5sVbHaxCxmbByVDC8qpbzgbh9ouV5HtOafO4npW_edf6w6Kb4tv5xzEJkWExJQgls2Xd8XVtZM_7O9TTUzd0vOJAk1WgMvCTPiYcekpA5LsqL5FB8EcFoPyg0bU3Ode_cMfFcf_GwYq6Zu8OlLAYbPQ3EzwCuhhfsR0MFzNUrbBekisMBMjN6Jh9i4zKdvd9Ik8qP3aq0T_Y6QZrWpg3QtQfNi2NJ4tNtz9_V8ye36g7bTbVO74exb82FWYifb27dxi2j8_ywYC6clsLltTI3i_WkxjvYMsXrXW5xJlmy9XTL-CYjxIA92hdDVcezs9uDKSXz2yuxQ9Vhi5BwVK_-LArCfdl5I-9uyuuawxlXF7ZQ5PcWZ_MjDbUCQ4VMXRw_2GyuqTEf_MkbM2SI2NMtfesxAfrK2skX2Aip1JGow2noU08cvKs6j6zK9gY_ergF7pqRjt81Yi9Jc6htnVTXg5TWJ1ZXBqQ0tGyUFfkA0aT8ziY-5RJv3tiHrOwV9U9LjhGIRcdXU9evkJHX0tH7ReUGOZAaBI5aeC7GLE0B9Ub0lgYVOG3pcH2NAMzIFN8JyRyS2w2eSwcRkocaxna=w2000-h2500"
        };
        return (
        <View style={[styles.black,{flex:1},{alignItems:'center'}]}>
            <View style={{flex:1}}>
              <Image source={pic} style={[{width:200, height: 60}, {resizeMode:'center'}, {top:50}]}></Image>
            </View>
            <View style={[{flex:1}]}>
              <Text style={{color:'white'}}>Hello {this.props.navigation.state.params.username}!</Text>
            </View>
            <View style={{flex:1}}>
              <Button title="Sign out" onPress={()=>this.props.navigation.goBack()}/>
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
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
function signOut(){
  alert("goodbye ;(")
}