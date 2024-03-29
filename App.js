/* import 'react-native-gesture-handler'; */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import SignUp from './Components/Onboarding/SignUp';
import Login from './Components/Onboarding/Login';
import Passcode from './Components/Onboarding/Passcode';
import Home from './Components/Home/Home.js';
import WelcomeBack from './Components/Onboarding/WelcomeBack.js'
import Landing from './Components/Landing.js';
import Test from './Components/test.js';
import Test2 from './Components/Test2.js';
import DrawerScreen from './Components/Home/Drawer.js' 
import Refuel from './Components/Refuel/Refuelling.js';
import RefuelEdit from './Components/Refuel/RefuelEdit.js';
import Performance from './Components/Performance/Performance.js';
import addRefuel from './Components/Refuel/addRefuel.js';
import Vehicles from './Components/Vehicle/Vehicle.js'
import VehicleForm from './Components/Vehicle/VehicleForm.js';
import Hurray from './Components/Vehicle/Hurray.js';
import Splash from './Splash.js'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RefuelForm from './Components/Refuel/RefuelForm.js'
import LinearGradient from 'react-native-linear-gradient';
import {Image,} from 'react-native';
import { RealmProvider } from '@realm/react';
import realmConfig from './Schema.js';

const Drawer = createDrawerNavigator();
const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

const DrawerNav=()=>{
  return(
    <Drawer.Navigator drawerContent={(props) => <DrawerScreen {...props} />}>
        <Drawer.Screen name="HomeScreen" component={Home} options={{headerShown:false}} />
    </Drawer.Navigator>
  )
}

const VehNav=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="VehiclesTab" component={Vehicles}/>
      <Stack.Screen name="VehicleForm" component={VehicleForm} />
      <Stack.Screen name="Hurray" component={Hurray} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const RefNav=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Refuelling" component={Refuel} options={{headerShown:false}}/>
      <Stack.Screen name="RefuelForm" component={RefuelForm} options={{headerShown:false}}/>
      <Stack.Screen name="RefuelEdit" component={RefuelEdit} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const Tabnav=()=>{
  return(
      <Tab.Navigator options={{}} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused}) => {
        let iconName;
        if (route.name === 'Home')
          iconName =focused?require('./Components/images/Bottom_tab/Home/filled.png'):require('./Components/images/Bottom_tab/Home/unfilled.png');
        else if (route.name === 'Refuel')
          iconName =focused?require('./Components/images/Bottom_tab/Refuel/filled.png'):require('./Components/images/Bottom_tab/Refuel/unfilled.png'); 
        else if(route.name === 'Performance')
          iconName =focused?require('./Components/images/Bottom_tab/Performance/filled.png'):require('./Components/images/Bottom_tab/Performance/unfilled.png');
        else 
          iconName =focused?require('./Components/images/Bottom_tab/Vehicles/filled.png'):require('./Components/images/Bottom_tab/Vehicles/unfilled.png');
        return <Image source={iconName} style={{ tintColor:"#0B3C58"}} />
        },})}>
        <Tab.Screen name="Home" component={DrawerNav} options={{headerShown:false,tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Refuel' component={RefNav} options={{headerShown:false,tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Performance' component={Performance} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
        <Tab.Screen name='Vehicle' component={VehNav} options={{headerShown:false,tabBarActiveTintColor: '#58798C'}}></Tab.Screen>
      </Tab.Navigator>
  )
} 
const App=()=> {
  return (

    <RealmProvider config={realmConfig}>
      <NavigationContainer> 
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Passcode" component={Passcode}/>
          <Stack.Screen name="WelcomeBack" component={WelcomeBack}/>
          <Stack.Screen name="HomeTab" component={Tabnav} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}

export default App;
