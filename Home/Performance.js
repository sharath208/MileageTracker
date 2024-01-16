import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DropDown from './DropDown';
const SignUpPage = () => {
    const lists=[];
  return (
    <View style={{alignItems:'center'}}>
        <View><Text style={{fontFamily:"New Rubrik",fontSize:16,color:"#0B3C58"}}>Choose the vehicle: </Text></View>
        <DropDown list={lists}/>
    </View>
  );
};


export default SignUpPage;
