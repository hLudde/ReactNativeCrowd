import React from 'react';


import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';


import Crowd from "./Pages/home";
import Profile from "./Pages/profile";
import login from "./Pages/auth/login";
import signup from "./Pages/auth/signup";
//import profilePage from "./Pages/profilePage";
import Match from './Pages/match';
import profilePage from './Pages/profilePage'
import groups from './Pages/groups';


const App = createStackNavigator(
    {
        home: {screen: Crowd},
        signup: {screen: signup},
        login: {screen: login},
        user: {screen: Profile},
        profilePage: {screen: profilePage},
        match: {screen: Match}
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);
//export default createAppContainer(App);

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
            title: 'Interesser',
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
    Match: {
        //Title
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
});


export default createAppContainer(DrawerNavigator);
