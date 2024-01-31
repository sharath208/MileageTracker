import { useRealm } from '@realm/react';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
const Refuel = ({route,navigation}) => {
    const realm=useRealm();
  const del=()=>{
    realm.write(() => {
        realm.delete(route.params.data);
    });
    navigation.goBack();
  }
  return (
    <View style={{flex:1,alignItems:"center"}}>
        <View style={{flex:1,width:"80%",justifyContent:"space-between"}}>
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image source={require('../images/leftArrow.png')}/></TouchableOpacity>
                    <Text>{route.params.data.date.toLocaleString()}</Text>
                    <TouchableOpacity onPress={del}><Image source={require('../images/RedDelete.png')}/></TouchableOpacity>
                </View>
                <View style={{alignItems:"center"}}><Text>{route.params.name}</Text></View>
                <View style={{alignItems:"center"}}><Text>Added On {route.params.data.addDate.toLocaleString()}</Text></View>
                <View style={{backgroundColor:"white",padding:16}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Start Reading</Text><Text>{route.params.data.odostart}</Text></View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>End Reading</Text><Text>{route.params.data.odoend}</Text></View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Consumed</Text><Text>{route.params.data.fuelConsumed}L</Text></View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Price</Text><Text>S$ {route.params.data.price}</Text></View>
                </View>
            </View>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity style={{width:"95%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{navigation.navigate('RefuelForm',{data:route.params})} }><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>Edit</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  );
};


export default Refuel;
