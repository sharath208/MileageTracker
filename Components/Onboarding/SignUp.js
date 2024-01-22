// ImageContentPage.js
import React ,{ useEffect, useState } from 'react';
import { ScrollView, View, Image, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import Profile from '../ReusableComp/Profile';
import { useRealm } from '@realm/react';
import useStore from '../../Zustand';
const ImageContentPage = ({navigation} ) => {
  const setter = useStore((state)=>state.setter);
  const [users, setUsers] = useState([]);
  const realm=useRealm();
  useEffect(() => {
    const people = realm.objects('User');
    setUsers(people);
  }, [realm]);

const del = () => {
  const people = realm.objects('User');
  realm.write(() => {
    realm.delete(people);
  });
};

  return (
    <ScrollView>
    <View style={{alignItems:"center",flex:1,backgroundColor:"#D6E4E4",}}>
      <TouchableOpacity onPress={del}><Text>Delete all</Text></TouchableOpacity>
      <View style={{height:52}}></View>
       <View style={styles.TopImage}>
          <Image source={require('../images/ic_launcher.png')} 
          resizeMode="contain"></Image>
        </View>
      {
      users.length==0?<View style={{justifyContent:""}}><View style={{alignItems:"center"}}>
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
        <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
          {
              users.map((person)=>{return <TouchableOpacity key={person.id} style={styles.Image} onPress={()=>{
              if(person.passcode===10001){
                setter(person.email,person.name,person.nickname);
                navigation.navigate('HomeTab')
              }
              else
              navigation.navigate('WelcomeBack', {email: person.email,name:person.name,nickname:person.nickname})}}><Profile navigation={navigation} name={person.name} nickname={person.nickname}/></TouchableOpacity>})
          } 
          <TouchableOpacity style={styles.Image} onPress={()=>{navigation.navigate('Login')}}><View style={{alignItems:"center"}}><Image source={require('../images/add.png')} style={{borderRadius:50,height:100,width:100}}/><View style={{alignItems:"center"}}><Text>Add User</Text></View></View></TouchableOpacity>
        </View>
      </View>
      }
      </View>
      </ScrollView>
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
  },
  Image:{
    height:150,
    width:150,
  }
});

export default ImageContentPage;
