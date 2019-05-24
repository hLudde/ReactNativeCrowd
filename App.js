import React from 'react';

//import socketIOClient from './node_modules/socket.io-client';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import Crowd from "./Pages/home";
import Profile from "./Pages/profile";
import Login from "./Pages/login";
import SignUp from "./Pages/signUp";
import ProfilePage from "./Pages/profilePage";
import Chat from "./Pages/chat";

const App = createStackNavigator(
  {
    home: {screen: Crowd},
    login: {screen: Login},
    user: {screen: Profile},
    signUp: {screen: SignUp},
    profilePage: {screen:ProfilePage},
    chat: {screen: Chat}
  },
  {
    defaultNavigationOptions:{
      header:null
    }
  }
);


export default createAppContainer(App);