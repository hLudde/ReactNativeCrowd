import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    parentView: {

    },
    submitButton: {
        backgroundColor: '#024757',
        marginTop: 20,
        height: 60,
        marginLeft: 65,
        borderRadius:60,
        width: 200,
        alignContent: 'center',
        justifyContent:'center',
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        justifyContent:'center',
        fontSize: 16
    },
    backText: {
        marginTop: 15,
        color: '#b0c4de',
        textAlign: 'center'
    },
    circle: {
        height: 260,
        width: 260,
        borderRadius: 260/2,
        backgroundColor: '#dcdcdc',
        alignItems: 'center',
        marginLeft: 32.5,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 10.00,
        elevation: 10
    },
});
const textStyle = StyleSheet.create({
    overText: {
        color: '#024757',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
    },
    underText: {
        color: '#024757',
        fontSize: 18,
        textAlign: 'center',
        marginTop: -5
    }
});
const imgStyle = StyleSheet.create({
    image: {
        height: 67,
        width: 200,
    },
    imgPos: {
        alignItems: 'center',
        marginTop: -5,

    },
});

export default class gruppeDannet extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        interestName: ''
    }

    render() {
        return (
            <View style={[styles.parentView]}>
                <View>
                    <Text style={textStyle.overText}>Et nytt</Text>
                   /<View style={imgStyle.imgPos}>
                        <Image style={imgStyle.image}
                               source={require('../assets/crowd_logo.png')}/>
                    </View>


                    <Text style={textStyle.underText}>Er dannet!</Text>
                </View>
                <View style={[styles.circle]}>
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={this.routeGroup}>
                    <Text style={styles.submitButtonText}>Mine interesser</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.routeHome}>
                    <Text style={styles.backText}>Tilbake</Text>
                </TouchableOpacity>

            </View>
        );
    }
    routeGroup= () => {
        this.props.navigation.navigate('groups');
    };
    routeHome = () => {
        this.props.navigation.navigate('home');
    };
}
