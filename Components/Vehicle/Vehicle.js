import React, { useState , useEffect} from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRealm } from '@realm/react';
import useStore from '../../Zustand'
import LinearGradient from 'react-native-linear-gradient';
import VehicleFrame from './vehicleframes'
const Refuel = () => {
  const vehiclenames=[{name:'splendour',id:3,type:"2 Wheeler",engine:"150CC"}]
  return (
    <ScrollView>
        {
            <View>
                {vehiclenames.map((vehicle)=>{return <VehicleFrame id={vehicle.id} vehicle={vehicle}/>})}
            </View>
        }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
     color: "#58798C",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white", 
    width:"80%",
    height: 52,
    borderColor: 'gray',
    borderRadius: 8,
    padding:"16, 12, 16, 16",
  },
});
export default Refuel;
