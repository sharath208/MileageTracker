import React ,{useEffect,useState}from "react";
import { StyleSheet, View,ScrollView } from "react-native";
import { VictoryBar, VictoryChart,VictoryAxis, VictoryTheme } from "victory-native";
import useStore from "../../Zustand";
import { useRealm } from "@realm/react";
export default Chart=()=>{
    const realm=useRealm();
    var AvgVal = Array(12).fill(0);
    const fuels=realm.objects('Fuel')
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});