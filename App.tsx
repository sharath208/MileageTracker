/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SignUp from './Onboarding/SignUp';
import Login from './Onboarding/Login';
import Passcode from './Onboarding/Passcode';
import Home from './Home/Home.js';
import WelcomeBack from './Onboarding/WelcomeBack.js'
import Landing from './Landing.js';
import Test from './test.js';
import Test2 from './Test2.js';
import Refuel from './Home/Refuelling.js';
import Performance from './Home/Performance.js';
import addRefuel from './Home/addRefuel.js';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import {
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native';
const Stack=createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Passcode" component={Passcode}/>
        <Stack.Screen name="Home" component={Performance}/>
        <Stack.Screen name="Refuelling" component={Refuel}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
