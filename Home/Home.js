import React , {useState }from 'react';
import Navbar from './Navbar.js';
import { Button, View, TextInput,Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Homepage = () => {
  const [count,setCount]=useState(0);
  const [model,setModel]=useState(false);
  return (
    <View style={{flex:1,backgroundColor:"#D0EAEA"}}>
    <View style={{height:36}}></View>
    <View style={{height:28,flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>setModel(true)}><Image source={require('../images/Large.png')}/></TouchableOpacity>
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
          </View>{ count===0?
          <View style={{alignItems:'center'}}>
            <Image source={require('../images/Maskgroup.png')}></Image>
            <Text style={{textAlign:"center",fontSize:16,color:"#0B3C58"}}>Add a Vehile to start tracking its refuelling & performance</Text>
            <View style={{width:200}}><Button title="Add Vehicle ->"/></View>
          </View>:<View></View>}
        </View>
      </View>
      <Navbar/>
    </View>
  );
};

export default Homepage;
