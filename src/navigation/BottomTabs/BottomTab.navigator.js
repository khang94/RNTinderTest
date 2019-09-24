import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image, View} from 'react-native';

import React from 'react';
import Home from '../../containers/Home/Home.container';
import Favourites from '../../containers/Favourite/Favourite.container';

import assets from './../../assets/images/';
import styles from './BottomTab.styles';

const getDefaultNavigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused}) => {
    const {routeName} = navigation.state;
    if (routeName === 'Home') {
      return (
        <View>
          <Image source={assets.navigation.home} style={styles.icon} />
        </View>
      );
    } else {
      return (
        <View>
          <Image source={assets.navigation.favourite} style={styles.icon} />
        </View>
      );
    }
  },
});

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Favourites: {
      screen: Favourites,
    },
  },
  {
    defaultNavigationOptions: getDefaultNavigationOptions,
    tabBarOptions: {
      style: {backgroundColor: 'white'},
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
    },
    initialRouteName: 'Home',
  },
);

export default BottomTabNavigator;
