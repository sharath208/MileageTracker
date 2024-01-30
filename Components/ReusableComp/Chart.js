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
      <ScrollView horizontal={true} contentContainerStyle={{ width: 800, padding: 16 }}>
        <VictoryChart width={850}domainPadding={60} theme={VictoryTheme.material}>
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
      <ScrollView horizontal={true} contentContainerStyle={{ width: 800, padding: 16 }}>
        <VictoryChart width={850}domainPadding={60} theme={VictoryTheme.grayscale}>
          <VictoryAxis crossAxis
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12]}
            tickFormat={months}
          />
          <VictoryAxis crossAxis
            dependentAxis
            standalone={false}
          />
          <VictoryScatter data={formattedData} />
          <VictoryLine
            data={formattedData}
            style={{
              data: { stroke: 'blue' },
            }}
            interpolation="cardinal"
          />
        </VictoryChart>
      </ScrollView>
    );
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});