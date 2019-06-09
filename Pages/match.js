import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo';

import SwipeCards from 'react-native-swipe-cards';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
                <Text style={styles.textStyle}>
                    {this.props.text} {/*card text (interesser)*/}
                </Text>
            </View>
        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.noMoreCardsText}>Ingen flere interesser</Text>

                <TouchableOpacity style={styles.submitButton} onPress={this.refreshPage}>
                    <Text style={styles.submitButtonText}> Oppdater side </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.routeHome}>
                    <Text style={styles.backText}>Hjem</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {text: 'Tomat', backgroundColor: 'red'},
                {text: 'Aubergine', backgroundColor: 'purple'},
                {text: 'Appelsin', backgroundColor: 'orange'},
            ]
        };
    }

    handleYup (card) {
        console.log(`Yes for ${card.text}`)
    }
    handleNope (card) {
        console.log(`No for ${card.text}`)
    }


    render() {
        return (
            <LinearGradient
                colors={['#024757', '#00c5d0']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={{flex: 1}}>
                /*
                <View style={imgStyle.imgPos}>
                    <Image style={imgStyle.image}
                           source={require('../assets/crowd_logo.png')}/>
                </View>

                 */
                <SwipeCards
                    cards={this.state.cards}
                    renderCard={(cardData) => <Card {...cardData} />}
                    renderNoMoreCards={() => <NoMoreCards />}
                    handleYup={this.handleYup}
                    handleNope={this.handleNope}
                />
            </LinearGradient>
        )
    }
    routeHome= ()=> {
        this.navigation.navigate('home')
    }
    refreshPage= ()=> {
        this.navigation.navigate('match')
    }
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 200,
        borderRadius: 10,
        shadowColor: "#000",
        marginBottom: 150,
        fontSize: 100,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    noMoreCardsText: {
        marginBottom: 150,
        fontSize: 26,
        color: 'white',
        padding: 10,
        alignContent: 'center',
        justifyContent:'center',
    },
    textStyle: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: '#024757',
        padding: 10,
        margin: 10,
        height: 60,
        width: 200,
        alignContent: 'center',
        justifyContent:'center',
        borderRadius: 60/2,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    backText: {
        paddingTop: 20,
        color: '#b0c4de',
        textAlign: 'center'
    },
});
const imgStyle = StyleSheet.create({
    image: {
        height: 160,
        width: 360,
    },
    imgPos: {
        alignItems: 'center',
        paddingBottom: 20,
    },
});
