import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import Modal from "react-native-modal";
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import DropDown from '../ReusableComp/DropDown';
import useStore from '../../Zustand';
import { useRealm } from '@realm/react';
const VehicleForm = ({navigation}) => {
    const [imageSource, setImageSource] = useState("");
    const realm=useRealm();
    const [name,setName]=useState("");
    const [engine,setEngine]=useState("");
    const {id}= useStore();
    const [selectedVehicleType, setSelectedVehicleType] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
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
            console.log(imageUri);
          }
        });
      };
    const handleCameraLaunch = () => {
        toggleModal();
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
          saveToPhotos:true,
        };
      
        launchCamera(options, response => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.error) {
            console.log('Camera Error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setImageSource(imageUri);
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
                imageSource:imageSource,
            });
          });
        navigation.goBack();
    }

  return (
    <View style={{height:"100%",backgroundColor:"#F0F2F2",justifyContent:"space-between"}}>
        <View style={{alignItems:"center"}}>
            <Text style={{color:"#0B3C58",textAlign:"center", fontSize:20,fontFamily:"New Rubrik",fontWeight:"500"}}>Add Vehicle</Text>
            <View style={{marginTop:36}}>
                <TouchableOpacity onPress={toggleModal}>{imageSource!=="" ? <Image source={{uri:imageSource}} style={{ width: 150, height: 150, }} />:<Image source={require('../images/addPhoto.png')}/>}</TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={{backgroundColor:'white',alignItems:"center",flexDirection:"row",justifyContent:"space-around",height:"30%"}}>
              <View style={{height:"30%"}}>
                <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={openImagePicker} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Open Gallery</Text></TouchableOpacity>
                <TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={handleCameraLaunch}><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Open Camera</Text></TouchableOpacity>
              </View>
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
                <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{navigation.goBack()} }><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>Cancel</Text></TouchableOpacity>
                <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,backgroundColor:name===''||engine===''||selectedVehicleType===null?"#B0B0B0":"#0B3C58",borderRadius:8}} onPress={adder} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>ADD</Text></TouchableOpacity>
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
