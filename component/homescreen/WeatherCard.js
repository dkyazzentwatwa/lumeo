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

function WeatherCard({
  avatarSource,
  location,
  temperature,
  humidity,
  wind,
  rain,
  onPressRefresh,
  onPressSearch,

}) {
  const theme = useTheme();
  return (
    <Card style={[styles.weatherCard]}>
          <View style={[styles.colFlex, { justifyContent: 'center', marginTop: 5 }]}>
            <View style={styles.rowFlex}>
              <MaterialCommunityIcons
                name="magnify"
                size={24}
                color={theme['color-primary-500']}
                onPress={onPressSearch}
                style={{ alignItems: "flex-start", }}
              />
            </View>
            <View style={[styles.rowFlex, {justifyContent:'center'} ]}>
              <Avatar size="large" source={avatarSource}                         style={[ {height:65, width:65} ]} />
            </View>
            <View style={[styles.rowFlex, {justifyContent:'flex-end'}]}>
              <MaterialCommunityIcons
                name="refresh"
                size={24}
                color={theme['color-primary-500']}
                onPress={onPressRefresh}
              />
            </View>
            <View style={{flexDirection:'column'}}>
              <View style={[ {justifyContent:'center', marginTop:70}, styles.rowFlex]}>
              <Text category="h4" color="white">
                {temperature}°F
              </Text>
            </View>
            <View style={[ styles.rowFlex, {marginTop:40, justifyContent:'center'}]}>
              <Text appearance="hint" category="s2">
                {location}
              </Text>
            </View>
            <View style={[ styles.rowFlex, {marginTop:25, justifyContent:'center'}]}>
              <Text appearance="hint" category="s2">
                Humidity: {humidity}%
              </Text>
            </View>
            <View style={[ styles.rowFlex, {marginTop:25, justifyContent:'center'}]}>
              <Text appearance="hint" category="s2">
                Wind: {wind}mph
              </Text>
            </View>
            <View style={[ styles.rowFlex, {marginTop:25, justifyContent:'center'}]}>
              <Text appearance="hint" category="s2">
                Rain: {rain}%
              </Text>
            </View>
            </View>
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

export default WeatherCard

/*
<WeatherCard
  avatarSource={require("../assets/sun.png")}
  location="Los Angeles, California"
  temperature="72"
  humidity="70"
  wind="5"
  rain="0"
  onPressRefresh={() => handleRefreshWeather()}
  onPressSearch={() => handleSearchLocation()}
  styles={{ backgroundColor: "#333", padding: 20 }}
/>
*/