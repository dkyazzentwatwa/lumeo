import React from "react";
import { View } from "react-native";
import { useTheme, Text } from "@ui-kitten/components";
import {
    LineChart,
  } from "react-native-chart-kit";

function LineChartComponent() {
    const theme = useTheme();
    return (
        <View style={[styles.container]}>
        <Text category="h6" style={{marginBottom: 10}}>Water Consumption</Text>
        <LineChart
          data={{
            labels: ["12AM", "3AM", "6AM", "12PM", "3PM", '6PM'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ]
              }
            ]
          }}
          width={380} // from react-native
          height={180}
          yAxisSuffix="gal"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "5",
              stroke: "#ffa726"
            }
          }}
          style={{borderRadius: 16}}
        />
      </View>   
    )
}

const styles = {
    container: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      marginRight: 10
    },
  }
  

export default LineChartComponent