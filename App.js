import React, { Component } from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Crowd from "./Pages/home";
import Profile from "./Pages/profile";
import Login from "./Pages/auth/login";
import SignUp from "./Pages/auth/signup";
import Match from './Pages/match';
import profilePage from './Pages/profilePage'
import groups from './Pages/groups';
import updateProfile from './Pages/updateProfile'
import gruppeDannet from './Pages/gruppeDannet'

export const api = React.createContext("http://10.32.9.62/");
// NAVIGATION DRAWER IN HEADER
class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        //Props til open/close  drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('./assets/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 15,}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

// Dette er stylen skjermene vi vil ha i nav stacken
const Match_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
        screen: Match,
        navigationOptions: ({ navigation }) => ({
            title: 'Finn Interesser',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});
const profilePage_StackNavigator = createStackNavigator({
    Second: {
        screen: profilePage,
        navigationOptions: ({ navigation }) => ({
            title: 'Min Profil',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});
const groups_StackNavigator = createStackNavigator({
    Third: {
        screen: groups,
        navigationOptions: ({ navigation }) => ({
            title: 'Mine Grupper',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});


// sider som skal være med i stacken her
const DrawerNavigator = createDrawerNavigator({
    //Drawer Optons og indexing
    home: {
        screen: Crowd,
        navigationOptions: ({navigation}) => {
            return {
                drawerLabel: () => null,
            }
        }
    },
    Match: {
        screen: Match_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Match',
        },
    },
    profilePage: {
        screen: profilePage_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Min Profil',
        },
    },
    Grupper: {
        screen: groups_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Mine Grupper',
        },
    },
    // ikke med i drawer stacken
    login: {
        screen: Login,
        navigationOptions: ({navigation}) => {
            return {
                drawerLabel: () => null,
            }
        }
    },
    user: {
        screen: Profile,
        navigationOptions: ({navigation}) => {
            return {
                drawerLabel: () => null,
            }
        }},
    signUp: {
        screen: SignUp,
        navigationOptions: ({navigation}) => {
            return {
                drawerLabel: () => null,
            }
        }},

    updateProfile: {
        screen:updateProfile,
        navigationOptions: ({navigation}) => {
            return {
                drawerLabel: () => null,
            }
        }},
    gruppeDannet: {
        screen:gruppeDannet,
        navigationOptions: ({navigation}) => {
            return {
                drawerLabel: () => null,
            }
        }}

});

export default createAppContainer(DrawerNavigator);
