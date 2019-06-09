import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo';

const styles = StyleSheet.create({
    parentView: {
        marginTop: 25,
    },
    submitButton: {
        backgroundColor: '#024757',
        padding: 10,
        margin: 10,
        height: 60,
        width: 200,
        marginLeft: 65,
        alignContent: 'center',
        justifyContent:'center',
        borderRadius: 60/2,
        marginTop: 60,
    },
    backText: {
        paddingTop: 20,
        color: '#b0c4de',
        textAlign: 'center'
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
});
const textStyle = StyleSheet.create({
    overText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'space-between',
        padding: 20,

    },
});
const imgStyle = StyleSheet.create({
    image: {
        height: 180,
        width: 180,
        borderRadius: 180/2
    },
    imgPos: {
        alignItems: 'center',
        marginTop: 25,
    },
});

export default class profilePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinearGradient
                colors={['#024757', '#00c5d0']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={{flex: 1}}>
                <View style={[styles.parentView]}>

                    <Text style={textStyle.overText}> Brukernavn/navn </Text>

                    <View style={imgStyle.imgPos}>
                        <Image style={imgStyle.image}
                               source={require('../assets/avatar2.jpg')}/>
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={this.routeUpdateProfile}>
                        <Text style={styles.submitButtonText}> Oppdater profil </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.routeHome}>
                        <Text style={styles.backText}>Hjem</Text>

                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
    routeUpdateProfile= () => {
        this.props.navigation.navigate('home');
    };
    routeHome = () => {
        this.props.navigation.navigate('updateProfile');
    };
}
