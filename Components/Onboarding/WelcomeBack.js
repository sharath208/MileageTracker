// ImageContentPage.js

import React from 'react';
import { Button, View, TextInput, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const ImageContentPage = () => {
  return (
    <View style={{flex:1,backgroundColor:"#D6E4E4", alignItems:'center'}}>
      <View style={{width:324}}>
        <View style={{height:120}}></View>
        <Text style={{color:"#0B3C58",fontFamily: "New Rubrik",fontSize: 22,fontWeight: 500,lineHeight: 28,letterSpacing: 0,textAlign: 'left'
  }}>Welcome back!</Text>
        <View style={{height:32}}></View>
        <Text style={{color:"#0B3C58",fontFamily: "New Rubrik",fontSize: 20,fontWeight: 500,lineHeight: 25,letterSpacing: 0,textAlign: 'left'}}>Enter your 4-Digit Passcode<Text style={{color:"red"}}>*</Text></Text>
        <Text style={{color:"#0B3C58",fontFamily: "New Rubrik",fontSize: 14,fontWeight: 500,lineHeight: 18,letterSpacing: 0,textAlign: 'left'}}>Just checking it's really you!</Text>
        <View style={{height:12}}></View>
        <View style={styles.passcodeContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={1}
                  onChangeText={(text)=>setPasscode(passcode*10+text)}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={1}
                  onChangeText={(text)=>setPasscode(passcode*10+text)}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={1}
                  onChangeText={(text)=>setPasscode(passcode*10+text)}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={1}
                  onChangeText={(text)=>setPasscode(passcode*10+text)}
                />
              </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  passcodeContainer: {
    width:324,
    height:52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    height: 52,
    width: 78,
    backgroundColor:'white',
    marginHorizontal: 5,
    textAlign: 'center',
  },
});
export default ImageContentPage;
