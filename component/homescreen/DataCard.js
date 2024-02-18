import React, { useRef, useMemouseState, useMemo } from "react";
import { View, StyleSheet,ScrollView, TouchableOpacity} from "react-native";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import {
  Card,
  Text,
  Layout,
  Button,
  useTheme,
  Toggle,
  Avatar
} from "@ui-kitten/components";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

function DataCard({ iconName, label, value}) {
  const theme = useTheme();
  return (
    <Card style={[styles.dataBox]}>
      <View style={{ alignItems: "center", alignContent: "center" }}>
        <MaterialCommunityIcons name={iconName} size={34} color={theme["color-primary-500"]} style={{ marginBottom: 4 }} />
        <Text category="label" style={styles.dataText}>
          {label}
        </Text>
        <Text category="h6" style={styles.dataText}>
          {value}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 15,
  },
  topBox: {
      borderRadius: 15,
      marginBottom: 10,
      width: "100%",
      height: 90,
    },
  rowFlex: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  rowFlex2: {
      flexDirection: "row",
    },
  colFlex: {
      flex: 1,
      flexDirection: "column",
      flexWrap: "wrap",
    },    
  lvlText: {
      fontFamily: "System",
      fontWeight: "bold",
      alignSelf: "center",
      justifyContent: "center",
  },
  headerText: {
      marginBottom:10,
  },
  subHeaderText:{
      marginBottom:10,
  },
  dataBox: {
      borderRadius: 30,
      marginBottom: 15,
      marginRight: 10,
      width: 150,
      height: 150,
  },
  scrollBox: {
      marginTop:20,
  },
  taskText: {
      fontFamily: "System",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
      fontFamily: 'System'
  },
  morebutton: {
      borderRadius: 30,
      width: 120,
      height: 50,
      marginBottom: 15,
      marginTop:15
  },
  donatePic: {
      width: 140,
      height: 140,
      borderRadius: 30,
      marginRight: 10,
  },
  donateText: {
      fontFamily: "System",
      marginBottom: 5,
  },
  badgeBox: {
      borderRadius: 20,
      marginBottom: 15,
      width: '100%',
      height: 134,
  },

  badgeText: {
      fontFamily: "System",
      marginBottom: 5,
},
dataBox: {
  borderRadius: 30,
  marginBottom: 10,
  marginRight:10,
  marginTop:20,
  width: 120,
  height: 110,
},
dataText:{
  marginTop:3
},
hintText:{
  marginLeft:5,
  marginTop: 5,
},
deviceWidget: {
  borderRadius: 30,
  marginBottom: 5,
  marginRight:10,
  marginTop:20,
  width: 300,
  height: 110,
},
weatherCard: {
  width: '100',
  height: 240,
  marginTop: 10,
  marginBottom: 10,
  borderRadius:30,
},
});


export default DataCard

/*
<DataCard iconName="coolant-temperature" label="Temp." value="67F" />

With additional styles and different data: 
<DataCard
  iconName="battery"
  label="Battery"
  value="85%"
  styles={{ backgroundColor: "#f2f2f2", padding: 20 }}
/>
*/
