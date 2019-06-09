import React, {Component} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import {LinearGradient} from 'expo';


const styles = StyleSheet.create({
    parentView: {
        paddingTop: 150,
    },
    loggInnStyle:{
        color: '#024757',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 30,
    },
    textInputStyle: {
        padding: 9,  // placholder position
        borderColor: '#00A2AD',
        margin: 6,
        height: 60,
        marginLeft: 65,
        marginRight: 65,
        backgroundColor: 'white', // colour inside the text input field
        borderRadius: 5,
    },
    submitButton: {
        backgroundColor: '#024757',
        padding: 15,
        margin: 20,
        height: 50,
        width: 120,
        alignContent: 'center',
        justifyContent:'center',
        marginLeft: 100,
        borderRadius: 50/2,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',

    },
    backText: {
        color: '#FFFFFF',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent:'center',
        margin: 70,
        marginTop: 3,
    },
    routeSignUp: {
        margin: 5,
        paddingTop: 5,
        color: '#000000',
        paddingLeft: '38%'
    },
});

export default class login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        };
    }


    handleUsername = text => {
        this.setState({username: text})
    };
    handlePassword = text => {
        this.setState({password: text})
    };


    render() {
        let pic = {
            uri:  "https://lh3.googleusercontent.com/MJsMAGiaV7Q_wkIz7T3hvETZVWJ3OE8Kg-dPyTOCAZ6nRiwaw81G7SYBBODIlHxKbjkp8FysJVPowy-drbU6nQcQCETJ1sJfh9mQhYnwmGV0h0HENbrDFX2HwOxtcATBsK4dRY7A_Bv18MPi5a0l0e3WUCO4BRoXu173OLMQSbItz8HSeAEgJIXIOlXJ1pjq8bR0j4ltQcojfLI4WlImpw12FXgqbumRK4bYalcI8rISXqoNWhXhuQVWF4ENRemXRcl2RAqipGrXDZIDpj6qOV3bGj6ZbmK0J8ZiU6DIuTc7GFvUHs4kN_smjSM1m9mBe2_gOliyY5M64abr5gJ2GyF8fXXgtCn-biTgHUZHAJlvklM224PcVXOluLT68tIwr_t3KlrgQcGRicu_B8fjQjU0gS24Vp4HeSQcC7udNJzCQ_ghH4vJCdgT2AIIHJSxUWHLNQPfDMVKrkG4FufbWlhpq7N6-8B63C9UXYpiiQ3p_OK3ULopuzrDQz7I7mBkxJhxx6fRvN8J-NPRYUzWceGI8BrVI4ma0WOxinS-HaM6xp63NNRIf2RA6PTr4J3HaWe4GMo8XOfu7XVXrYuG9HPfOZ8I1t3XAqjk_75VTjy4-QUn4gPmpkHX0pt8qBT60XduXnKgsCZTG8uYOgEnccUT2aZdCg=w1920-h822-no"};
        return (
            <LinearGradient
                colors={['#F8F7F5','#00A2AD']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={{flex: 1}}>

                <View style={[styles.parentView]}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={pic}
                            style={[
                                { width: 310, height: 135 },
                                { resizeMode: 'center' },
                                { top: -120 },
                                { left: '11%' },
                            ]}
                        />
                    </View>
                    <View>

                        <Text style={[styles.loggInnStyle]}>Login</Text>
                        <TextInput style={[styles.textInputStyle]}
                                   placeholder="Brukernavn"
                                   value={this.state.placeholder}
                                   onChangeText={this.handleUsername}/>
                    </View>

                    <View>

                        <TextInput secureTextEntry={true} style={[styles.textInputStyle]}
                                   placeholder="Passord"
                                   value={this.state.placeholder}
                                   onChangeText={this.handlePassword}/>
                    </View>

                    <TouchableOpacity style={styles.submitButton}
                                      onPress={this.signIn}>
                        <Text style={styles.submitButtonText}> Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.routeHome}>
                        <Text style={styles.backText}> Hjem</Text>
                    </TouchableOpacity>

                </View>

            </LinearGradient>
        )
    }

    // Sign in method
    signIn = () => {
        return fetch('http://192.168.1.10:8080/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                "password":this.state.password,
                "username":this.state.username
            })
        })
        .then((response)=>{
            console.log(response);
            return response.json()
        })
        .then((responseJson)=>{
            if(responseJson.success==true){
                this.state.token = responseJson.token;
                fetch('http://192.168.1.10:8080/user/randominterest',{
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({
                        "token": this.state.token,
                        "username":this.state.username
                    })
                }).then((response)=>{
                    return response.json();
                }).then((responseJSON)=>{
                    this.state.interest = responseJSON;
                    this.props.navigation.navigate('Match', {data:this.state});
                }).catch((err)=>{
                    console.log(err);
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    // routes
    routeHome = () => {
        this.props.navigation.navigate('home');
    };
    routeSignUp = () => {
        this.props.navigation.navigate('signup');
    };

}
