import { useRealm } from '@realm/react';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet ,Modal} from 'react-native';
const Refuel = ({route,navigation}) => {
  const realm=useRealm();
  const del=()=>{
    realm.write(() => {
        realm.delete(route.params.data);
    });
    navigation.goBack();
  }
  const [isModalVisible, setModalVisible] = useState(false);
  const Days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const Months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
  return (
    <View style={{flex:1,alignItems:"center"}}>
        <Modal presentationStyle="overFullScreen" transparent={true} visible={isModalVisible} onBackdropPress={()=>{setModalVisible(!isModalVisible)}} style={{backgroundColor:'white',alignItems:"center",justifyContent:"center"}}>
            <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View><Text>Are you sure you want to delete this refuelling record?</Text></View>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{setModalVisible(!isModalVisible)}} ><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>NO</Text></TouchableOpacity>
                <TouchableOpacity style={{width:"48%",justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={del} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>YES</Text></TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
        <View style={{flex:1,width:"80%",justifyContent:"space-between"}}>
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image source={require('../images/leftArrow.png')}/></TouchableOpacity>
                    <Text>{Days[route.params.data.date.getDay()]}, {route.params.data.date.getDate()} {Months[route.params.data.date.getMonth()]}'{route.params.data.date.getFullYear()%100}</Text>
                    <TouchableOpacity onPress={()=>{setModalVisible(!isModalVisible)}}><Image source={require('../images/RedDelete.png')}/></TouchableOpacity>
                </View>
                <View style={{alignItems:"center"}}><Text>{route.params.name}</Text></View>
                <View style={{alignItems:"center"}}><Text>Added On {Days[route.params.data.date.getDay()]}, {route.params.data.date.getDate()} {Months[route.params.data.date.getMonth()]}'{route.params.data.date.getFullYear()%100}</Text></View>
                <View style={{backgroundColor:"white",padding:16}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Start Reading</Text><Text>{route.params.data.odostart}</Text></View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>End Reading</Text><Text>{route.params.data.odoend}</Text></View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Consumed</Text><Text>{route.params.data.fuelConsumed}L</Text></View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Price</Text><Text>S$ {route.params.data.price}</Text></View>
                </View>
            </View>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity style={{width:"95%",justifyContent:"center",height:48,borderColor:"#0B3C58",borderWidth:2,borderRadius:8}} onPress={()=>{navigation.navigate('RefuelForm',{data:route.params})} }><Text style={{textAlign:"center", fontSize:18,color:"#0B3C58"}}>Edit</Text></TouchableOpacity>
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
export default Refuel;
