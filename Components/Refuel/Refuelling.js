import React, { useState , useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRealm } from '@realm/react';
import useStore from '../../Zustand'
import DropDown from '../ReusableComp/DropDown'
import RefuelProfile from './RefuelProfile'
const Refuel = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const [numberoffuels,setNumberoffuels]=useState(0);
  /* const [vehicles,setVehicles]=useState([]);
  const realm=useRealm();
  const {id}=useStore();
  console.log(id);
  useEffect(() => {
    const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
    setVehicles(allvehicles)
  }, [realm]);
  const vehiclenames=vehicles.map((vehicle)=>{return vehicle.name}) */
  vehiclenames=[]
  return (
    <View style={{flex:1,backgroundColor:"#F0F2F2"}}>
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
          <View style={{alignItems:"center",width:"80%"}}>
            <DropDown
                name="Vehicle Name"
                list={vehiclenames}
                onSelect={(selectedOption) => setSelectedVehicleType(selectedOption)}
                style={styles.input}/>
            <DropDown
                name="Last 30 Days"
                list={['Last Week','Last 30 Days','Last Year']}
                onSelect={(selectedOption) => setSelectedVehicleType(selectedOption)}
                style={{...styles.input,width:"50%",marginTop:20}}/>
            <Text>{numberoffuels} Record{numberoffuels===1?'':'s'}  |  </Text>
            <RefuelProfile date="Wed, 22 Dec '23" fuel="25.6L" cost="+S$28.75"/>
          </View>
        }
      <View style={{position:"absolute",bottom:16,right:16}}><TouchableOpacity><Image source={require('../images/add.png')}/></TouchableOpacity></View>
    </View>
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
