import React, { useMemo } from "react";
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
  Icon,
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

//Components
import AppHeader from "../component/AppHeader";
import DataCard from "../component/homescreen/DataCard";
import WeatherCard from "../component/homescreen/WeatherCard";
import IconCard from "../component/homescreen/IconCard";

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const theme = useTheme();
  const snapPoints = useMemo(() => ["90%", "90%"], []);
  const [status, setStatus] = React.useState("Off");
  const [checked, setChecked] = React.useState(false);
  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    if (isChecked == true) {
      setStatus("On");
    } else {
      setStatus("Off");
    }
  };
  /* callbacks */
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Layout style={[styles.container]}>
            <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
              <AppHeader title="My Home" avatarSource={require("../assets/user.png")} />
              <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
              <View style={[ styles.rowFlex, {alignItems:"center", justifyContent:"center"} ]}>
              <DataCard iconName="coolant-temperature" label="Temp." value="67F" />
              <DataCard iconName="water" label="Humidity" value="15%" />
              <DataCard iconName="power-plug" label="Power" value="2.3kwH" />
              </View>
        {/* weather card */}
      {/* Rooms */}
              <View style={[ styles.rowFlex, {justifyContent:"space-between", alignContent:"center"} ]}>
              <Text category="h3" >
                Rooms
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Rooms")}>
              <MaterialCommunityIcons name="arrow-right-circle" size={24} color={theme["color-primary-500"]} style={{justifyContent:"flex-end", marginTop:10}} />
              </TouchableOpacity>
              </View>
              <Text appearance="hint" category="s2" style={[styles.hintText]}>
                Quickly access a certain area.
              </Text>
              <ScrollView
                  style={{ height: 160, marginTop: 10 }}
                  horizontal={true}
                  pagingEnabled={false}
                  showsHorizontalScrollIndicator={false}
                >
                  <IconCard name="Bedroom" icon="bed" />
                  <IconCard name="Kitchen" icon="stove" />
                  <IconCard name="Garage" icon="car" />
                  <IconCard name="Living Room" icon="home" />
                  <IconCard name="Basement" icon="floor-lamp" />
                  <IconCard name="Bathroom" icon="shower" />
                  <IconCard name="Office" icon="office-building" />
                </ScrollView>
      {/* devices */}
                <View style={[ styles.rowFlex, {justifyContent:"space-between", alignContent:"center"} ]}>
              <Text category="h3" >
                Devices
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Devices")}>
              <MaterialCommunityIcons name="arrow-right-circle" size={24} color={theme["color-primary-500"]} style={{justifyContent:"flex-end", marginTop:10}} />
              </TouchableOpacity>
              </View>
              <Text appearance="hint" category="s2" style={[styles.hintText]}>
                Quickly access a certain device.
              </Text>

              <ScrollView
                  style={{ height: 160, marginTop: 10 }}
                  horizontal={true}
                  pagingEnabled={false}
                  showsHorizontalScrollIndicator={false}
                >
              <IconCard name="Lights" icon="lightbulb-on" />
              <Card
                onPress={() => navigation.navigate("Donate")}
                style={[
                  styles.dataBox,
                  { justifyContent: "center", alignContent: "center" },
                ]}
              >
                <MaterialCommunityIcons
                  name="youtube-tv"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={{ textAlign: "center" }}
                />

                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  TVs
                </Text>
              </Card>
              <Card
                onPress={() => navigation.navigate("Shop")}
                style={[
                  styles.dataBox,
                  { justifyContent: "center", alignContent: "center" },
                ]}
              >
                <MaterialCommunityIcons
                  name="cast-audio-variant"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={{ textAlign: "center" }}
                />
                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  Audio
                </Text>
              </Card>
              <Card
                onPress={() => navigation.navigate("Resources")}
                style={[
                  styles.dataBox,
                  { justifyContent: "center", alignContent: "center" },
                ]}
              >
                <FontAwesome5
                  name="tools"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={{ textAlign: "center" }}
                />
                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  Kitchen
                </Text>
              </Card>
              <Card
                style={[
                  styles.dataBox,
                  { justifyContent: "center", alignContent: "center" },
                ]}
              >
                <MaterialCommunityIcons
                  name="stove"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={{ textAlign: "center" }}
                />
                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  Social
                </Text>
              </Card>
              <Card
                style={[
                  styles.dataBox,
                  { justifyContent: "center", alignContent: "center" },
                ]}
              >
                <MaterialCommunityIcons
                  name="security"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={{ textAlign: "center" }}
                />
                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  Security
                </Text>
              </Card>

                </ScrollView>
        {/* cameras */}
            <View style={[ styles.rowFlex, {justifyContent:"space-between", alignContent:"center"} ]}>
              <Text category="h3" >
                Cameras
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Cameras")}>
              <MaterialCommunityIcons name="arrow-right-circle" size={24} color={theme["color-primary-500"]} style={{justifyContent:"flex-end", marginTop:10}} />
              </TouchableOpacity>
              </View>
              <Text appearance="hint" category="s2" style={[styles.hintText]}>
                Quickly access a specific camera.
              </Text>

              <ScrollView
                  style={{ height: 160, marginTop: 10 }}
                  horizontal={true}
                  pagingEnabled={false}
                  showsHorizontalScrollIndicator={false}
                >
                  <Card
                    onPress={() => navigation.navigate("Learn")}
                    style={[
                      styles.dataBox,
                      { justifyContent: "center" },
                      { alignContent: "center" }
                      ,
                    ]}
                  >
                    <FontAwesome
                      name="book"
                      size={34}
                      color={theme["color-primary-500"]}
                      style={[{ textAlign: "center" }]}
                    />
                    <Text
                      category="p2"
                      style={[
                        styles.taskText,
                        { marginTop:10 },
                      ]}
                    >
                      Bedroom
                    </Text>

                  </Card>
                  <Card
                    onPress={() => navigation.navigate("Donate")}
                    style={[
                      styles.dataBox,
                      { justifyContent: "center", alignContent: "center" },
                    ]}
                  >
                    <FontAwesome5
                      name="donate"
                      size={34}
                      color={theme["color-primary-500"]}
                      style={{ textAlign: "center" }}
                    />

                    <Text
                      category="p2"
                      style={[
                        styles.taskText,
                        { marginTop:10 },
                      ]}
                    >
                      Kitchen
                    </Text>
                  </Card>
                  <Card
                    onPress={() => navigation.navigate("Shop")}
                    style={[
                      styles.dataBox,
                      { justifyContent: "center", alignContent: "center" },
                    ]}
                  >
                    <Entypo
                      name="shopping-cart"
                      size={34}
                      color={theme["color-primary-500"]}
                      style={{ textAlign: "center" }}
                    />
                    <Text
                      category="p2"
                      style={[
                        styles.taskText,
                        { marginTop:10 },
                      ]}
                    >
                      Garage
                    </Text>

                  </Card>
                  <Card
                    onPress={() => navigation.navigate("Resources")}
                    style={[
                      styles.dataBox,
                      { justifyContent: "center", alignContent: "center" },
                    ]}
                  >
                    <FontAwesome5
                      name="tools"
                      size={34}
                      color={theme["color-primary-500"]}
                      style={{ textAlign: "center" }}
                    />
                    <Text
                      category="p2"
                      style={[
                        styles.taskText,
                        { marginTop:10 },
                      ]}
                    >
                      Bath 1
                    </Text>
                  </Card>
                  <Card
                    style={[
                      styles.dataBox,
                      { justifyContent: "center", alignContent: "center" },
                    ]}
                  >
                    <FontAwesome5
                      name="user-friends"
                      size={34}
                      color={theme["color-primary-500"]}
                      style={{ textAlign: "center" }}
                    />
                    <Text
                      category="p2"
                      style={[
                        styles.taskText,
                        { marginTop:10 },
                      ]}
                    >
                      Bath 2
                    </Text>
                  </Card>
                  <Card
                    style={[
                      styles.dataBox,
                      { justifyContent: "center", alignContent: "center" },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="account-group"
                      size={34}
                      color={theme["color-primary-500"]}
                      style={{ textAlign: "center" }}
                    />
                    <Text
                      category="p2"
                      style={[
                        styles.taskText,
                        { marginTop:10 },
                      ]}
                    >
                      Living Room
                    </Text>

                  </Card>
                </ScrollView>


              <Text category="h3" style={{marginTop:10}}>
                Widgets
              </Text>
              <Text appearance="hint" category="s2" style={[styles.hintText]}>
                Quickly toggle an entire area.
              </Text>
              <View style={{alignItems:'center'}}>
              <Card style={[ styles.deviceWidget, {justifyContent:"center"}]}>
              <View style={styles.rowFlex}>
                  <View style={styles.colFlex}>
              <MaterialCommunityIcons style={{marginBottom:4}} name="bed" size={34} color={theme['color-primary-500']} />
              <Text>5 Devices</Text>
              <Text category='label'>Bedroom</Text>
              </View>
              <Toggle
                    style={{alignItems:"center" }}
                    checked={checked}
                    onChange={onCheckedChange}
                  >
                    {`Status: ${status}`}
                  </Toggle>
                  </View>
              </Card>

              <Card style={[ styles.deviceWidget, {justifyContent:"center"}]}>
              <View style={styles.rowFlex}>
                  <View style={styles.colFlex}>
              <MaterialCommunityIcons style={{marginBottom:4}} name="chef-hat" size={34} color={theme['color-primary-500']} />
              <Text>8 Devices</Text>
              <Text category='label'>Kitchen</Text>
              </View>
              <Toggle
                    style={{alignItems:"center" }}
                    checked={checked}
                    onChange={onCheckedChange}
                  >
                    {`Status: ${status}`}
                  </Toggle>
                  </View>
              </Card>
              <Card style={[ styles.deviceWidget, {justifyContent:"center"}]}>
              <View style={styles.rowFlex}>
                  <View style={styles.colFlex}>
              <MaterialCommunityIcons style={{marginBottom:4}} name="car" size={34} color={theme['color-primary-500']} />
              <Text>4 Devices</Text>
              <Text category='label'>Garage</Text>
              </View>
              <Toggle
                    style={{alignItems:"center" }}
                    checked={checked}
                    onChange={onCheckedChange}
                  >
                    {`Status: ${status}`}
                  </Toggle>
                  </View>
              </Card>
              <Button style={styles.morebutton}>
                Add Widget
              </Button>
              </View>
              </ScrollView>
            </SafeAreaView>
        </Layout>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
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
  
export default HomeScreen