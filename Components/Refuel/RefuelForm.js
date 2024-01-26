import React, { useState , useEffect} from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import DropDown from '../ReusableComp/DropDown';
import useStore from '../../Zustand';
import { useRealm } from '@realm/react';
import DatePicker from 'react-native-date-picker'
const VehicleForm = ({navigation}) => {
    const [vehicles, setVehicles] = useState([]);
    const realm=useRealm();
    const [date,setDate]=useState(new Date());
    const [odoStart,setodoStart]=useState("");
    const [odoEnd,setodoEnd]=useState("");
    const [fuel,setFuel]=useState("");
    const [open, setOpen] = useState(false)
    const [price,setPrice]=useState("");
    const {id,setVeh}= useStore();
    const [selectedVehicleType, setSelectedVehicleType] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    useEffect(() => {
      const allvehicles = realm.objects('Vehicle').filtered('userId = $0', id);
      setVehicles(allvehicles)
    }, [realm]);
    console.log(vehicles)
    const vehiclenames=vehicles.map((vehicle)=>{return vehicle.name})
    const handleDateChange = (newDate) => {
        setChosenDate(newDate);
    };
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const adder=()=>{
        const start=parseInt(odoStart,10)
        const end=parseInt(odoEnd,10);
        const fue=parseFloat(fuel);
        const pric=parseFloat(price)
        const cost=pric.toFixed(2);
        realm.write(() => {
            realm.create('Fuel', {
                id:new Realm.BSON.ObjectId(), 
                vehicleId:vehicles[vehiclenames.indexOf(selectedVehicleType)].id,
                date:date,
                odostart:start,
                odoend:end,
                fuelConsumed:fue,
                price:pric,
            });
          });
        navigation.goBack();
    }

  return (
    <View style={{height:"100%",backgroundColor:"#F0F2F2",justifyContent:"space-between"}}>
        <View style={{alignItems:"center"}}>
            <Text style={{color:"#0B3C58",textAlign:"center", fontSize:20,fontFamily:"New Rubrik",fontWeight:"500"}}>Add Refuelling Record</Text>
            
            <View style={{marginTop:24,marginBottom:24}}>
            <DropDown
                name="Vehicle Name"
                list={vehiclenames}
                onSelect={(selectedOption) => setSelectedVehicleType(selectedOption)}
                style={styles.input}/>
            <TouchableOpacity onPress={()=>setOpen(true)} style={styles.input}><Text>Date</Text></TouchableOpacity>
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
                    placeholder='Start reading'
                    onChangeText={(text) => setodoStart(text)}
                    value={odoStart}
                />
                <TextInput
                    backgroundColor="white"
                    style={{...styles.input,flex:1}}
                    placeholder='End reading'
                    onChangeText={(text) => setodoEnd(text)}
                    value={odoEnd}
                />
            </View>
            <Text>Fuel Details</Text>
            <View style={{width:"80%",marginTop:24,flexDirection:"row"}}>
                <TextInput
                    backgroundColor="white"
                    style={{...styles.input,flex:1}}
                    placeholder='Consumed(in L)'
                    onChangeText={(text) => setFuel(text)}
                    value={fuel}
                />
                <TextInput
                    backgroundColor="white"
                    style={{...styles.input,flex:1}}
                    placeholder='Price (in $$)'
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
