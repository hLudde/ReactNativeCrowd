import React from 'react';


import { createStackNavigator, createAppContainer } from 'react-navigation';


import Crowd from "./Pages/home";
import Profile from "./Pages/profile";
import Login from "./Pages/login";
import SignUp from "./Pages/signUp";
import ProfilePage from "./Pages/profilePage";

const App = createStackNavigator(
  {
    home: {screen: Crowd},
    login: {screen: Login},
    user: {screen: Profile},
    signUp: {screen: SignUp},
    profilePage: {screen:ProfilePage}
  },
  {
    defaultNavigationOptions:{
      header:null
    }
  }
);


export default createAppContainer(App);