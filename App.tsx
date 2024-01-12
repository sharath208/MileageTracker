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
import Test from './test.js'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text,
  View,
  SafeAreaView
} from 'react-native';

const Stack=createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Passcode" component={Passcode}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;
