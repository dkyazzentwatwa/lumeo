import React, { useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,

} from "@expo/vector-icons";
import {
  Card,
  Text,
  Avatar,
  Button,
  useTheme,
  Toggle,
  Layout
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "./settingScreen";



function RoomScreen({ navigation }) {
  const theme = useTheme();
  const snapPoints = useMemo(() => ["90%", "90%"], []);

  /* screen refs */
  const settingSheetRef = useRef(null);

  /* screen modals */
  const settingSheetModal = () => {
    settingSheetRef.current.present();
  };
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={2}
        appearsOnIndex={-1}
        opacity={0.7}
      />
    ),
    []
  );

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
          <View
            style={[
              styles.rowFlex,
              { borderRadius: 20, alignItems: "center", marginTop: 60 },
            ]}
          >
            <Text category="h3" style={{ alignItems: "flex-start" }}>
              Your Rooms
            </Text>
            <View
              style={[
                {
                  justifyContent: "flex-end",
                  flex: 3,
                },
                styles.rowFlex,
              ]}
            >
              <TouchableOpacity onPress={() => settingSheetModal()}>
                <Avatar size="giant" source={require("../assets/user.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={[styles.colFlex]}>
              <Text category="s2" appearance="hint">Control your rooms here.</Text>
            </View>
            <View style={[styles.rowFlex, { justifyContent: "center" }]}>
              <Card style={[styles.deviceBox]}>
                <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Living Room
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-success-500"]} />
                </View>
                <MaterialCommunityIcons
                  name="youtube-tv"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  5 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Temp: 72°F
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Lights: {status}
                </Text>
                {/* Toggle that is aligned to the left */}
                <Toggle
                  style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
                  checked={checked}
                  onChange={onCheckedChange}
                />
              </Card>
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Kitchen
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-danger-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="stove"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  7 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Temp: 72°F
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Lights: {status}
                </Text>
                {/* Toggle that is aligned to the left */}
                <Toggle
                  style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
                  checked={checked}
                  onChange={onCheckedChange}
                />
              </Card>
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Backyard
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-success-500"]} />
                </View>
                <MaterialCommunityIcons
                  name="grill"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  3 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Temp: 72°F
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Lights: {status}
                </Text>
                {/* Toggle that is aligned to the left */}
                <Toggle
                  style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
                  checked={checked}
                  onChange={onCheckedChange}
                />
              </Card>
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Matt's Room
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-danger-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="bed"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  8 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Temp: 72°F
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Lights: {status}
                </Text>
                {/* Toggle that is aligned to the left */}
                <Toggle
                  style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
                  checked={checked}
                  onChange={onCheckedChange}
                />

              </Card>
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Sally's Room
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-success-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="bed"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  3 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Temp: 72°F
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Lights: {status}
                </Text>
                {/* Toggle that is aligned to the left */}
                <Toggle
                  style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
                  checked={checked}
                  onChange={onCheckedChange}
                />

              </Card>
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Master Bedroom
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-success-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="bed-queen"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  5 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Temp: 72°F
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Lights: {status}
                </Text>
                {/* Toggle that is aligned to the left */}
                <Toggle
                  style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
                  checked={checked}
                  onChange={onCheckedChange}
                />
              </Card>
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Garage
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-warning-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="car"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  5 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Temp: 72°F
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Lights: {status}
                </Text>
                {/* Toggle that is aligned to the left */}
                <Toggle
                  style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
                  checked={checked}
                  onChange={onCheckedChange}
                />

              </Card>
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Bathroom
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-danger-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="shower"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  5 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Temp: 72°F
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Lights: {status}
                </Text>
                {/* Toggle that is aligned to the left */}
                <Toggle
                  style={{ marginTop: 10 , justifyContent: "flex-start", width:40}}
                  checked={checked}
                  onChange={onCheckedChange}
                />

              </Card>
            </View>
            <Text category="h3" style={{ marginTop: 10 }}>
              Favorites
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
                  { alignContent: "center" },
                ]}
              >
                <MaterialCommunityIcons
                  name="bed"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={[{ textAlign: "center" }]}
                />
                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
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
                <MaterialCommunityIcons
                  name="shower"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={{ textAlign: "center" }}
                />

                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  Bathroom
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
                  name="stove"
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
                onPress={() => navigation.navigate("Resources")}
                style={[
                  styles.dataBox,
                  { justifyContent: "center", alignContent: "center" },
                ]}
              >
                <MaterialCommunityIcons
                  name="grill"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={{ textAlign: "center" }}
                />
                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  Backyard
                </Text>
              </Card>
              <Card
                style={[
                  styles.dataBox,
                  { justifyContent: "center", alignContent: "center" },
                ]}
              >
                <MaterialCommunityIcons
                  name="car"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={{ textAlign: "center" }}
                />
                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  Garage
                </Text>
              </Card>
              <Card
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
                  Family
                </Text>
              </Card>
            </ScrollView>

            <Text category="h4" style={{ marginTop: 10 }}>
              Optimize your rooms
            </Text>
            <Text appearance="hint" category="s2" style={[styles.hintText]}>
              Find out new ways to save on energy.
            </Text>
            <Card style={[styles.listCard]}>
              <View style={{ alignItems: "flex-start" }}>
                <View style={[styles.rowFlex, { alignItems: "center" }]}>
                  <MaterialCommunityIcons
                    name="account"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Create a Personalized Scene
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Easily design and save custom scenes.
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ alignItems: "flex-end" }}
                  />
                </View>
              </View>
            </Card>
            <Card style={[styles.listCard]}>
              <View style={{ alignItems: "flex-start" }}>
                <View style={[styles.rowFlex, { alignItems: "center" }]}>
                  <MaterialCommunityIcons
                    name="lightbulb-group"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Optimize Energy Usage
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Conserve energy where it matters.
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ alignItems: "flex-end" }}
                  />
                </View>
              </View>
            </Card>
            <Card style={[styles.listCard]}>
              <View style={{ alignItems: "flex-start" }}>
                <View style={[styles.rowFlex, { alignItems: "center" }]}>
                  <MaterialCommunityIcons
                    name="security"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Boost Your Security
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Security reccommendations.
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ alignItems: "flex-end" }}
                  />
                </View>
              </View>
            </Card>
            <Card style={[styles.listCard]}>
              <View style={{ alignItems: "flex-start" }}>
                <View style={[styles.rowFlex, { alignItems: "center" }]}>
                  <MaterialCommunityIcons
                    name="home-automation"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Automate routine tasks.
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Automations based on room functions,
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ alignItems: "flex-end" }}
                  />
                </View>
              </View>
            </Card>
            <Card style={[styles.listCard]}>
              <View style={{ alignItems: "flex-start" }}>
                <View style={[styles.rowFlex, { alignItems: "center" }]}>
                  <MaterialCommunityIcons
                    name="chart-bar-stacked"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Get insights and reports.
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Personalized reports on home.
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="arrow-right-circle"
                    size={24}
                    color={theme["color-primary-500"]}
                    style={{ alignItems: "flex-end" }}
                  />
                </View>
              </View>
            </Card>

            {/* Bottom SHEET Modals */}
          </ScrollView>
        </Layout>
        <BottomSheetModal
          ref={settingSheetRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          handleStyle={{ backgroundColor: theme["background-basic-color-1"] }}
          handleIndicatorStyle={{
            backgroundColor: theme["color-primary-500"],
            width: 100,
            height: 5,
            marginTop: 10,
          }}
        >
          <View style={[{ flex: 1 }]}>
            <SettingScreen />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  rowFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colFlex: {
    flex: 1,
    flexDirection: "column",
  },
  taskText: {
    fontFamily: "System",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "System",
  },

  dataBox: {
    borderRadius: 30,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 20,
    width: 120,
    height: 120,
  },
  deviceBox: {
    borderRadius: 30,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 20,
    width: "45%",
    height: 250,
    justifyContent: "center",
  },
  moneyText: {
    fontFamily: "System",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "System",
  },

  hintText: {
    marginLeft: 5,
    marginTop: 5,
  },
  balanceBox: {
    width: "100%",
    height: 190,
    borderRadius: 20,
    marginTop: 30,
  },
  cashButton: {
    borderRadius: 30,
    width: 120,
    height: 50,
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  listCard: {
    marginTop: 15,
  },
  avatar: {
    height: 70,
  },
});

export default RoomScreen;
