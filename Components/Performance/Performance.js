import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DropDown from '../ReusableComp/DropDown';
const SignUpPage = () => {
    const lists=[];
  return (
    <View style={{alignItems:'center',marginTop:12}}>
        <View><Text style={{fontFamily:"New Rubrik",fontSize:16,color:"#0B3C58"}}>Choose the vehicle: </Text></View>
        <DropDown list={lists} style={{backgroundColor:"white",marginTop:8,borderRadius:8}}/>
    </View>
  );
};


export default SignUpPage;
