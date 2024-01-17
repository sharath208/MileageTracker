import React , {useState }from 'react';
import Refuel from './Refuelling';
import Drawer from './Drawer';
import AddVehicle from './AddVehicle'
import { Button, View, TextInput,Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Home = ({navigation}) => {
  const [count,setCount]=useState(0);

  return (
    <View style={{flex:1,backgroundColor:"#D0EAEA",justifyContent:'space-between'}}>
      <View>
        <View style={{height:36}}></View>
        <View style={{height:28,flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Drawer')}}><Image source={require('../images/Large.png')}/></TouchableOpacity>
          <Image source={require('../images/Union.png')}></Image>
          <Text style={{width:10}}></Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'space-between'}}>
          <View style={{height:28}}></View>
          <View style={{width:324}}>
            <View>
              <Text style={{color:'#EB655F',fontFamily: "New Rubrik",fontSize: 22,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',
              }}>Hi Snack Muncher,</Text>
              <View style={{height:8}}></View>
              <Text style={{color:'#0B3C58',fontFamily: "New Rubrik",fontSize: 16,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',}}>Track your miles towards a prosperous financial journey!</Text>
            </View>
            { count===0?<AddVehicle/>:<View></View>}
          </View>
        </View>
      </View>
    </View>
  );
};
export default Home;
