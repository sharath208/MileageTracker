import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AddVehicle = (props) => {

  return (
    <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:""}}><Image source={require('../images/Maskgroup.png')}></Image></View>
        <Text style={{textAlign:"center",fontSize:16,color:"#0B3C58"}}>Add a Vehile to start tracking its refuelling & performance</Text>
        <View style={{width:200}}><TouchableOpacity style={{alignItems:"center",justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={()=>{props.navigation.navigate('VehicleForm')}} ><Text style={{fontSize:18,color:"white"}}>Add Vehicle <Text style={{fontSize:30}}>{`\u2192`}</Text></Text></TouchableOpacity></View>
    </View>
  );
};


export default AddVehicle;
