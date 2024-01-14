// ImageContentPage.js

import React from 'react';
import { Button, View, Image, Text, StyleSheet ,ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';

const ImageContentPage = ({navigation} ) => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"#D6E4E4",}}>
    <View style={styles.Main}>
      <View style={{height:52,width:52}}></View>
      <View style={styles.Topcontainer}>
        <View style={styles.TopImage}>
          <Image source={require('../images/ic_launcher.png')} 
          resizeMode="contain"></Image>
        </View>

        <View style={{height:8,width:8,alignItems:'center'}}></View>

        <View style={styles.Text}>
          <Text style={{fontSize:20,color:'#FF4E4E',fontFamily:"New Rubrik"}}>Mielage Tracker</Text>
        </View>

        <View style={{height:40,width:40,alignItems:'center'}}></View>

        <View style={{height:25,width:324}}>
          <Text style={{textAlign:'center',color:'#0B3C58',fontSize:20,fontWeight:400,fontFamily:"New Rubrik"}}>Create an account to get started</Text>
        </View>

        <View style={{height:32,width:32,alignItems:'center'}}></View>

        <View style={{width:324}}><Button style={styles.button} title='Sign up' color="#0B3C58" onPress={() =>
        navigation.navigate('Login')} /></View>

      </View>
      <View style={{alignItems:'center'}}><Image source={require('../images/Onboarding_bottom.png')} 
        resizeMethod='auto'/></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Main:{
    justifyContent:'space-between'
  },
  Topcontainer:{
    height:379,
    left:18,
    alignItems:'center',
  },
  TopImage:{
    height:149,
    width:149,
  },
  Text:{
    width:145,
    height:25,
  },
  button:{
    height:48,
    borderRadius: 8,
    gap: 8,
    angle: -0,
  }
});

export default ImageContentPage;
