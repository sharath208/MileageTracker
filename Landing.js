// ImageContentPage.js

import React from 'react';
import { Button, View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Landing= () => {
  return (
    <View style={{backgroundColor:"#D6E4E4"}}>
      <View style={{height:673}}>
        <View style={{height:52}}></View>
        <View style={{height:149, alignItems:'center'}}><Image source={require('./images/ic_launcher.png')}/></View>
        <View style={{height:8}}></View>
        <View style={{height:25, alignItems:'center'}}><Text style={{color:"#FF4E4E",fontSize:20,fontFamily:'New Rubrik',fontWeight:500}}>Mielage Tracker</Text></View>
        <View style={{height:200}}></View>
        <View style={{alignItems:'center'}}><Text style={{color:"#0B3C58",fontSize:20,fontFamily:'New Rubrik',fontWeight:500}}>Who are you?</Text></View>
        <View style={{height:40}}></View>
        <View style={{flexWrap:"wrap"}}></View>
      </View>
    </View>
  );
};

export default Landing;
