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



function DeviceScreen({ navigation }) {
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
              Your Devices
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
              <Text category="s2" appearance="hint">Connect your devices here.</Text>
            </View>
            <View style={[styles.rowFlex, { justifyContent: "center" }]}>
              <Card style={[styles.deviceBox]}>
                <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Lightbulbs
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-success-500"]} />
                </View>
                <MaterialCommunityIcons
                  name="lightbulb"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  5 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Connected
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
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Climate Control
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-danger-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="sun-thermometer"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  7 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Connected
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
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Security
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-success-500"]} />
                </View>
                <MaterialCommunityIcons
                  name="security"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  3 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Connected
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
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Kitchen Appliances
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
                  8 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Connected
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
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Laundry Appliances
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-success-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="tumble-dryer"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  3 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Connected
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
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Cleaning Devices
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-success-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="robot-vacuum"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  5 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Connected
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
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Solar Power
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-warning-500"]} />
                </View>

                <MaterialCommunityIcons
                  name="solar-panel"
                  size={44}
                  color={theme["color-primary-500"]}
                  style={[{ marginTop: 5 }]}
                />
                <Text category="h4" style={{ marginTop: 20 }}>
                  5 Devices
                </Text>
                <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
                  Connected
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
              <Card style={[styles.deviceBox]}>
              <View style={[styles.rowFlex, { justifyContent: "space-between", alignItems: "center"}]}>
                <Text
                  category="p2"
                  style={[styles.moneyText]}
                >
                  Entertainment
                </Text>
                <MaterialCommunityIcons  name="circle" size={12} color={theme["color-danger-500"]} />
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
                  Connected
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
                  name="lightbulb"
                  size={34}
                  color={theme["color-primary-500"]}
                  style={[{ textAlign: "center" }]}
                />
                <Text
                  category="p2"
                  style={[styles.taskText, { marginTop: 10 }]}
                >
                  Lightbulbs
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

            <Text category="h4" style={{ marginTop: 10 }}>
              Optimize your devices
            </Text>
            <Text appearance="hint" category="s2" style={[styles.hintText]}>
              Get the most out of your devices
            </Text>
            <Card style={[styles.listCard]}>
              <View style={{ alignItems: "flex-start" }}>
                <View style={[styles.rowFlex, { alignItems: "center" }]}>
                  <MaterialCommunityIcons
                    name="calendar"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Schedule your devices
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Optimal schedules based on usage.
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
                    name="format-list-group"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Group & Control Together
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Custom groups of devices.
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
                    name="arrow-decision-auto"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Automate Routines
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Routines triggered by events.
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
                    name="filmstrip"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Get Smarter with Scenes
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Control multiple devices in rooms.
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
                    name="lightning-bolt"
                    size={34}
                    color={theme["color-primary-500"]}
                  />
                  <View style={styles.colFlex}>
                    <Text
                      category="h6"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Boost Efficiency
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ marginLeft: 15, marginTop: 5 }}
                    >
                      Tips and suggestions.
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

export default DeviceScreen;
