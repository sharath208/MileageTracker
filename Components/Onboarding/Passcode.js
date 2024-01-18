import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
import User from '../Schema';
import useStore from '../Zustand';
const PasscodeSetupScreen = ({route,navigation}) => {
  console.log(route.params.email)
  const setter = useStore((state)=>state.setter);
  const email=(JSON.stringify(route.params.email))
  const person=User.useObject('User',email);
  const realm=User.useRealm();
  const [passcode,setPasscode]=useState(['10','10','10','10']);
  const [check,setCheck]=useState(['10','10','10','10']);
  const [error,setError]=useState(false);
  const Continue=()=>{
    console.log(passcode,check);
    let pass='';
    for (let i = 0; i < passcode.length; i++) {
      pass+=passcode[i];
      if (passcode[i] !== check[i]) {
        setError(true);
      }
    }
    if(error===false){
      pass=parseInt(pass,10);
      console.log(pass);
      if (person!==null) {
        realm.write(() => {
          person.passcode=pass;
        });
      }
      setter(email);
      navigation.navigate('HomeTab');
    }
  }
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
                onChangeText={(text)=>setPasscode([text,...passcode.slice(1)])}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                secureTextEntry
                maxLength={1}
                onChangeText={(text)=>setPasscode([...passcode.slice(0, 1),text,...passcode.slice(2)])}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                secureTextEntry
                maxLength={1}
                onChangeText={(text)=>setPasscode([...passcode.slice(0, 2),text,...passcode.slice(3)])}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                secureTextEntry
                maxLength={1}
                onChangeText={(text)=>setPasscode([...passcode.slice(0, 3),text])}
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
              onChangeText={(text)=>setCheck([text,...check.slice(1)])}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
              maxLength={1}
              onChangeText={(text)=>setCheck([...check.slice(0, 1),text,...check.slice(2)])}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
              maxLength={1}
              onChangeText={(text)=>setCheck([...check.slice(0, 2),text,...check.slice(3)])}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
              maxLength={1}
              onChangeText={(text)=>setCheck([...check.slice(0, 3),text])}
            />
          </View>
          {error&&<View style={{flexDirection:"row"}}><Image source={require('../images/error.png')}/><Text style={{color:'#F93333', fontSize:12,fontFamily:"New Rubrik"}}>The passcodes don't match</Text></View>}
        </View>    
      </View>
      <View style={{alignItems:'center'}}>
        <View style={{width:284}}>
        <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={Continue} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Continue</Text></TouchableOpacity>
          <View style={{margin:10,alignItems:'center'}}><TouchableOpacity onPress={()=>{navigation.navigate('HomeTab')}}><Text>Skip</Text></TouchableOpacity></View>
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
