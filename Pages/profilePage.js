import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

import AnimatedBar from "react-native-animated-bar";

export default class profilePage extends React.Component {
    state = {
        progress: 0,
    };

    componentDidMount() {
        const interval = setInterval(() => {
            if (this.state.progress > 0.9) return clearInterval(interval);
            this.setState(state => {
                return {
                    progress: state.progress + 0.1, // incrementer med antall xp for faen
                };
            });
        }, 1000);
    }

    render() {
        return (
            <View>
                <Text style={textStyle.overText}>-Min Profil-</Text>
                <Text style={textStyle.underText}>{this.props.navigation.state.params.username}</Text>

                <View style={imgStyle.imgPos}>
                    <Image style={imgStyle.image}
                           source={require('../assets/avatar.png')}/>
                </View>

                <View style={barStyle.bar}>
                    <AnimatedBar
                        progress={this.state.progress}
                        height={20}
                        borderColor="grey"
                        fillColor="black"
                        barColor="orange"
                        borderRadius={5}
                        borderWidth={5}
                        duration={500}
                    >
                    </AnimatedBar>
                </View>

                <View>
                    <Text style={textStyle.underText}> Over 1251 XP til neste nivå </Text>
                    <Text style={textStyle.underText}>Min Achievements</Text>
                </View>
                <Button title="Return" onPress={this.return}/>
            </View>
        );
    }
    return = () => {
        this.props.navigation.goBack();
    }
}

const textStyle = StyleSheet.create({
    overText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 35,
        textAlignVertical: 'top',
        textAlign: 'center',
        padding: 20,
    },
    underText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
});

const imgStyle = StyleSheet.create({
    image: {
        height: 150,
        borderRadius: 75,
        width: 150,
    },
    imgPos: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});

const barStyle = StyleSheet.create({
    bar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});