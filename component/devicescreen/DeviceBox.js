import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Card,
  Text,
  Toggle,
} from "@ui-kitten/components";
import { useTheme } from "@ui-kitten/components";


function DeviceBox({ checked, circleColor, icon, devices, title, status, description, onCheckedChange }) {
  const theme = useTheme();
  return (
    <Card style={[styles.deviceBox]}>
      <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
        <Text
          category="p2"
          style={[styles.moneyText]}
        >
          { title }
        </Text>
        <MaterialCommunityIcons  name="circle" size={12} color={circleColor}/>
      </View>
      <MaterialCommunityIcons
        name={icon}
        size={44}
        color={theme["color-primary-500"]}
        style={[{ marginTop: 5 }]}
      />
      <Text category="h5" style={{ marginTop: 10 }}>
        {devices} Devices
      </Text>
      <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
        {description}
      </Text>
      <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
        Power: {status}
      </Text>
      {/* Toggle that is aligned to the left */}
      <Toggle
        style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
        checked={checked}
        onChange={onCheckedChange}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
    rowFlex: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    colFlex: {
      flex: 1,
      flexDirection: "column",
    },
    deviceBox: {
      borderRadius: 30,
      marginBottom: 10,
      marginRight: 10,
      marginTop: 20,
      width: "47%",
      height: 240,
      justifyContent: "center",
    },
    moneyText: {
      fontFamily: "System",
      fontWeight: "bold",
      marginBottom: 10,
      fontFamily: "System",
    },
  
  });
  

export default DeviceBox