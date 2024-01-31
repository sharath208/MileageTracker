import React ,{useEffect,useState}from "react";
import { StyleSheet, View,ScrollView } from "react-native";
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
        <VictoryChart width={1000}domainPadding={60} >
          <VictoryAxis
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12]}
            tickFormat={months}
          />
          <VictoryAxis
            dependentAxis
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
const styles = StyleSheet.create({
  container: {
    borderRadius:8,
    backgroundColor: "white"
  }
});