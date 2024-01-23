import React, { useState } from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import DropDown from '../ReusableComp/DropDown';
import useStore from '../../Zustand';
import { useRealm } from '@realm/react';
const VehicleForm = ({navigation}) => {
    const [imageSource, setImageSource] = useState(null);
    const realm=useRealm();
    const [name,setName]=useState("");
    const [engine,setEngine]=useState("");
    const {id}= useStore();
    const [selectedVehicleType, setSelectedVehicleType] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [chosenDate, setChosenDate] = useState(new Date());
    const handleDateChange = (newDate) => {
        setChosenDate(newDate);
    };
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const openImagePicker = () => {
        toggleModal();
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
    
        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image picker error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setImageSource(imageUri);
          }
        });
      };
      handleCameraLaunch = () => {
        toggleModal();
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
      
        launchCamera(options, response => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.error) {
            console.log('Camera Error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
            console.log(imageUri);
          }
        });
      }
    const adder=()=>{
        realm.write(() => {
            realm.create('Vehicle', {
                id:new Realm.BSON.ObjectId(), 
                userId:id, 
                name: name,
                engine: engine,
                type: selectedVehicleType,
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
                list={["2 wheeler", "3 wheeler", '4 wheeler', 'other']}
                onSelect={(selectedOption) => setSelectedVehicleType(selectedOption)}
                style={styles.input}/>
            <TextInput
                backgroundColor="white"
                style={styles.input}
                placeholder='Refuelling Date'
                onChangeText={(text) => setName(text)}
                value={name}
            /></View>
            <Text>Odometer Details</Text>
            <View style={{width:"80%",marginTop:24,flexDirection:"row"}}>
                <TextInput
                    backgroundColor="white"
                    style={{...styles.input,flex:1}}
                    placeholder='Start reading'
                    onChangeText={(text) => setEngine(text)}
                    value={engine}
                />
                <TextInput
                    backgroundColor="white"
                    style={{...styles.input,flex:1}}
                    placeholder='End reading'
                    onChangeText={(text) => setEngine(text)}
                    value={engine}
                />
            </View>
            <Text>Fuel Details</Text>
            <View style={{width:"80%",marginTop:24,flexDirection:"row"}}>
                <TextInput
                    backgroundColor="white"
                    style={{...styles.input,flex:1}}
                    placeholder='Consumed(in L)'
                    onChangeText={(text) => setEngine(text)}
                    value={engine}
                />
                <TextInput
                    backgroundColor="white"
                    style={{...styles.input,flex:1}}
                    placeholder='Price (in $$)'
                    onChangeText={(text) => setEngine(text)}
                    value={engine}
                />
            </View>
        </View>
        <View style={{alignItems:"center"}}>
            <View style={{marginBottom:10,width:"90%",alignItems:"center",flexDirection:"row",justifyContent:"space-around"}}>
                <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{navigation.goBack()} }><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>Cancel</Text></TouchableOpacity>
                <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,backgroundColor:name===''||engine===''||selectedVehicleType===null?"#B0B0B0":"#0B3C58",borderRadius:8}} onPress={adder} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Save</Text></TouchableOpacity>
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
