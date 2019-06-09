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

export default class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.navigation.state.params.data,
          cards: [
            {text: this.props.navigation.state.params.data.interest.Name, backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID},
            {text: "", backgroundColor: 'purple', ID: this.props.navigation.state.params.data.interest.ID}
          ]
        }
    }

    handleYup = (card) => {
      var addInterest = "";
      if(card.MainCategoryID!=undefined){
        addInterest = JSON.stringify({
          "token": this.state.data.token,
          "username" : this.state.data.username,
          "subID": card.ID
        })
      }else if(card.SubCategoryID!=undefined){
        addInterest = JSON.stringify({
          "token": this.state.data.token,
          "username" : this.state.data.username,
          "subSubID": card.ID
        })
      }else{
        addInterest = JSON.stringify({
          "token": this.state.data.token,
          "username" : this.state.data.username,
          "mainID": card.ID
        })
      }
      fetch('http://192.168.1.10:8080/user/interest',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: addInterest
      })
      fetch('http://192.168.1.10:8080/user/randominterest',{
          method: 'POST',
          headers:{
              'Content-Type':'application/json',
          },
          body: JSON.stringify({
              "token": this.state.data.token,
              "username":this.state.data.username
          })
      }).then((response)=>{
          return response.json();
      }).then((responseJSON)=>{
          console.log(responseJSON);
          if(responseJSON.MainCategoryID!=undefined){
            this.state.cards = [
              {text: responseJSON.Name, backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID}
            ]
          }else if(responseJSON.SubCategoryID!=undefined){
            this.state.cards = [
              {text: responseJSON.Name, backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID}
            ]
          }else if(responseJSON.SubSubCategory != undefined){
            this.state.cards = [
              {text: responseJSON.Name, backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID}
            ]
          }
          this.forceUpdate();
          //this.props.navigation.navigate('Match', {data:this.state});
      }).catch((err)=>{
          console.log(err);
      })
      //console.log(`Yes for ${card.text}, ${card.id}`)
    }
    handleNope = (card) => {
      fetch('http://192.168.1.10:8080/user/randominterest',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            "token": this.state.data.token,
            "username":this.state.data.username
        })
      }).then((response)=>{
          return response.json();
      }).then((responseJSON)=>{
          console.log(responseJSON);
          if(responseJSON.MainCategoryID!=undefined){
            this.state.cards = [
              {text: responseJSON.Name, backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', MainCategoryID:responseJSON.MainCategoryID, ID: responseJSON.ID}
            ]
          }else if(responseJSON.SubCategoryID!=undefined){
            this.state.cards = [
              {text: responseJSON.Name, backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubCategoryID:responseJSON.SubCategoryID, ID: responseJSON.ID}
            ]
          }else if(responseJSON.SubSubCategory != undefined){
            this.state.cards = [
              {text: responseJSON.Name, backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID},
              {text: "", backgroundColor: 'purple', SubSubCategory:responseJSON.SubSubCategory, ID: responseJSON.ID}
            ]
          }
          this.forceUpdate();
          //this.props.navigation.navigate('Match', {data:this.state});
      }).catch((err)=>{
          console.log(err);
      })
    }


    render() {
      return (
          <LinearGradient
              colors={['#024757', '#00c5d0']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={{flex: 1}}>
              <View style={imgStyle.imgPos}>
                  <Image style={imgStyle.image}
                          source={require('../assets/crowd_logo.png')}/>
              </View>
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
