import React, { useRef, useState } from 'react';
import { useQuery, useRealm } from '@realm/react';
import { View, TextInput, Button, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
import useStore from '../../Zustand';
import LinearGradient from 'react-native-linear-gradient';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
const PasscodeSetupScreen = ({route,navigation}) => {
  const setter = useStore((state)=>state.setter);
  const realm=useRealm();
  const peo = realm.objects('User');
  const veh= realm.objects('Vehicle');
  const fuel=realm.objects('Fuel');
  console.log("people: ",peo,"Vehicles: ",veh,"fuels: ",fuel)
  const [passcode,setPasscode]=useState("");
  const [check,setCheck]=useState('');
  const [error1,setError1]=useState(false);
  const [error2,setError2]=useState(false);
  const handlePasscodeChange = (code) => {
    if (/^\d+$/.test(code)) {
      setPasscode(code)
    }
    else{
      setError2(true);
    }
  };

  const handleConfirmPasscodeChange = (code) => {
    if (/^\d+$/.test(code)) {
      setCheck(code)
    }
    else{
      setError2(true);
    }
  };

  const Continue=()=>{
    const enteredPasscode = parseInt(passcode);
    const enteredConfirmPasscode = parseInt(check);

    if (!isNaN(enteredPasscode) && !isNaN(enteredConfirmPasscode) && enteredPasscode === enteredConfirmPasscode && passcode.length === 4) 
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
    <LinearGradient
      colors={['#C5E3DC', '#F6F6EC']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
    <View style={{justifyContent:"space-between", flex:1}}>
      <View style={{height:412,alignItems:'center'}}>
        <View style={{width:"80%",marginTop:"20%"}}>
            <Text style={{color:"#0B3C58",fontFamily:"New Rubrik",fontSize:22,fontWeight:500}}>Set a Passcode</Text>
            <View style={{height:32}}></View>
            <View><Text style={{color:"#0B3C58",fontFamily:"New Rubrik",fontSize:20,fontWeight:500}}>Enter a 4-Digit Passcode <Text style={{color:"red"}}>*</Text></Text></View>
            <View><Text>You will need to enter at every app launch</Text></View>
            <View style={{height:12}}></View>
            <View style={{ flexDirection: 'row' }}>
            <SmoothPinCodeInput
              password mask={
                <Text style={{fontSize:25}}>X</Text>
              }
              value={passcode}
              cellSize={70}
              onTextChange={handlePasscodeChange}
              codeLength={4}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: 'white',
                borderRadius:8,
                backgroundColor: 'white', 
                height:"80%"
              }}
              cellSpacing={10}
            />    
            </View>

            <View style={{height:32}}></View>
            <Text>Confirm Passcode <Text style={{color:"red"}}>*</Text></Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <SmoothPinCodeInput
              password mask={
                <Text style={{fontSize:25}}>X</Text>
              }
                value={check}
                cellSize={70}
                onTextChange={handleConfirmPasscodeChange}
                codeLength={4}
                cellStyle={{
                  borderBottomWidth: 2,
                  borderColor: 'white',
                  borderRadius:8,
                  backgroundColor: 'white', 
                  height:"80%"
                }}
                cellSpacing={10}
              />    
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
      </LinearGradient>
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
