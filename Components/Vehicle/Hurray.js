import React, { useState ,useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View , Image , ImageBackground,Text} from 'react-native';
const Hurray= ({route,navigation}) => {
    const source=""
    const name="adfsf"
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.replace('VehiclesTab');
        }, 2000);
        return () => clearTimeout(timeout);
      }, [navigation]);
  return (
    <View style={{flex:1,justifyContent:"space-between"}}>
    <LinearGradient
          colors={['#C5E3DC', '#F6F6EC']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
    >
        <View style={{alignItems:"center"}}>
            <ImageBackground source={require('../images/Decoration.png')} style={{height:300,width:300,justifyContent:"center",alignItems:"center"}}>
                {route.params.source===""?<Image source={require('../images/NoBikeimage.png')} style={{height:150,width:150,borderRadius:75}}/>:<Image source={{uri:route.params.source}} style={{height:150,width:150,borderRadius:75}}/>}
            </ImageBackground>
            <Text>{route.params.name}</Text>
            <Text>Vehicle Added</Text>
        </View>
        <View style={{flex:1,justifyContent:"flex-end"}}><Image source={require('../images/Onboarding_bottom.png')} style={{width:"100%"}}/></View>
    </LinearGradient>
    </View>
    );
};

export default Hurray;
