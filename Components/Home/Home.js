import React , {useEffect,useState }from 'react';
import DropDown from '../ReusableComp/DropDown';
import AddVehicle from '../Vehicle/AddVehicle';
import useStore  from '../../Zustand';
import { useRealm } from '@realm/react';
import VehicleFrame from '../Vehicle/vehicleframes';
import RefuelProfile from '../Refuel/RefuelProfile';
import {Bar} from '../ReusableComp/Chart'
import LinearGradient from 'react-native-linear-gradient';
import {FuelInsights} from '../ReusableComp/Chart'
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
  useEffect(() => {
    const allfuels = realm.objects('Fuel').filtered('vehicleId = $0', Vid).sorted('date',true).slice(0,5);
    setFuels(allfuels)
  }, [Vid,realm]);
  const vehiclenames=vehicles.map((vehicle)=>{return vehicle.name})
  return (
    <LinearGradient
      colors={['#C5E3DC', '#F6F6EC']}
      style={{flex:1}}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      >
        <ScrollView contentContainerStyle={{}}>
          <View style={{marginTop:36,flexDirection:"row",justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=>{ navigation.toggleDrawer() }} style={{marginLeft:7}}><Image source={require('../images/profile.png')}/></TouchableOpacity>
            <Image source={require('../images/Union.png')}></Image>
            <Text style={{width:10}}></Text>
          </View>
          <View style={{alignItems:'center'}}>
            <View style={{width:"90%"}}>
              <View>
                <Text style={{color:'#EB655F',fontFamily: "New Rubrik",fontSize: 22,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',
                }}>Hi {nickname===""?name:nickname},</Text>
              </View>
              { 
                vehicles.length===0?
                <View>
                  <Text style={{color:'#0B3C58',fontFamily: "New Rubrik",fontSize: 16,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',}}>Track your miles towards a prosperous financial journey!</Text>
                  <AddVehicle navigation={navigation}/>
                </View>
                :
                <View>
                  <View style={{alignItems:"center"}}>
                    <Text>Here is everything about your {selectedVehicle}</Text>
                  </View>
                  <View style={{alignItems:"center",margin:20}}>
                    <DropDown
                      name="Vehicle Name"
                      list={vehiclenames}
                      default={"Select A Vehicle"}
                      onSelect={(selectedOption) => {setSelectedVehicleType(selectedOption);setVid(vehicles[vehiclenames.indexOf(selectedOption)].id)}}
                      style={{borderRadius:8}}/>
                  </View>
                  {
                    selectedVehicle===null?
                      <View></View>
                      :
                      <View>
                        <View style={{marginTop:"7%",alignItems:"center"}}>
                          <VehicleFrame source={vehicles[vehiclenames.indexOf(selectedVehicle)].imageSource} type={vehicles[vehiclenames.indexOf(selectedVehicle)].type}/>
                        </View>
                        {
                          fuels.length===0?
                          <View style={{marginVertical:"7%",alignItems:"center"}}>
                            <Image source={require('../images/No_Refuels.png')}/>
                            <Text>It's time to add the refuelling details to get more insights</Text>
                            <TouchableOpacity style={{marginVertical:"7%",width:"50%",justifyContent:"center",backgroundColor:'#0B3C58',borderRadius:8,height:"20%"}} onPress={()=>{}}>
                              <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                                <Text style={{textAlign:"center", fontSize:18,color:"white"}}>Add Refuelling</Text>
                                <Image source={require('../images/ArrowRight.png')}/>
                              </View>
                            </TouchableOpacity>
                            </View>
                          :
                          <View>
                            <Text>Fuel Insights</Text>
                            <FuelInsights vid={Vid}/>
                            <Text>Money spent on fuel</Text>
                            <Bar vid={Vid}/>
                            {fuels.map((fuel)=>{return <TouchableOpacity key={fuel.id} onPress={()=>{navigation.navigate('RefuelEdit',{name:selectedVehicle,data:fuel});}}><RefuelProfile fuel={fuel.fuelConsumed} cost={fuel.price} date={fuel.date}/></TouchableOpacity>})}
                          </View>
                        }
                      </View>
                  }    
                </View>
              }
            </View>
          </View>
      </ScrollView>
    </LinearGradient>
  );
};
export default Home;
{/*  */}