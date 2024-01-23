import React from 'react';
import { useQuery, useRealm } from '@realm/react';
import { Button, View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import useStore from '../../Zustand'
import { useState,useEffect } from 'react';
const ImageContentPage = ({route,navigation}) => {
  const setter = useStore((state)=>state.setter);
  const [passcode,setPasscode]=useState(['','','','']);
  const [user,setUser]=useState(null);
  const [error1,setError1]=useState(false);
  const [error2,setError2]=useState(false);
  const realm=useRealm();
  const email=route.params.email;
  useEffect(() => {
    const person = realm.objects('User').filtered('email = $0', email)[0];
    setUser(person)
  }, [realm]);
  const handlePasscodeChange = (value, index) => {
    if (/^\d+$/.test(value)) {
      const newPasscode = [...passcode];
      newPasscode[index] = value;
      setPasscode(newPasscode);
    } else if (value === '') {
      const newPasscode = [...passcode];
      newPasscode[index] = value;
      setPasscode(newPasscode);
    } else {
      setError2(true);
    }
  };
  const check=()=>{
    const enteredPasscode = parseInt(passcode.join(''));
    if(user.passcode===enteredPasscode)
    {
      setter(route.params.id,route.params.email,route.params.name,route.params.nickname)
      navigation.navigate('HomeTab')
    }
  }
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
        <View style={{ flexDirection: 'row' }}>
            {passcode.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              secureTextEntry={true}
              onChangeText={(text) => handlePasscodeChange(text, index)}
            />
              ))}
        </View>
        <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={check} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Continue</Text></TouchableOpacity>
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
