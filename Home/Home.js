import React , {useState }from 'react';
import Refuel from './Refuelling';
import AddVehicle from './AddVehicle'
import { Button, View, TextInput,Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Home = () => {
  const [count,setCount]=useState(0);
  const [model,setModel]=useState(false);

  return (
    <View style={{flex:1,backgroundColor:"#D0EAEA",justifyContent:'space-between'}}>
      <View>
        <View style={{height:36}}></View>
        <View style={{height:28,flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity onPress={()=>setModel(true)}><Image source={require('../images/Large.png')}/></TouchableOpacity>
          <Image source={require('../images/Union.png')}></Image>
          <Text style={{width:10}}></Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'space-between'}}>
          <View style={{height:28}}></View>
          <View style={{width:324}}>
            <View>
              <Text style={{color:'#EB655F',fontFamily: "New Rubrik",fontSize: 22,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',
              }}>Hi Snack Muncher,</Text>
              <View style={{height:8}}></View>
              <Text style={{color:'#0B3C58',fontFamily: "New Rubrik",fontSize: 16,fontWeight: 400,lineHeight: 28,letterSpacing: 0,textAlign:'center',}}>Track your miles towards a prosperous financial journey!</Text>
            </View>
            { count===0?<AddVehicle/>:<View></View>}
          </View>
        </View>
      </View>
    </View>
  );
};
 
/* const Tab=createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused}) => {
      let iconName;
      if (route.name === 'Home')
        iconName =focused?require('../images/Bottom_tab/Home/filled.png'):require('../images/Bottom_tab/Home/unfilled.png');
      else if (route.name === 'Refuelling')
        iconName =focused?require('../images/Bottom_tab/Refuel/filled.png'):require('../images/Bottom_tab/Refuel/unfilled.png'); 
      else if(route.name === 'Performance')
        iconName =focused?require('../images/Bottom_tab/Performance/filled.png'):require('../images/Bottom_tab/Performance/unfilled.png');
      else 
        iconName =focused?require('../images/Bottom_tab/Vehicles/filled.png'):require('../images/Bottom_tab/Vehicles/unfilled.png');
      return <Image source={iconName} style={{ tintColor:"#0B3C58"}} />
    },
  })}>
      <Tab.Screen name="Home" component={Home} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
      <Tab.Screen name='Refuelling' component={Refuel} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
      <Tab.Screen name='Performance' component={Home} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
      <Tab.Screen name='Vehicles' component={Home} options={{tabBarActiveTintColor: '#58798C',}}></Tab.Screen>
  </Tab.Navigator>
); */
export default Home;
