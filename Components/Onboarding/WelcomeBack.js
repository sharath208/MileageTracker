import React from 'react';
import { useQuery, useRealm } from '@realm/react';
import { Button,Image, View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import useStore from '../../Zustand'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useState,useEffect } from 'react';
const ImageContentPage = ({route,navigation}) => {
  const setter = useStore((state)=>state.setter);
  const [passcode,setPasscode]=useState('');
  const [user,setUser]=useState(null);
  const [error1,setError1]=useState(false);
  const [error2,setError2]=useState(false);
  const realm=useRealm();
  const email=route.params.email;
  useEffect(() => {
    const person = realm.objects('User').filtered('email = $0', email)[0];
    setUser(person)
  }, [realm]);
  const handlePasscodeChange = (code) => {
    if (/^\d+$/.test(code)) {
      setPasscode(code)
    }
    else{
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
    else{
      setError1(true);
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
          <SmoothPinCodeInput
            value={passcode}
            onTextChange={handlePasscodeChange}
            codeLength={4}
            cellStyle={{ borderBottomWidth: 2, borderColor: 'gray' }}
          />    
        </View>
        <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={check} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Continue</Text></TouchableOpacity>
        {error2 &&<View style={{ flexDirection: 'row'}}><Image source={require('../images/error.png')}/><Text style={{ color: 'red' }}>Only numbers are valid</Text></View> }
        {error1 &&<View style={{ flexDirection: 'row'}}><Image source={require('../images/error.png')}/><Text style={{ color: 'red' }}>Passcode not correct</Text></View> }
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
