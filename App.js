import { createStackNavigator, createAppContainer } from 'react-navigation';

import Crowd from "./Pages/home";
import Profile from "./Pages/profile";
import Login from "./Pages/login";
import SignUp from "./Pages/signUp";

const App = createStackNavigator(
  {
    home: {screen: Crowd},
    login: {screen: Login},
    user: {screen: Profile},
    signUp: {screen: SignUp}
  },
  {
    defaultNavigationOptions:{
      header:null
    }
  }
);

export default createAppContainer(App);