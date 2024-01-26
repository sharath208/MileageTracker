import React, { useState , useEffect} from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRealm } from '@realm/react';
import useStore from '../../Zustand'
import LinearGradient from 'react-native-linear-gradient';
import VehicleFrame from './vehicleframes'
import AddVehicle from './AddVehicle';
const Vehicle = ({navigation}) => {
  const [vehicles,setVehicles]=useState([]);
  const realm=useRealm();
  const {id}=useStore()
  useEffect(() => {
    const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
    setVehicles(allvehicles)
  }, [realm]);
  return (
    <ScrollView bounces={false}>
      <View style={{marginTop:"7%",height:"87%",alignItems:"center"}}>
          {
              vehicles.length===0?
              <View>
                <AddVehicle/>
              </View>
              :
              <View syle={{flexDirection:"row",}}>
                
                  {vehicles.map((vehicle)=>{return <View key={vehicle.id} style={{width:"80%",backgroundColor:"white",borderRadius:12,marginTop:"6%"}}><VehicleFrame name={vehicle.name} type={vehicle.type} engine={vehicle.engine} imageSource={vehicle.imageSource}/></View>})}
                
              </View>
          }
          <View style={{width:"100%",alignItems:"flex-end",marginRight:15}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('VehicleForm')}}>
              <Image source={require('../images/add.png')}/>
            </TouchableOpacity>
          </View>
      </View>
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
export default Vehicle;
