import React, { useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Card,
  Text,
  Avatar,
  useTheme,
  Toggle,
  Layout,
  List
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//components
import SettingScreen from "./settingScreen";
import DeviceBox from "../component/devicescreen/DeviceBox";
import IconCard from "../component/homescreen/IconCard";
import ListItem from "../component/listItem";



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
  const [circleState, setCircleColor] = React.useState(
    theme["color-danger-500"]
  );

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    if (isChecked === true) {
      setStatus("On");
      setCircleColor(theme["color-success-500"]); // Update circleColor dynamically
    } else {
      setStatus("Off");
      setCircleColor(theme["color-danger-500"]); // Update circleColor dynamically
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
              <DeviceBox checked={checked} circleColor={circleState} icon="youtube-tv" devices="5" title="Living Room" status={status} description="Temp: 72°F" onCheckedChange={onCheckedChange} />
              <DeviceBox checked={checked} circleColor={circleState} icon="stove" devices="7" title="Kitchen" status={status} description="Temp: 72°F" onCheckedChange={onCheckedChange} />
              <DeviceBox checked={checked} circleColor={circleState} icon="bed" devices="3" title="Bedroom" status={status} description="Temp: 72°F" onCheckedChange={onCheckedChange} />
              <DeviceBox checked={checked} circleColor={circleState} icon="grill" devices="3" title="Backyard" status={status} description="Temp: 72°F" onCheckedChange={onCheckedChange} />
              <DeviceBox checked={checked} circleColor={circleState} icon="car" devices="3" title="Garage" status={status} description="Temp: 72°F" onCheckedChange={onCheckedChange} />
              <DeviceBox checked={checked} circleColor={circleState} icon="shower" devices="3" title="Bathroom" status={status} description="Temp: 72°F" onCheckedChange={onCheckedChange} />
              <DeviceBox checked={checked} circleColor={circleState} icon="car" devices="3" title="Garage" status={status} description="Temp: 72°F" onCheckedChange={onCheckedChange} />
              <DeviceBox checked={checked} circleColor={circleState} icon="shower" devices="3" title="Bathroom" status={status} description="Temp: 72°F" onCheckedChange={onCheckedChange} />
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
              <IconCard name="Bedroom" icon="bed" />
              <IconCard name="Bathroom" icon="shower" />
              <IconCard name="Kitchen" icon="stove" />
              <IconCard name="Backyard" icon="grill" />
              <IconCard name="Garage" icon="car" />
              <IconCard name="Family" icon="youtube-tv" />
            </ScrollView>

            <Text category="h4" style={{ marginTop: 10 }}>
              Optimize your rooms
            </Text>
            <Text appearance="hint" category="s2" style={[styles.hintText]}>
              Find out new ways to save on energy.
            </Text>
            <ListItem iconName="account" title="Create a Personalized Scene" subtitle="Easily design and save custom scenes." />
            <ListItem iconName="lightbulb-group" title="Optimize Energy Usage" subtitle="Conserve energy where it matters." />
            <ListItem iconName="security" title="Boost Your Security" subtitle="Security reccommendations." />
            <ListItem iconName="home-automation" title="Automate routine tasks." subtitle="Automations based on room functions." />
            <ListItem iconName="chart-bar-stacked" title="Get insights and reports." subtitle="Personalized reports on home." />
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
  hintText: {
    marginLeft: 5,
    marginTop: 5,
  },
});

export default RoomScreen;
