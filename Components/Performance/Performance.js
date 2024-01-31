import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
import DropDown from '../ReusableComp/DropDown';
import {Bar,Scatter} from '../ReusableComp/Chart'
import useStore  from '../../Zustand';
import { useRealm } from '@realm/react';
const SignUpPage = () => {
  const [vehicles,setVehicles]=useState([]);
  const [selectedVehicle,setSelectedVehicleType]=useState(null);
  const realm=useRealm();
  const [Vid,setVid]=useState(null);
  const {id}=useStore()
  useEffect(() => {
    const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
    setVehicles(allvehicles)
  }, [realm]);
  const vehiclenames=vehicles.map((vehicle)=>{return vehicle.name})
  return (
    <ScrollView contentContainerStyle={{alignItems:'center',marginTop:12}}>
        <View>
          <Text style={{fontFamily:"New Rubrik",fontSize:16,color:"#0B3C58"}}>Choose the vehicle: </Text>
        </View>
        <DropDown
          name="Vehicle Name"
          list={vehiclenames}
          default={"Select A Vehicle"}
          onSelect={(selectedOption) => {setSelectedVehicleType(selectedOption);setVid(vehicles[vehiclenames.indexOf(selectedOption)].id)}}
          style={{borderRadius:8}}/>
        {
          selectedVehicle===null?
          <View></View>
          :
          <View style={{width:"90%"}}>
            <Text>Money spent on fuel</Text>
            <Bar vid={Vid}/> 
            <Text>Vehicle mielage Performance</Text>
            <Scatter vid={Vid}/>
          </View>
        }
    </ScrollView>
  );
};


export default SignUpPage;
