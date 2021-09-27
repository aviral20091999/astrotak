import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator,TransitionPresets } from 'react-navigation-stack';
import { Dimensions, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import Astrologer from './Astrologer'

const HomeNavigator = createStackNavigator({
  
   HomeScreen: {
    screen: HomeScreen
    },
   Astrologer: {
    screen: Astrologer,
    
  }

},{

});




//export default createAppContainer(AppNavigator);