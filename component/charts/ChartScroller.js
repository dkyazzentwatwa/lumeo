import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import LineChartComponent from "./LineChart";
import BarChartComponent from "./BarChart";
import BezChartComponent from "./BezChart";
//Here's a functional component optimizing the ScrollView for larger amounts of users:
function ChartScroller({ users }) {

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 260 }}>
      <LineChartComponent />
      <BarChartComponent />
      <BezChartComponent />
    </ScrollView>
    );
}

const styles = StyleSheet.create({

  activityPic: {
    width: 90,
    height: 90,
    marginTop: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  taskText: {
    fontFamily: "System",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: 'System'
},


});

export default ChartScroller


