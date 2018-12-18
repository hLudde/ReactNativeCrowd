import { createStackNavigator, createAppContainer } from 'react-navigation';

import Crowd from "./Pages/home";
import Profile from "./Pages/profile";

const App = createStackNavigator(
  {
    Home: {screen: Crowd},
    User: {screen: Profile}
  },
  {
    defaultNavigationOptions:{
      header:null
    }
  }
);

export default createAppContainer(App);