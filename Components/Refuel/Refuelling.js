import React, { useState , useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet ,ScrollView, SafeAreaView,StatusBar} from 'react-native';
import { useRealm } from '@realm/react';
import useStore from '../../Zustand'
import DropDown from '../ReusableComp/DropDown'
import RefuelProfile from './RefuelProfile'
const Refuel = ({navigation}) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const [lengthType, setSelectedLengthType] = useState(null);
  const [vehicles,setVehicles]=useState([]);
  const [fuels,setFuels]=useState([]);
  const [Vid,setVid]=useState(null);
  const realm=useRealm();
  const {id}=useStore();
  useEffect(() => {
    const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
    setVehicles(allvehicles)
  }, [realm]);
  const vehiclenames=vehicles.map((vehicle)=>{return vehicle.name})
  useEffect(() => {
    const allvehicles = realm.objects('Fuel').filtered('vehicleId = $0', Vid);
    setFuels(allvehicles)
  }, [Vid,realm]);
  return (
    <ScrollView style={{backgroundColor:"#F0F2F2",}} contentContainerStyle={{alignItems:"center"}}>
      {
        vehiclenames.length===0?
          <View style={{justifyContent:"center"}}>
            <View style={{alignItems:"center"}}>
              <View style={{width:"80%",alignItems:"center"}}>
                <View><Image source={require('../images/No_Refuels.png')}/></View>  
                <View><Text style={{color:"#0B3C58",fontFamily:"New Rubrik",fontSize:14}}>No refuelling records yet!</Text></View>
                <View><Text style={{fontFamily:"New Rubrik",fontSize:12,textAlign:"center"}}>Add a record using the + button below to begin your wealthcare journey</Text></View> 
              </View>             
            </View>
          </View>
          :
          <View style={{height:"100%",width:"80%",alignItems:"center"}}>
            <View>
              <DropDown
                  name="Vehicle Name"
                  list={vehiclenames}
                  onSelect={(selectedOption) => {setSelectedVehicleType(selectedOption);setVid(vehicles[vehiclenames.indexOf(selectedOption)].id)}}
                  style={styles.input}/>
            </View>
            {
              selectedVehicleType===null?<View></View>
              :
              <View style={{width:"100%",alignItems:"center"}}>
                <View>
                  <DropDown
                      name="Last 30 Days"
                      list={['Last Week','Last 30 Days','Last Year']}
                      onSelect={(selectedOption) => {setSelectedLengthType(selectedOption)}}
                      style={{...styles.input,width:"50%",marginTop:"10%"}}/>
                </View>
                <View style={{marginTop:"7%"}}>
                  <Text>{fuels.length} Record{fuels.length===1?'':'s'} |</Text>
                </View>
                    {fuels.map((fuel)=>{return <View style={{height:"30%"}} key={fuel.id} ><RefuelProfile fuel={fuel.fuel} cost={fuel.price} date={fuel.date}/></View>})}
              </View>
            }

            <View style={{width:"100%",alignItems:"flex-end"}}><TouchableOpacity onPress={()=>{navigation.navigate('RefuelForm')}}><Image source={require('../images/add.png')}/></TouchableOpacity></View>
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
  scrollView: {
    height:"40%",
    marginHorizontal: 20,
  },
});
export default Refuel;
