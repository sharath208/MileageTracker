// ImageContentPage.js
import React from 'react';
import { Button, View, Image, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import Profile from '../Home/Profile';
import User from '../Schema';
const ImageContentPage = ({navigation} ) => {
  const realm = User.useRealm();
  const people=realm.objects('User');
  console.log(people);
  return (
    <View style={{alignItems:"center",flex:1,backgroundColor:"#D6E4E4",}}>
      <View style={{height:52}}></View>
       <View style={styles.TopImage}>
          <Image source={require('../images/ic_launcher.png')} 
          resizeMode="contain"></Image>
        </View>
      {
      people.length==0?<View style={{justifyContent:""}}><View style={{alignItems:"center"}}>
        <View style={{height:8,width:8,alignItems:'center'}}></View>

        <View style={styles.Text}>
          <Text style={{fontSize:20,color:'#FF4E4E',fontFamily:"New Rubrik"}}>Mielage Tracker</Text>
        </View>

        <View style={{height:40,width:40,alignItems:'center'}}></View>

        <View style={{height:25,width:324}}>
          <Text style={{textAlign:'center',color:'#0B3C58',fontSize:20,fontWeight:400,fontFamily:"New Rubrik"}}>Create an account to get started</Text>
        </View>

        <View style={{height:32,width:32,alignItems:'center'}}></View>

        <View style={{width:324}}><TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:"#0B3C58",borderRadius:8}} onPress={()=>{navigation.navigate('Login')}} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>SIGN UP</Text></TouchableOpacity></View>

      </View>
      <View style={{alignItems:'center'}}><Image source={require('../images/Onboarding_bottom.png')} 
        resizeMethod='auto'/></View>
      </View>:
      <View style={{width:"80%",alignItems:"center"}}>
        <View style={{height:200}}></View>
        <Text style={{fontSize:25,color:'#0B3C58',fontFamily:"New Rubrik"}}>Who are you?</Text>
        <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start"}}>
          {
            people.map(person=>{return <Profile name={person.nickname}/>})
          }
          <View style={{alignItems:"center"}}><TouchableOpacity style={StyleSheet.Image} onPress={()=>{navigation.navigate('Login')}}><Image source={require('../images/add.png')} style={{borderRadius:50,height:100,width:100}}/><View style={{alignItems:"center"}}><Text style={{fontSize:16}}>Add User</Text></View></TouchableOpacity></View>
        </View>
      </View>
      }
      </View>
  );
};

const styles = StyleSheet.create({
  Main:{
    
  },
  TopImage:{
    alignItems:"center",
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
