import React, { useState , useEffect} from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';
import DropDown from '../ReusableComp/DropDown';
import useStore from '../../Zustand';
import { useRealm } from '@realm/react';
import DatePicker from 'react-native-date-picker'
import { parse } from 'react-native-svg';
const VehicleForm = ({route,navigation}) => {
    const [vehicles, setVehicles] = useState([]);
    const realm=useRealm();
    const [date,setDate]=useState(route.params.data.date===undefined||route.params.data.date===null?new Date():route.params.data.date);
    const [odoStart,setodoStart]=useState(route.params.data.odostart===undefined?0:route.params.data.odostart);
    const [odoEnd,setodoEnd]=useState(route.params.data.odoend===undefined?0:route.params.data.odoend)
    const [fuel,setFuel]=useState(route.params.data.fuelConsumed===undefined?0:route.params.data.fuelConsumed);
    const [open, setOpen] = useState(false)
    const [price,setPrice]=useState(route.params.data.price);
    const {id}= useStore();
    const [selectedVehicleType, setSelectedVehicleType] = useState(route.params.data.name===undefined?null:JSON.stringify(route.params.data.name));
    const [isModalVisible, setModalVisible] = useState(false);
    useEffect(() => {
      const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
      setVehicles(allvehicles)
    }, [realm]);
    const vehiclenames=vehicles.map((vehicle)=>{return vehicle.name})
    const adder=()=>{
        const start=parseInt(odoStart,10)
        const end=parseInt(odoEnd,10);
        const fue=parseFloat(fuel);
        const pric=parseFloat(price).toFixed(2);
        const cost=parseFloat(pric);
        realm.write(() => {
            realm.create('Fuel', {
                id:new Realm.BSON.ObjectId(), 
                vehicleId:vehicles[vehiclenames.indexOf(selectedVehicleType)].id,
                addDate:route.params.data.addDate===undefined?new Date():route.params.data.addDate,
                date:date,
                odostart:start,
                odoend:end,
                fuelConsumed:fue,
                price:cost,
            });
          });
        navigation.goBack();
    }

  return (
    <View>
      <View style={{height:"10%"}}>
        <ImageBackground source={require('../images/Refuel_header.png')} style={{width:"100%",height:"100%"}}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image source={require('../images/RedLeftArrow.png')} style={{marginLeft:"5.4%",marginTop:"9.8%"}}/></TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={{backgroundColor:"#F0F2F2",justifyContent:"space-between"}}>
          <View style={{alignItems:"center"}}>
              <Text style={{color:"#0B3C58",textAlign:"center", fontSize:20,fontFamily:"New Rubrik",fontWeight:"500"}}>Add Refuelling Record</Text>
              <View style={{marginVertical:24}}>
              <DropDown
                  name="Vehicle Name"
                  list={vehiclenames}
                  onSelect={(selectedOption) => setSelectedVehicleType(selectedOption)}
                  style={styles.input}
                  default={selectedVehicleType}
              />
              <TouchableOpacity onPress={()=>setOpen(true)} style={styles.input}><Text>{date===null||date===undefined?"Date":date.toLocaleString()}</Text></TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false)
                  setDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
                />
              </View>
              <Text>Odometer Details</Text>
              <View style={{width:"80%",margin:24,flexDirection:"row"}}>
                <TextInput
                      backgroundColor="white"
                      style={{...styles.input,flex:1}}
                      placeholder={odoStart===null||odoStart===undefined?'Start reading':JSON.stringify(odoStart)}
                      onChangeText={(text) => setodoStart(text)}
                      value={odoStart}
                  />
                  <TextInput
                      backgroundColor="white"
                      style={{...styles.input,flex:1}}
                      placeholder={odoEnd===null||odoEnd===undefined?'End reading':JSON.stringify(odoEnd)}
                      onChangeText={(text) => setodoEnd(text)}
                      value={odoEnd}
                  />
              </View>
              <Text>Fuel Details</Text>
              <View style={{width:"80%",marginTop:24,flexDirection:"row"}}>
                  <TextInput
                      backgroundColor="white"
                      style={{...styles.input,flex:1}}
                      placeholder={fuel===null||fuel===undefined?'Consumed(in L)':JSON.stringify(fuel)}
                      onChangeText={(text) => setFuel(text)}
                      value={fuel}
                  />
                  <TextInput
                      backgroundColor="white"
                      style={{...styles.input,flex:1}}
                      placeholder={price===null||price===undefined?'Price (in $$)':JSON.stringify(price)}
                      onChangeText={(text) => setPrice(text)}
                      value={price}
                  />
              </View>
          </View>
          <View style={{alignItems:"center"}}>
              <View style={{marginBottom:10,width:"90%",alignItems:"center",flexDirection:"row",justifyContent:"space-around"}}>
                  <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{navigation.goBack()} }><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>Cancel</Text></TouchableOpacity>
                  <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,backgroundColor:selectedVehicleType===null||date===null||odoEnd===""||odoStart===""||fuel===""||price===""?"#B0B0B0":"#0B3C58",borderRadius:8}} onPress={adder} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Save</Text></TouchableOpacity>
              </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
       color: "#58798C",
    marginTop:20,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"white", 
      width:324,
      height: 52,
      borderColor: 'gray',
      borderRadius: 8,
      padding:"16, 12, 16, 16",
    },
});
export default VehicleForm;
