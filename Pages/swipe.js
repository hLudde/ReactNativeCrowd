import React, {Component} from 'react';
import CardStack, { Card } from 'react-native-card-stack-swiper';

export default class SwiperCards extends Component{
    render(){
        return(
            <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}>
                <Card style={[styles.card, styles.card1]}><Text style={styles.label}>A</Text></Card>
                <Card style={[styles.card, styles.card2]}><Text style={styles.label}>B</Text></Card>
                <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
            </CardStack>
        );
    }
}

