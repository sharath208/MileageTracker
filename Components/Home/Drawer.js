import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity,Image,Modal,StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import useStore from '../../Zustand'
const DrawerContent = (props) => {
  const [msg,setMsg]=useState("");
  const [text,setText]=useState("");
  const {name,nickname}=useStore();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{backgroundColor:"#F0F2F2"}}>
      <Modal presentationStyle="overFullScreen" transparent={true} visible={isModalVisible} onBackdropPress={toggleModal} style={{backgroundColor:'white',alignItems:"center",justifyContent:"center"}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View><Text>{msg}</Text></View>
            <Text>{text}</Text>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{toggleModal()}} ><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>NO</Text></TouchableOpacity>
              <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,backgroundColor:/* name===''||engine===''||selectedVehicleType===null?"#B0B0B0": */"#0B3C58",borderRadius:8}} onPress={()=>{props.navigation.navigate('SignUp')}} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>YES</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{width:"100%",alignItems:"center",marginTop:"20%"}}>
        <View style={{width:"80%"}}> 
          <Image source={require('../images/profile.png')} />
          <Text>{nickname===""?name:nickname}</Text>
        </View>
      </View>
      <View style={{margin:20,width:"80%",height:"83%",alignItems:"center",justifyContent:"space-between"}}>
        <View style={{width:"100%",height:"80%"}}>
          <View style={{width:"100%",height:"7%",borderRadius:8,backgroundColor:"white",justifyContent:"center"}}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUp')}} style={{width:"100%",height:"100%",borderRadius:8,backgroundColor:"white",justifyContent:"center"}}>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{margin:10,flexDirection:"row"}}>
                    <Image source={require('../images/profile.png')}/>
                    <View style={{alignItems:"center"}}><Text>Switch Profile</Text></View>
                </View>
                <View style={{margin:10,justifyContent:"center"}}><Image source={require('../images/RightArrow.png')}/></View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width:"100%",height:"7%",borderRadius:8,backgroundColor:"white",justifyContent:"center"}}>
            <TouchableOpacity onPress={()=>{setMsg("Are you sure you want to delete your account?");setText("Note that all your data will be lost permanently");props.navigation.toggleDrawer();toggleModal()}} style={{width:"100%",height:"100%",borderRadius:8,backgroundColor:"white",justifyContent:"center"}}>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{margin:10,flexDirection:"row"}}>
                  <Image source={require('../images/delete.png')} />
                  <View style={{alignItems:"center"}}><Text>Delete Account</Text></View>
                </View>
                <View style={{margin:10,justifyContent:"center"}}><Image source={require('../images/RightArrow.png')}/></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:"100%",height:"7%",borderRadius:8,backgroundColor:"#F93333",alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity onPress={()=>{setMsg("Are you sure you want to logout?");props.navigation.toggleDrawer();toggleModal()}} style={{width:"100%",height:"100%",borderRadius:8,backgroundColor:"#F93333",alignItems:"center",justifyContent:"center"}}>
                <Text>LogOut</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});
export default DrawerContent;
{/* */}