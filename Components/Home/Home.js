import React , {useEffect,useState }from 'react';
import Drawer from '../ReusableComp/Drawer';
import AddVehicle from '../Vehicle/AddVehicle';
import useStore  from '../../Zustand';
import { useRealm } from '@realm/react';
import vehicleFrame from '../Vehicle/vehicleframes';
import { Button, View, TextInput,Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Home = ({navigation}) => {
  const [selectedVehicle,setSelectedVehicleType]=useState(null);
  const [vehicles,setVehicles]=useState(null);
  const realm=useRealm();
  const email= useStore((state) => state.email);
  console.log(email)
  const person = realm.objects('User').filtered('email = $0', email)[0];
  console.log(person)
  useEffect(() => {
    const vehicleObjs=person.vehicles;
    setVehicles(vehicleObjs);
  }, [realm]);
  console.log(vehicles)
  /* let vehicleNames=[];
  if(vehicles!==undefined){
    vehicleNames=vehicles.map((vehicle)=>{vehicle.name});
  } */
  return (
    <View style={{flex:1,backgroundColor:"#D0EAEA",justifyContent:'space-between'}}>
      <View>
        <View style={{height:36}}></View>
        <View style={{height:28,flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity onPress={()=>{ navigation.navigate('SignUp') }}><Image source={require('../images/Large.png')}/></TouchableOpacity>
          <Image source={require('../images/Union.png')}></Image>
          <Text style={{width:10}}></Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'space-between'}}>
          <View style={{height:28}}></View>
          <View style={{width:324}}>
            <View>
              <Text style={{color:'#EB655F',fontFamily: "New Rubrik",fontSize: 22,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',
              }}>Hi {person.nickname===""?person.name:person.nickname},</Text>
            </View>
            <View style={{height:8}}></View>
            { 
            vehicles===undefined?
              <View><Text style={{color:'#0B3C58',fontFamily: "New Rubrik",fontSize: 16,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',}}>Track your miles towards a prosperous financial journey!</Text>
            
              <AddVehicle navigation={navigation}/></View>:
              <View>
                {/* <Text>Here is everything about your</Text>
                {selectedVehicle?<View><DropDown
                  name="Vehicle Type"
                  list={vehicles}
                  onSelect={(selectedOption) => setSelectedVehicleType(selectedOption)}
                  style={styles.input}/>
                <vehicleFrame name={vehicleNames[vehicles.indexOf(selectedVehicle)]}/></View>:<View></View>}
               */}</View>
            }
          </View>
        </View>
      </View>
    </View>
  );
};
export default Home;
