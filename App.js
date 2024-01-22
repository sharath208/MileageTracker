/* import 'react-native-gesture-handler'; */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import SignUp from './Components/Onboarding/SignUp';
import Login from './Components/Onboarding/Login';
import Passcode from './Components/Onboarding/Passcode';
import Home from './Components/Home/Home.js';
import WelcomeBack from './Components/Onboarding/WelcomeBack.js'
import Landing from './Components/Landing.js';
import Test from './Components/test.js';
import Test2 from './Components/Test2.js';
import DrawerScreen from './Components/ReusableComp/Drawer.js' 
import Refuel from './Components/Refuel/Refuelling.js';
import Performance from './Components/Performance/Performance.js';
import addRefuel from './Components/Refuel/addRefuel.js';
import Vehicles from './Components/Vehicle/Vehicle.js'
import { RealmProvider } from '@realm/react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import realmConfig from './Schema';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native';
import VehicleForm from './Components/Vehicle/VehicleForm.js';
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
          iconName =focused?require('./Components/images/Bottom_tab/Home/filled.png'):require('./Components/images/Bottom_tab/Home/unfilled.png');
        else if (route.name === 'Refuelling')
          iconName =focused?require('./Components/images/Bottom_tab/Refuel/filled.png'):require('./Components/images/Bottom_tab/Refuel/unfilled.png'); 
        else if(route.name === 'Performance')
          iconName =focused?require('./Components/images/Bottom_tab/Performance/filled.png'):require('./Components/images/Bottom_tab/Performance/unfilled.png');
        else 
          iconName =focused?require('./Components/images/Bottom_tab/Vehicles/filled.png'):require('./Components/images/Bottom_tab/Vehicles/unfilled.png');
        return <Image source={iconName} style={{ tintColor:"#0B3C58"}} />
        },})}>
        <Tab.Screen name="Home" component={Home} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Refuelling' component={Refuel} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Performance' component={Performance} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Vehicles' component={Vehicles} options={{tabBarActiveTintColor: '#58798C'}}></Tab.Screen>
      </Tab.Navigator>
  )
} 
const App=()=> {
  return (
    <RealmProvider config={realmConfig}>
      <NavigationContainer> 
        <Stack.Navigator initialRouteName='VehicleForm'>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Passcode" component={Passcode}/>
          <Stack.Screen name="WelcomeBack" component={WelcomeBack}/>
          <Stack.Screen name="HomeTab" component={Tabnav} options={{headerShown:false}}/>
          <Stack.Screen name="VehicleForm" component={VehicleForm} options={{headerStyle: {backgroundColor: '#f4511e',},}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}

export default App;
