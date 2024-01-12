// ImageContentPage.js

import React from 'react';
import { Button, View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const ImageContentPage = () => {
  return (
    <View style={{backgroundColor:"#D6E4E4"}}>
      <Text style={{fontSize:20 ,margin:20}}>Welcome back!</Text>
      <Text style={{fontSize:16}}>Enter your 4-Digit Passcode<Text style={{color:"red"}}>*</Text></Text>
      <Text style={{fontSize:10}}>Just checking it's really you!</Text>
      <Button title="Go Back"/>
    </View>
  );
};

export default ImageContentPage;
