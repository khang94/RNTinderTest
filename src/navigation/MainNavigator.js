import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import BottomTabNavigator from './BottomTabs/BottomTab.navigator';

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: BottomTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  initialRouteName: 'Home',
});

const AppNav = createAppContainer(AppNavigator);
export default AppNav;
