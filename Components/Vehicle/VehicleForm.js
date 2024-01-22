import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import Modal from "react-native-modal";
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import DropDown from '../ReusableComp/DropDown';
import useStore from '../../Zustand';
import { useRealm } from '@realm/react';
const VehicleForm = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const [imageSource, setImageSource] = useState(null);
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
    const realm=useRealm();
    const [name,setName]=useState("");
    const [engine,setEngine]=useState("");
    const email= useStore((state) => state.email);
    console.log(email)
    const person = realm.objects('User').filtered('email = $0', email)[0];
    const [selectedVehicleType, setSelectedVehicleType] = useState(null);
    console.log(person)
    const adder=()=>{
        realm.write(() => {
            const newVehicle=realm.create('Vehicle', {
                id:new Realm.BSON.ObjectId(), 
                name: name,
                engine: engine,
                type: selectedVehicleType,
                user: person,
            });
          });
        navigation.goBack();
    }

  return (
    <View style={{height:"100%",backgroundColor:"#F0F2F2",justifyContent:"space-between"}}>
        <View style={{alignItems:"center"}}>
            <Text style={{color:"#0B3C58",textAlign:"center", fontSize:20,fontFamily:"New Rubrik",fontWeight:"500"}}>Add Vehicle</Text>
            <View style={{marginTop:36}}>
                <TouchableOpacity onPress={toggleModal}>{imageSource && <Image source={imageSource} style={{ width: 200, height: 200 }} />}<Image source={require('../images/addPhoto.png')}/></TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={{backgroundColor:'white',alignItems:"center",flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={()=>{navigation.navigate('Login')}} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Open Gallery</Text></TouchableOpacity>
            <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={()=>{navigation.navigate('Login')}} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Open Camera</Text></TouchableOpacity>
            </Modal>
            <View style={{marginTop:24,marginBottom:24}}>
            <TextInput
                backgroundColor="white"
                style={styles.input}
                placeholder='Vehicle Name'
                onChangeText={(text) => setName(text)}
                value={name}
            /></View>
            <DropDown
                name="Vehicle Type"
                list={["2 wheeler", "3 wheeler", '4 wheeler', 'other']}
                onSelect={(selectedOption) => setSelectedVehicleType(selectedOption)}
                style={styles.input}/>
            <View style={{marginTop:24}}>
            <TextInput
                backgroundColor="white"
                style={styles.input}
                placeholder='Engine CC'
                onChangeText={(text) => setEngine(text)}
                value={engine}
            /></View>
        </View>
        <View style={{alignItems:"center"}}>
            <View style={{marginBottom:10,width:"90%",alignItems:"center",flexDirection:"row",justifyContent:"space-around"}}>
                <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} /* onPress={()=>{navigation.goBack()} }*/><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>Cancel</Text></TouchableOpacity>
                <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} /* onPress={adder} */><Text style={{textAlign:"center", fontSize:18,color:"white"}}>ADD</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
       color: "#58798C",
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
