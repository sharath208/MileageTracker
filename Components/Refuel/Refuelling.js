import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Refuel = () => {
  
  return (
    <View style={{flex:1,justifyContent:"center"}}>
        <View style={{alignItems:"center"}}>
            <View style={{justifyContent:"center",alignItems:"center",width:324}}>
                <View><Image source={require('../images/No_Refuels.png')}/></View>
                <View><Text style={{color:"#0B3C58",fontFamily:"New Rubrik",fontSize:14}}>No refuelling records yet!</Text></View>
                <View><Text style={{fontFamily:"New Rubrik",fontSize:12,textAlign:"center"}}>Add a record using the + button below to begin your wealthcare journey</Text></View>
            </View>
        </View>
        <View style={{position:"absolute",bottom:16,right:16}}><TouchableOpacity><Image source={require('../images/add.png')}/></TouchableOpacity></View>
    </View>
  );
};


export default Refuel;
