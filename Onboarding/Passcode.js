import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert ,Text, TouchableOpacity} from 'react-native';

const PasscodeSetupScreen = () => {

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
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                secureTextEntry
                maxLength={1}
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
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
              maxLength={1}
            />
          </View> 
        </View>    
      </View>
      <View style={{alignItems:'center'}}>
        <View style={{width:284}}>
          <Button title="Continue"/>
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
{/* const passcodeInputs = Array(4).fill(0);
  const confirmPasscodeInputs = Array(4).fill(0);

  const passcodeInputRefs = passcodeInputs.map(() => useRef(null));
  const confirmPasscodeInputRefs = confirmPasscodeInputs.map(() => useRef(null));

  const focusInput = (inputs, index) => {
    if (index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handlePasscodeChange = (text, index) => {
    const sanitizedInput = text.replace(/[^0-9]/g, '');
    passcodeInputs[index] = sanitizedInput;

    if (sanitizedInput !== '' && index < passcodeInputs.length - 1) {
      focusInput(passcodeInputRefs, index);
    }
  };

  const handleConfirmPasscodeChange = (text, index) => {
    const sanitizedInput = text.replace(/[^0-9]/g, '');
    confirmPasscodeInputs[index] = sanitizedInput;

    if (sanitizedInput !== '' && index < confirmPasscodeInputs.length - 1) {
      focusInput(confirmPasscodeInputRefs, index);
    }
  };

  const handleSubmit = () => {
    const passcode = passcodeInputs.join('');
    const confirmPasscode = confirmPasscodeInputs.join('');

    if (passcode.length === 4 && confirmPasscode.length === 4) {
      if (passcode === confirmPasscode) {
        // Passcodes match
        Alert.alert('Success', 'Passcode has been set successfully');
        // You may want to save the passcode securely at this point
      } else {
        Alert.alert('Error', 'Passcodes do not match. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please enter a 4-digit passcode');
    }
  }; */}