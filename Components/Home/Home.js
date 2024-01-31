import React , {useEffect,useState }from 'react';
import DropDown from '../ReusableComp/DropDown';
import AddVehicle from '../Vehicle/AddVehicle';
import useStore  from '../../Zustand';
import { useRealm } from '@realm/react';
import VehicleFrame from '../Vehicle/vehicleframes';
import AddRefuel from '../Refuel/addRefuel';
import RefuelProfile from '../Refuel/RefuelProfile';
import {Bar} from '../ReusableComp/Chart'
import LinearGradient from 'react-native-linear-gradient';
import { Button, View, TextInput,Image, Text, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native';
const Home = ({navigation}) => {
  const [vehicles,setVehicles]=useState([]);
  const [vehiclenames,setnames]=useState([]);
  const [selectedVehicle,setSelectedVehicleType]=useState(null);
  const realm=useRealm();
  const [fuels,setFuels]=useState([]);
  const [Vid,setVid]=useState(null);
  const {id,name,nickname}=useStore()
  /* useEffect(() => {
    const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
    setVehicles(allvehicles)
  }, [realm]); */
  useEffect(() => {
    const updateVeh = () => {
      const results = realm.objects('Vehicle').filtered('userId=$0',id);
      setVehicles([...results]);
      setnames(results.map((vehicle)=>{return vehicle.name}))
    };
    const updateFue = () => {
      const results = realm.objects('Fuel').filtered('vehicleId=$0',Vid).sorted('date',true).slice(0,5);
      setFuels([...results]);
    }
    const listener1 = realm.objects('Vehicle').addListener(updateVeh);
    const listener2 = realm.objects('Fuel').addListener(updateFue);
    return () => {
      listener1.remove();
      listener2.remove();
    };
  }, []);
  /* useEffect(() => {
    const allfuels = realm.objects('Fuel').filtered('vehicleId = $0', Vid).sorted('date',true).slice(0,5);
    setFuels(allfuels)
  }, [Vid,realm]); */
  return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <LinearGradient
          colors={['#C5E3DC', '#F6F6EC']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={{marginTop:36,flexDirection:"row",justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=>{ navigation.toggleDrawer() }}><Image source={require('../images/profile.png')}/></TouchableOpacity>
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
                    selectedVehicle===null?
                      <View></View>
                      :
                      <View style={{marginTop:"7%",alignItems:"center"}}>
                          <View style={{backgroundColor:"white",borderRadius:12}}>
                            <VehicleFrame imageSource={vehicles[vehiclenames.indexOf(selectedVehicle)].imageSource}/>
                          </View>
                      </View>
                  }    
                </View>
              }
            </View>
          </View>
        </LinearGradient>
        {
          vehicles.length===0?
            <View></View>
            :
            selectedVehicle===null?
              <View style={{backgroundColor:"#E4EBEF"}}>
                <Image source={require('../images/No_Refuels.png')}/>
                <Text>It's time to add the refuelling details to get more insights</Text>
                <View style={{flexDirection:"row"}}><TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:'#0B3C58',borderRadius:8}} onPress={()=>{}}><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Add Refuelling</Text><Image source={require('../images/ArrowRight.png')}/></TouchableOpacity></View>
              </View>
              :
              <Bar vid={Vid}/>
              
        }
      </ScrollView>
  );
};
export default Home;
{/*  */}