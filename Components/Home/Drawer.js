import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DrawerContent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity style={styles.Image} onPress={()=>{navigation.navigate('SignUp')}}>
        <View style={{alignItems:"center"}}>
            <Image source={require('../images/profile.png')}/>
            <View style={{alignItems:"center"}}><Text>Switch Profile</Text></View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Image} onPress={()=>{navigation.navigate('SignUp')}}>
        <View style={{alignItems:"center"}}>
            <Image source={require('../images/delete.png')} style={{borderRadius:50,height:100,width:100}}/>
            <View style={{alignItems:"center"}}><Text>Delete Account</Text></View>
        </View>
        </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
