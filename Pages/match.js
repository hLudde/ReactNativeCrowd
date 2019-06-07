
import React, { Component } from 'react';
import {Animated, Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import {LinearGradient} from 'expo';
import {Appbar} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import SlidingUpPanel from 'rn-sliding-up-panel'

export default class Match extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        groupName: '',

    };
    //sliding up panel
    static defaultProps = {
        draggableRange: {
            top: 550 / 1.75,
            bottom: 120,
        }
    };

    _draggedValue = new Animated.Value(120);

    render() {
        const {top, bottom} = this.props.draggableRange;

        const draggedValue = this._draggedValue.interpolate({
            inputRange: [bottom, top],
            outputRange: [0, 1],
            extrapolate: 'clamp',

        });
        return (
            <LinearGradient
                colors={['#024757', '#00c5d0']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={{flex: 1}}>
                <View style={slidingStyle.container}>

                    <Swiper style={swipperStyle.wrapper} showsPagination={false}>
                        <View style={swipperStyle.slide1}>
                            <Text style={swipperStyle.text}>Fisking</Text>
                        </View>
                        <View style={swipperStyle.slide2}>
                            <Text style={swipperStyle.text}>Beautiful</Text>
                        </View>
                        <View style={swipperStyle.slide3}>
                            <Text style={swipperStyle.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>

                <View style={slidingStyle.container}>
                    <SlidingUpPanel
                        showBackdrop={false}
                        ref={c => (this._panel = c)}
                        draggableRange={this.props.draggableRange}
                        animatedValue={this._draggedValue}>
                        <View style={slidingStyle.panel}>
                            <View style={slidingStyle.panelHeader}>
                                <Text style={{color: '#FFF'}}>Bottom Sheet Peek</Text>
                            </View>
                            <View style={slidingStyle.container}>
                                <Text> Hello world </Text>
                                <Text> Lenker til interesse grupper her</Text>
                            </View>
                        </View>
                    </SlidingUpPanel>
                </View>

            </LinearGradient>
        );
    }

}

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
