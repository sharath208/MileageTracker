import React , {useEffect,useState }from 'react';
import DropDown from '../ReusableComp/DropDown';
import AddVehicle from '../Vehicle/AddVehicle';
import useStore  from '../../Zustand';
import { useRealm } from '@realm/react';
import VehicleFrame from '../Vehicle/vehicleframes';
import AddRefuel from '../Refuel/addRefuel';
import { Button, View, TextInput,Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Home = ({navigation}) => {
  const [vehicles,setVehicles]=useState([]);
  const [selectedVehicle,setSelectedVehicleType]=useState(null);
  const realm=useRealm();
  const {id,name,nickname}=useStore()
  useEffect(() => {
    const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
    setVehicles(allvehicles)
  }, [realm]);
  const vehiclenames=vehicles.map((vehicle)=>{return vehicle.name})
  return (
    <View style={{flex:1,backgroundColor:"#D0EAEA"}}>
        <View style={{marginTop:36,height:28,flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity onPress={()=>{ navigation.navigate('SignUp') }}><Image source={require('../images/profile.png')}/></TouchableOpacity>
          <Image source={require('../images/Union.png')}></Image>
          <Text style={{width:10}}></Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'space-between'}}>
          <View style={{height:28}}></View>
          <View style={{width:324}}>
            <View>
              <Text style={{color:'#EB655F',fontFamily: "New Rubrik",fontSize: 22,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',
              }}>Hi {nickname===""?name:nickname},</Text>
            </View>
            <View style={{height:8}}></View>
            { 
              vehicles.length===0?
              <View>
                <Text style={{color:'#0B3C58',fontFamily: "New Rubrik",fontSize: 16,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',}}>Track your miles towards a prosperous financial journey!</Text>
                <AddVehicle navigation={navigation}/>
              </View>
              :
              <View>
              {
                <View>
                  <Text>Here is everything about your {selectedVehicle}</Text>
                  <DropDown
                  name="Vehicle Type"
                  list={vehiclenames}
                  default={vehiclenames[0]}
                  onSelect={(selectedOption) => setSelectedVehicleType(selectedOption)}/>
                  <VehicleFrame name={selectedVehicle}/>
                </View>
              }
              </View>
            }
          </View>
        </View>
    </View>
  );
};
export default Home;
