import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert ,Text, TouchableOpacity} from 'react-native';

const PasscodeSetupScreen = ({navigation}) => {
  const [passcode,setPasscode]=useState(0);
  const [check,setCheck]=useState(0);
  return (
    <View style={{justifyContent:"space-between", flex:1,backgroundColor:"#D6E4E4"}}>
      <View style={{height:412,alignItems:'center'}}>
        <View style={{width:324}}>
          <View style={{height:120}}></View>
            <Text style={{color:"#0B3C58",fontFamily:"New Rubrik",fontSize:22,fontWeight:500}}>Set a Passcode</Text>
            <View style={{height:32}}></View>
            <View><Text style={{color:"#0B3C58",fontFamily:"New Rubrik",fontSize:20,fontWeight:500}}>Enter a 4-Digit Passcode <Text style={{color:"red"}}>*</Text></Text></View>
            <View><Text>You will need to enter at every app launch</Text></View>
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
            <View style={{height:32}}></View>
            <Text>Confirm Passcode <Text style={{color:"red"}}>*</Text></Text>
            <View style={{height:12}}></View>
            <View style={styles.passcodeContainer}>
              <TextInput
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
              maxLength={1}
              onChangeText={(text)=>setCheck(check*10+text)}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
              maxLength={1}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
              maxLength={1}
              onChangeText={(text)=>setCheck(check*10+text)}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
              maxLength={1}
              onChangeText={(text)=>setCheck(check*10+text)}
            />
          </View> 
        </View>    
      </View>
      <View style={{alignItems:'center'}}>
        <View style={{width:284}}>
        <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={()=>{navigation.navigate('Passcode')}} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Continue</Text></TouchableOpacity>
          <View style={{margin:10,alignItems:'center'}}><TouchableOpacity><Text>Skip</Text></TouchableOpacity></View>
          <View style={{height:28}}></View>
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

export default PasscodeSetupScreen;
