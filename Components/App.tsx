/* import 'react-native-gesture-handler'; */
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
import DrawerScreen from './Home/Drawer.js' 
import Refuel from './Home/Refuelling.js';
import Performance from './Home/Performance.js';
import addRefuel from './Home/addRefuel.js';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from './Schema';
import {
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native';
/* import { createDrawerNavigator } from '@react-navigation/drawer'; */

/* const Drawer = createDrawerNavigator(); */
const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();
/* const DrawerNav=()=>{
  return(
    <Drawer.Navigator drawerContent={(props) => <DrawerScreen {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  )
} */
const Tabnav=()=>{
  return(
      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused}) => {
        let iconName;
        if (route.name === 'Home')
          iconName =focused?require('./images/Bottom_tab/Home/filled.png'):require('./images/Bottom_tab/Home/unfilled.png');
        else if (route.name === 'Refuelling')
          iconName =focused?require('./images/Bottom_tab/Refuel/filled.png'):require('./images/Bottom_tab/Refuel/unfilled.png'); 
        else if(route.name === 'Performance')
          iconName =focused?require('./images/Bottom_tab/Performance/filled.png'):require('./images/Bottom_tab/Performance/unfilled.png');
        else 
          iconName =focused?require('./images/Bottom_tab/Vehicles/filled.png'):require('./images/Bottom_tab/Vehicles/unfilled.png');
        return <Image source={iconName} style={{ tintColor:"#0B3C58"}} />
        },})}>
        <Tab.Screen name="Home" component={Home} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Refuelling' component={Refuel} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Performance' component={Performance} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Vehicles' component={Home} options={{tabBarActiveTintColor: '#58798C'}}></Tab.Screen>
      </Tab.Navigator>
  )
} 
const App=()=> {
  return (
    <User.RealmProvider>
      <NavigationContainer> 
        <Stack.Navigator initialRouteName='SignUp'>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Passcode" component={Passcode}/>
          <Stack.Screen name="HomeTab" component={Tabnav} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </User.RealmProvider>
  );
}

export default App;
