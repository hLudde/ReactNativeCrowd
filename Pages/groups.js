import React, {Component} from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {Searchbar} from 'react-native-paper';

const styles = StyleSheet.create({
    flexBox: {
        backgroundColor:'#C9F4FA',
        flex: 1,
        height: 120,
        width: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    flexStyle: {
        flex:1,
        flexDirection:"row",
        justifyContent:'space-between',
        paddingBottom:20,
    },
    circle: {
        height: 80,
        width: 80,
        borderRadius: 80/2,
        backgroundColor: '#00c5d0',
        position: 'absolute',
        marginLeft: 28,
        marginTop: 32,
    },
    textStyle: {
        paddingTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class groups extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        query: '',
        groupName: '',
    };

    render() {
        const {query} = this.state;
        return (
            <ScrollView style={{flexDirection:'column',flex:1,paddingTop: 20,padding: 20}}>

                <View>
                    <View style={{paddingBottom:25, width: 230, marginHorizontal: 100}}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={query => { this.setState({ query: query }); }}
                            value={query}
                        />
                    </View>
                </View>

                <View style={styles.flexStyle}>
                    <View style={styles.flexBox}>
                        <TouchableOpacity>
                            <View style={[styles.flexBox,styles.circle]}>
                            </View>
                            <Text style = {styles.textStyle}> Superkoderne </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.1}}/>
                    <View style={styles.flexBox}>
                        <TouchableOpacity>
                            <View style={[styles.flexBox,styles.circle]}>
                            </View>
                            <Text style = {styles.textStyle}> Vingjengen </Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.flexStyle}>
                    <View style={styles.flexBox}>
                        <TouchableOpacity>
                            <View style={[styles.flexBox,styles.circle]}>
                            </View>
                            <Text style = {styles.textStyle}> RDR2 </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.1}}/>
                    <View style={styles.flexBox}>
                        <TouchableOpacity>
                            <View style={[styles.flexBox,styles.circle]}>
                            </View>
                            <Text style = {styles.textStyle}> Ølgutta </Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.flexStyle}>
                    <View style={styles.flexBox}>
                        <TouchableOpacity>
                            <View style={[styles.flexBox,styles.circle]}>
                            </View>
                            <Text style = {styles.textStyle}> Sjakk4Life </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.1}}/>
                    <View style={styles.flexBox}>
                        <TouchableOpacity>
                            <View style={[styles.flexBox,styles.circle]}>
                            </View>
                            <Text style = {styles.textStyle}> SQL </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        );
    }
}
