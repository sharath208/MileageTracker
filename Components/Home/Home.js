import React , {useEffect,useState }from 'react';
import DropDown from '../ReusableComp/DropDown';
import AddVehicle from '../Vehicle/AddVehicle';
import useStore  from '../../Zustand';
import { useRealm } from '@realm/react';
import VehicleFrame from '../Vehicle/vehicleframes';
import AddRefuel from '../Refuel/addRefuel';
import RefuelProfile from '../Refuel/RefuelProfile';
import {Bar} from '../ReusableComp/Chart'
import { Button, View, TextInput,Image, Text, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native';
const Home = ({navigation}) => {
  const [vehicles,setVehicles]=useState([]);
  const [selectedVehicle,setSelectedVehicleType]=useState(null);
  const realm=useRealm();
  const [fuels,setFuels]=useState([]);
  const [Vid,setVid]=useState(null);
  const {id,name,nickname}=useStore()
  useEffect(() => {
    const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
    setVehicles(allvehicles)
  }, [realm]);
  const vehiclenames=vehicles.map((vehicle)=>{return vehicle.name})
  useEffect(() => {
    const allfuels = realm.objects('Fuel').filtered('vehicleId = $0', Vid).sorted('date',true).slice(0,5);
    setFuels(allfuels)
  }, [Vid,realm]);
  return (
    <ScrollView style={{backgroundColor:"#D0EAEA"}} contentContainerStyle={{flex:1}}>
        <View style={{marginTop:36,height:28,flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity onPress={()=>{ navigation.toggleDrawer() }}><Image source={require('../images/profile.png')}/></TouchableOpacity>
          <Image source={require('../images/Union.png')}></Image>
          <Text style={{width:10}}></Text>
        </View>
        <View style={{alignItems:'center'}}>
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
              <View style={{alignItems:"center"}}>
                <View>
                  <View style={{alignItems:"center"}}><Text>Here is everything about your {selectedVehicle}</Text></View>
                  <View style={{alignItems:"center",margin:20}}>
                    <DropDown
                    name="Vehicle Name"
                    list={vehiclenames}
                    default={"Select A Vehicle"}
                    onSelect={(selectedOption) => {setSelectedVehicleType(selectedOption);setVid(vehicles[vehiclenames.indexOf(selectedOption)].id)}}
                    style={{borderRadius:8}}/>
                  </View>
                  {
                    selectedVehicle===null?<View></View>:
                    <View>
                      <View style={{marginTop:"7%",alignItems:"center"}}>
                        <View syle={{flexDirection:"row",}}>
                          <View style={{width:"80%",backgroundColor:"white",borderRadius:12,}}>
                            <VehicleFrame imageSource={vehicles[vehiclenames.indexOf(selectedVehicle)].imageSource}/>
                          </View>
                          <View >
                            <Bar vid={Vid}/>
                          </View>
                        </View>
                      </View>
                      <View>
                        {fuels.map((fuel)=>{return <View key={fuel.id}><RefuelProfile fuel={fuel.fuelConsumed} cost={fuel.price} date={fuel.date}/></View>})}
                      </View>
                    </View>
                  }
                </View>
              </View>
            }
          </View>
        </View>
    </ScrollView>
  );
};
export default Home;
