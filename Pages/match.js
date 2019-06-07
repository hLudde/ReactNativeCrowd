
import React, {Component } from 'react';
import {Animated, Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import {LinearGradient} from 'expo';
import {Appbar} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import SlidingUpPanel from 'rn-sliding-up-panel'

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
          <Text>{this.props.text}</Text>
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
          <Text style={styles.noMoreCardsText}>No more cards</Text>
        </View>
      )
    }
  }

export default class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: [
            {text: 'Tomato', backgroundColor: 'red'},
            {text: 'Aubergine', backgroundColor: 'purple'},
            {text: 'Courgette', backgroundColor: 'green'},
            {text: 'Blueberry', backgroundColor: 'blue'},
            {text: 'Umm...', backgroundColor: 'cyan'},
            {text: 'orange', backgroundColor: 'orange'},
          ]
        };
      }
    
      handleYup (card) {
        console.log(`Yup for ${card.text}`)
      }
      handleNope (card) {
        console.log(`Nope for ${card.text}`)
      }
      handleMaybe (card) {
        console.log(`Maybe for ${card.text}`)
      }
      render() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
          <SwipeCards
            cards={this.state.cards}
            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
    
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            handleMaybe={this.handleMaybe}
            hasMaybeAction
          />
        )
    }
    
}
const styles = StyleSheet.create({
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 300,
    },
    noMoreCardsText: {
      fontSize: 22,
    }
  })
const swipperStyle= StyleSheet.create({
    wrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    slide1: {
        marginTop: 60,
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 290,
        height: 200,
        backgroundColor: '#97CAE5',
    },
    slide2: {
        marginTop: 60,
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 290,
        height: 200,
        backgroundColor: '#97CAE5',
    },
    slide3: {
        marginTop: 60,
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 290,
        height: 200,
        backgroundColor: '#92BB',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

const {height} = Dimensions.get('window');
const slidingStyle = {
    container: {
        flex: 1,
    },
    panel: {
        marginTop: 90,
        height: 300, // høyde bak panel
        backgroundColor: 'white',

    },
    panelHeader: {
        height: 30, // høyde foran panel
        backgroundColor: '#b197fc',
        alignItems: 'center',
        justifyContent: 'center'
    },
};
