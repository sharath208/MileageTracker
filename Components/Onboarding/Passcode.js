import React, { useRef, useState } from 'react';
import { useQuery, useRealm } from '@realm/react';
import { View, TextInput, Button, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
import useStore from '../../Zustand';
const PasscodeSetupScreen = ({route,navigation}) => {
  const setter = useStore((state)=>state.setter);
  const realm=useRealm();
  const peo = realm.objects('User');
  const veh= realm.objects('Vehicle');
  const fuel=realm.objects('Fuel');
  console.log("people: ",peo,"Vehicles: ",veh,"fuels: ",fuel)
  const [passcode,setPasscode]=useState(['','','','']);
  const [check,setCheck]=useState(['','','','']);
  const [error1,setError1]=useState(false);
  const [error2,setError2]=useState(false);
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

  const handleConfirmPasscodeChange = (value, index) => {
    if (/^\d+$/.test(value)) {
      const newPasscode = [...check];
      newPasscode[index] = value;
      setCheck(newPasscode);
    } else if (value === '') {
      const newPasscode = [...check];
      newPasscode[index] = value;
      setCheck(newPasscode);
    } else {
      setError2(true);
    }
  };

  const Continue=()=>{
    const enteredPasscode = parseInt(passcode.join(''));
    const enteredConfirmPasscode = parseInt(check.join(''));

    if (!isNaN(enteredPasscode) && !isNaN(enteredConfirmPasscode) && enteredPasscode === enteredConfirmPasscode && enteredPasscode.toString().length === 4) 
    {
      setter(route.params.id,route.params.email,route.params.name,route.params.nickname)
      realm.write(() => {
        realm.create('User', {id:route.params.id, name:route.params.name, email:route.params.email,nickname:route.params.nickname,passcode:enteredPasscode});
      });
      navigation.navigate('HomeTab');
    } 
    else {
      setError1(true);
    }
  }
  const handleSkip = () => {
    setter(route.params.id,route.params.email,route.params.name,route.params.nickname)
    realm.write(() => {
      realm.create('User', {id:route.params.id, name:route.params.name, email:route.params.email,nickname:route.params.nickname,passcode:10001});
    });
    navigation.navigate('HomeTab')
  };
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

            <View style={{height:32}}></View>
            <Text>Confirm Passcode <Text style={{color:"red"}}>*</Text></Text>
            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              {check.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.input}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  secureTextEntry={true}
                  onChangeText={(text) => handleConfirmPasscodeChange(text, index)}
                />
              ))}
            </View>
          {error2&&<View style={{flexDirection:"row"}}><Image source={require('../images/error.png')}/><Text style={{color:'#F93333', fontSize:12,fontFamily:"New Rubrik"}}>Only Numeric Values Allowed</Text></View>}
          {error1&&<View style={{flexDirection:"row"}}><Image source={require('../images/error.png')}/><Text style={{color:'#F93333', fontSize:12,fontFamily:"New Rubrik"}}>The passcodes don't match</Text></View>}
        </View>    
      </View>
      <View style={{alignItems:'center'}}>
        <View style={{width:284}}>
        <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={Continue} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Continue</Text></TouchableOpacity>
          <View style={{margin:10,alignItems:'center'}}><TouchableOpacity onPress={handleSkip}><Text>Skip</Text></TouchableOpacity></View>
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
