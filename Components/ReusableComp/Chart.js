import React ,{useEffect,useState}from "react";
import {Text, StyleSheet, View,ScrollView } from "react-native";
import { VictoryBar, VictoryChart,VictoryAxis, VictoryTheme,VictoryLine,VictoryScatter } from "victory-native";
import useStore from "../../Zustand";
import { useRealm } from "@realm/react";
export const Bar=(props)=>{
    const realm=useRealm();
    var AvgVal = Array(12).fill(0);
    const fuels=realm.objects('Fuel').filtered("vehicleId=$0",props.vid);
    fuels.forEach((fuel)=>{
      AvgVal[fuel.date.getMonth()]+=fuel.price
    })
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December",
    ];
    const formattedData = months.map((month, index) => {
        return {'month': month, 'y': AvgVal[index]};
    });
    return (
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <VictoryChart width={1000} domainPadding={20}>
          <VictoryAxis
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12]}
            tickFormat={months}
          />
          <VictoryAxis
            dependentAxis
            style={{
              axisLabel: { padding: 30 },
            }}        
            tickFormat={(tick)=>(`$${tick/1000}k`)}
          />
          <VictoryBar
            data={formattedData}
            x='month'
            y='y'
            style={{
              data: { fill: '#EB655F' },
            }}
          />
        </VictoryChart>
      </ScrollView>
    );
  }
export const Scatter = (props) => {
    const realm=useRealm();
    var totMielage = Array(12).fill(0);
    var odo = Array(12).fill(0);
    const fuels=realm.objects('Fuel').filtered("vehicleId=$0",props.vid);
    fuels.forEach((fuel)=>{
      totMielage[fuel.date.getMonth()]+=((fuel.fuelConsumed/(fuel.odoend+1-fuel.odostart)));
      odo[fuel.date.getMonth()]+=1;
    })
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December",
    ];
    const formattedData = months.map((month, index) => {
        return {'month': month, 'y':odo[index]===0?0:totMielage[index]/odo[index]};
    });
    return (
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <VictoryChart width={1000}domainPadding={60} >
          <VictoryAxis 
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12]}
            tickFormat={months}
          />
          <VictoryAxis 
            dependentAxis
            standalone={false}
          />
          <VictoryScatter data={formattedData} 
            style={{
              data: { fill: '#EB655F' },
            }}
          />
          <VictoryLine
            data={formattedData}
            style={{
              data: { stroke: '#EB655F' },
            }}
            interpolation="cardinal"
          />
        </VictoryChart>
      </ScrollView>
    );
  };
export const FuelInsights=(props)=>{
  const realm=useRealm();
  var AvgVal = 0,last=0;
  const fuels=realm.objects('Fuel').filtered("vehicleId=$0",props.vid);
  fuels.forEach((fuel)=>{
    AvgVal+=fuel.price
    last=fuel.fuelConsumed
  })
  return(
    <View style={{height:"10%",backgroundColor:"#F0F2F2",justifyContent:"center"}}>
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
        <View style={{backgroundColor:"white",justifyContent:"space-evenly"}}>
          <View style={{width:"90%"}}><Text>Avg Fuel Consumption</Text></View>
          <View style={{width:"90%"}}><Text>{(AvgVal/12).toFixed(2)} L</Text></View>
        </View>
        <View style={{backgroundColor:"white",justifyContent:"space-evenly"}}>
          <View style={{width:"90%"}}><Text>Last Fuel Consumption</Text></View>
          <View style={{width:"90%"}}><Text>{(last).toFixed(2)} L</Text></View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    borderRadius:30
  }
});