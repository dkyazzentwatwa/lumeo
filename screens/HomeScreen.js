import React, { useMemo } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
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
import { GestureHandlerRootView } from "react-native-gesture-handler";

//Components
import AppHeader from "../component/AppHeader";
import DataCard from "../component/homescreen/DataCard";
import WeatherCard from "../component/homescreen/WeatherCard";
import IconCard from "../component/homescreen/IconCard";
import WidgetToggle from "../component/homescreen/WidgetToggle";
import ChartScroller from "../component/charts/ChartScroller";

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
            <AppHeader
              title="My Home"
              avatarSource={require("../assets/user.png")}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity></TouchableOpacity>
              <View
                style={[
                  styles.rowFlex,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <DataCard
                  iconName="coolant-temperature"
                  label="Temp."
                  value="67F"
                />
                <DataCard iconName="water" label="Humidity" value="15%" />
                <DataCard iconName="power-plug" label="Power" value="2.3kwH" />
              </View>
              {/* weather card */}
              {/* Rooms */}
              <View
                style={[
                  styles.rowFlex,
                  { justifyContent: "space-between", alignContent: "center" },
                ]}
              >
                <Text category="h3">Rooms</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Rooms")}>
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ justifyContent: "flex-end", marginTop: 10 }}
                  />
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
              <View
                style={[
                  styles.rowFlex,
                  { justifyContent: "space-between", alignContent: "center" },
                ]}
              >
                <Text category="h3">Devices</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Devices")}
                >
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ justifyContent: "flex-end", marginTop: 10 }}
                  />
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
                <IconCard name="TVs" icon="youtube-tv" />
                <IconCard name="Audio" icon="cast-audio" />
                <IconCard name="Kitchen" icon="stove" />
                <IconCard name="Cars" icon="car" />
                <IconCard name="Security" icon="security" />
              </ScrollView>
              {/* cameras */}
              <View
                style={[
                  styles.rowFlex,
                  { justifyContent: "space-between", alignContent: "center" },
                ]}
              >
                <Text category="h3">Cameras</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Cameras")}
                >
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ justifyContent: "flex-end", marginTop: 10 }}
                  />
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
                <IconCard name="Bedroom" icon="bed" />
                <IconCard name="Kitchen" icon="stove" />
                <IconCard name="Garage" icon="car" />
                <IconCard name="Bath 1" icon="bathtub-outline" />
                <IconCard name="Bath 2" icon="shower" />
                <IconCard name="Backyard" icon="grill" />
              </ScrollView>
              <View
                style={[
                  styles.rowFlex,
                  { justifyContent: "space-between", alignContent: "center" },
                ]}
              >
                <Text category="h3"> Stats </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Cameras")}
                >
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ justifyContent: "flex-end", marginTop: 10 }}
                  />
                </TouchableOpacity>
              </View>

              <ChartScroller />

              <Text category="h3" style={{ marginTop: 20 }}>
                Widgets
              </Text>
              <Text appearance="hint" category="s2" style={[styles.hintText]}>
                Quickly toggle an entire area.
              </Text>
              <View style={{ alignItems: "center" }}>
                <WidgetToggle
                  iconName="lightbulb-on"
                  deviceText="5 Devices"
                  labelText="Office"
                  checked={checked}
                  onCheckedChange={onCheckedChange}
                  status={status}
                />
                <WidgetToggle
                  iconName="youtube-tv"
                  deviceText="2 Devices"
                  labelText="Game Room"
                  checked={checked}
                  onCheckedChange={onCheckedChange}
                  status={status}
                />
                <WidgetToggle
                  iconName="sofa"
                  deviceText="4 Devices"
                  labelText="Living Room"
                  checked={checked}
                  onCheckedChange={onCheckedChange}
                  status={status}
                />
                <WidgetToggle
                  iconName="car"
                  deviceText="5 Devices"
                  labelText="Garage"
                  checked={checked}
                  onCheckedChange={onCheckedChange}
                  status={status}
                />
                <Button style={styles.addButton}>Add Widget</Button>
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
    marginBottom: 10,
  },
  subHeaderText: {
    marginBottom: 10,
  },
  dataBox: {
    borderRadius: 30,
    marginBottom: 15,
    marginRight: 10,
    width: 150,
    height: 150,
  },
  scrollBox: {
    marginTop: 20,
  },
  taskText: {
    fontFamily: "System",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "System",
  },
  addButton: {
    borderRadius: 30,
    width: 120,
    height: 50,
    marginBottom: 15,
    marginTop: 15,
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
    width: "100%",
    height: 134,
  },

  badgeText: {
    fontFamily: "System",
    marginBottom: 5,
  },
  dataBox: {
    borderRadius: 30,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 20,
    width: 120,
    height: 110,
  },
  dataText: {
    marginTop: 3,
  },
  hintText: {
    marginTop: 5,
  },
  deviceWidget: {
    borderRadius: 30,
    marginBottom: 5,
    marginRight: 10,
    marginTop: 20,
    width: 300,
    height: 110,
  },
  weatherCard: {
    width: "100",
    height: 240,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
  featureCard: {
    width: "100%",
    height: 120,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
});

export default HomeScreen;
