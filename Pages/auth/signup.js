import React, {Component} from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import {LinearGradient} from 'expo';

const styles = StyleSheet.create({
    parentView: {
        marginTop: 25,
    },
    textInputStyle: {
        padding: 10, // placholder position
        borderColor: '#00A2AD',
        marginLeft: 55,
        marginRight: 55,
        margin: 6,
        height: 50, // lite plass, før 50
        backgroundColor: 'white', // colour inside the text input field
        borderRadius: 5,
    },
    overText: {
        color: '#024757',
        paddingLeft: 50,
    },
    signUpText: {
        color: '#024757',
        textAlign: 'center',
        fontSize: 30,
        paddingBottom: 10,
        //fontFamily: "./assets/fonts/Roboto-Bold.ttf"// "Roboto-Light"
    },
    star: {
        color: '#FF6347',
    },
    submitButton: {
        backgroundColor: '#024757',
        //opacity: 0.9,
        padding: 15,
        margin: 20,
        height: 50,
        width: 120,
        alignContent: 'center',
        justifyContent:'center',
        marginLeft: 100,
        borderRadius: 50/2,
        marginBottom: 10,
    },
    backText: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 45,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            confirm: '',
        }
    }

    handleUsername = text => {
        this.setState({ username: text });
    };
    handleName = text => {
        this.setState({ name: text });
    };
    handleEmail = text => {
        this.setState({ email: text });
    };
    handlePassword = text => {
        this.setState({ password: text });
    };
    handleConfirm = text => {
        this.setState({ confirm: text });
    };

    render() {
        let pic = {
            uri:  "https://lh3.googleusercontent.com/MJsMAGiaV7Q_wkIz7T3hvETZVWJ3OE8Kg-dPyTOCAZ6nRiwaw81G7SYBBODIlHxKbjkp8FysJVPowy-drbU6nQcQCETJ1sJfh9mQhYnwmGV0h0HENbrDFX2HwOxtcATBsK4dRY7A_Bv18MPi5a0l0e3WUCO4BRoXu173OLMQSbItz8HSeAEgJIXIOlXJ1pjq8bR0j4ltQcojfLI4WlImpw12FXgqbumRK4bYalcI8rISXqoNWhXhuQVWF4ENRemXRcl2RAqipGrXDZIDpj6qOV3bGj6ZbmK0J8ZiU6DIuTc7GFvUHs4kN_smjSM1m9mBe2_gOliyY5M64abr5gJ2GyF8fXXgtCn-biTgHUZHAJlvklM224PcVXOluLT68tIwr_t3KlrgQcGRicu_B8fjQjU0gS24Vp4HeSQcC7udNJzCQ_ghH4vJCdgT2AIIHJSxUWHLNQPfDMVKrkG4FufbWlhpq7N6-8B63C9UXYpiiQ3p_OK3ULopuzrDQz7I7mBkxJhxx6fRvN8J-NPRYUzWceGI8BrVI4ma0WOxinS-HaM6xp63NNRIf2RA6PTr4J3HaWe4GMo8XOfu7XVXrYuG9HPfOZ8I1t3XAqjk_75VTjy4-QUn4gPmpkHX0pt8qBT60XduXnKgsCZTG8uYOgEnccUT2aZdCg=w1920-h822-no"};
        return (
            <LinearGradient
                //colors={['#00A2AD', '#024757']}
                //colors={['#F6A800','#00A2AD']}
                colors={['#F8F7F5','#00A2AD']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}>
                <ScrollView style={[styles.parentView]}>

                    <View>
                        <Text style={[styles.signUpText]}>Registrering</Text>
                        <Text style={[styles.overText]}>
                            {' '}
                            Brukernavn <Text style={[styles.star]}> * </Text>{' '}
                        </Text>

                        <TextInput
                            style={[styles.textInputStyle]}
                            value={this.state.placeholder}
                            placeholder="Brukernavn"
                            onChangeText={this.handleUsername}
                        />
                    </View>

                    <View>
                        <Text style={[styles.overText]}> Navn </Text>
                        <TextInput
                            style={[styles.textInputStyle]}
                            value={this.state.placeholder}
                            placeholder="Navn"
                            onChangeText={this.handleName}
                        />
                    </View>

                    <View>
                        <Text style={[styles.overText]}>
                            {' '}
                            Epost <Text style={[styles.star]}> * </Text>
                        </Text>
                        <TextInput
                            style={[styles.textInputStyle]}
                            value={this.state.placeholder}
                            placeholder="Epost"
                            onChangeText={this.handleEmail}
                        />
                    </View>

                    <View>
                        <Text style={[styles.overText]}>
                            {' '}
                            Passord <Text style={[styles.star]}> * </Text>
                        </Text>
                        <TextInput
                            secureTextEntry={true}
                            style={[styles.textInputStyle]}
                            value={this.state.placeholder}
                            placeholder="Passord"
                            onChangeText={this.handlePassword}
                        />
                    </View>

                    <View>
                        <Text style={[styles.overText]}>
                            {' '}
                            Gjenta passord <Text style={[styles.star]}> * </Text>
                        </Text>
                        <TextInput
                            secureTextEntry={true}
                            style={[styles.textInputStyle]}
                            value={this.state.placeholder}
                            placeholder="Gjenta passord"
                            onChangeText={this.handleConfirm}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={this.signUp}>
                        <Text style={styles.submitButtonText}> Register </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.routeHome}>
                        <Text style={styles.backText}> Hjem </Text>
                    </TouchableOpacity>
                </ScrollView>
            </LinearGradient>
        );
    }
    signUp = () => {
        console.log("Hello world!");
        return fetch('http://192.168.1.10:8080/register',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password,
                "name": this.state.name,
                "username":this.state.username
            })
        })
        .then((response)=>{
            return response.json()
        })
        .then((responseJson)=>{
            if(responseJson.success==true){
                this.props.username = this.state.username;
                this.props.navigation.navigate('login', { data: this.state});
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    routeHome = () => {
        this.props.navigation.navigate('home');
    };

}
