import React , {useState }from 'react';
import Navbar from './Navbar.js';
import { Button, View, TextInput,Image, Text, StyleSheet } from 'react-native';
const Homepage = () => {
  return (
    <View>
    <View>
        <View style={{width:30}}><Button title="P"/></View>
        {/* <Image></Image> */}
        <Text style={{color:"red",fontSize:25}}>Hi Snack Muncher,</Text>
        <Text style={{fontSize:15}}>Track your miles towards a prosperous financial journey!</Text>
        {/* <Image></Image> */}
        <Text style={{fontSize:15}}>Add a Vehile to start tracking its refuelling & performance</Text>
        <View style={{width:200}}><Button title="Add Vehicle ->"/></View>
    </View>
    <Navbar/>
    </View>
  );
};

export default Homepage;
