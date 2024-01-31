import React from 'react';
import { useState } from 'react';
import { useRealm } from '@realm/react';
import { View, Text, TouchableOpacity,Image,Modal,StyleSheet } from 'react-native';
import useStore from '../../Zustand'
const DrawerContent = (props) => {
  const [msg,setMsg]=useState("");
  const [text,setText]=useState("");
  const {id,name,nickname}=useStore();
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const realm=useRealm();
  const person=realm.objectForPrimaryKey('User',id);
  const veh=realm.objects('Vehicle').filtered('userId=$0',id);
  const del=()=>{
    veh.forEach((vehicle)=>{
      const fuels=realm.objects('Fuel').filtered('vehicleId=$0',vehicle.id);
      realm.write(()=>{
        realm.delete(fuels)
      })
      realm.write(()=>{
        realm.delete(vehicle)
      })
    })
    realm.write(()=>{
      realm.delete(person)
    })
    props.navigation.navigate('SignUp');
  }
  return (
    <View style={{backgroundColor:"#F0F2F2"}}>
      <Modal presentationStyle="overFullScreen" transparent={true} visible={isModalVisible1} onBackdropPress={()=>{setModalVisible1(!isModalVisible1)}} style={{backgroundColor:'white',alignItems:"center",justifyContent:"center"}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View><Text>{msg}</Text></View>
            <Text>{text}</Text>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{setModalVisible1(!isModalVisible1)}} ><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>NO</Text></TouchableOpacity>
              <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={()=>{props.navigation.navigate('SignUp')}} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>YES</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal presentationStyle="overFullScreen" transparent={true} visible={isModalVisible2} onBackdropPress={()=>{setModalVisible2(!isModalVisible2)}} style={{backgroundColor:'white',alignItems:"center",justifyContent:"center"}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View><Text>{msg}</Text></View>
            <Text>{text}</Text>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{setModalVisible2(!isModalVisible2)}} ><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>NO</Text></TouchableOpacity>
              <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={del} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>YES</Text></TouchableOpacity>
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
            <TouchableOpacity onPress={()=>{setMsg("Are you sure you want to delete your account?");setText("Note that all your data will be lost permanently");props.navigation.toggleDrawer();setModalVisible2(!isModalVisible2)}} style={{width:"100%",height:"100%",borderRadius:8,backgroundColor:"white",justifyContent:"center"}}>
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
            <TouchableOpacity onPress={()=>{setMsg("Are you sure you want to logout?");props.navigation.toggleDrawer();setModalVisible1(!isModalVisible1)}} style={{width:"100%",height:"100%",borderRadius:8,backgroundColor:"#F93333",alignItems:"center",justifyContent:"center"}}>
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