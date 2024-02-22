import React, { useRef, useMemo, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Text, useTheme, Toggle, Layout, Icon, List } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import SettingScreen from "./settingScreen";
import AppHeader from "../component/AppHeader";
import CameraDeviceBox from "../component/camera/CameraDeviceBox";
import IconCard from "../component/homescreen/IconCard";
import ListItem from "../component/listItem";


function CameraScreen({ navigation }) {
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
    if (isChecked == true) {
      setStatus("On");
    } else {
      setStatus("Off");
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Layout style={[styles.container]}>
          <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
            <AppHeader
              title="Your Cameras"
              avatarSource={require("../assets/user.png")}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[styles.colFlex]}>
                <Text category="s2" appearance="hint">
                  Connect your devices here.
                </Text>
              </View>
              <View style={[styles.rowFlex, { justifyContent: "center" }]}>
                <CameraDeviceBox icon="sofa" title="Living Room" devices="1" activeTime="10" status={status} checked={checked} onCheckedChange={onCheckedChange}
                circleColor={circleState} alertNumber="2"/>
                <CameraDeviceBox icon="sun-thermometer" title="Sally's Room" devices="1" activeTime="20" status={status} checked={checked} onCheckedChange={onCheckedChange} alertNumber="3" />
                <CameraDeviceBox icon="security" title="Garage" devices="1" activeTime="30" status={status} checked={checked} onCheckedChange={onCheckedChange} circleColor={circleState} alertNumber="0"/>
                <CameraDeviceBox icon="stove" title="Kitchen" devices="1" activeTime="40" status={status} checked={checked} onCheckedChange={onCheckedChange} circleColor={circleState} alertNumber="0"/>
                <CameraDeviceBox icon="tumble-dryer" title="Laundry" devices="1" activeTime="50" status={status} checked={checked} onCheckedChange={onCheckedChange} circleColor={circleState} alertNumber="0"/>
                <CameraDeviceBox icon="robot-vacuum" title="Backyard" devices="1" activeTime="60" status={status} checked={checked} onCheckedChange={onCheckedChange} circleColor={circleState} alertNumber="0"/>
                <CameraDeviceBox icon="solar-panel" title="Front Yard" devices="1" activeTime="70" status={status} checked={checked} onCheckedChange={onCheckedChange} circleColor={circleState} alertNumber="0"/>
                <CameraDeviceBox icon="youtube-tv" title="Bedroom" devices="1" activeTime="80" status={status} checked={checked} onCheckedChange={onCheckedChange} circleColor={circleState} alertNumber="0"/>
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
                <IconCard name="Garage" icon="car" />
                <IconCard name="Bedrooms" icon="bed" />
                <IconCard name="Backyard" icon="grill" />
                <IconCard name="Kitchen" icon="stove" />
                <IconCard name="Bath 1" icon="shower" />
                <IconCard name="Office" icon="laptop" />
              </ScrollView>

              <Text category="h4" style={{ marginTop: 10 }}>
                Optimize your cameras
              </Text>
              <Text appearance="hint" category="s2" style={[styles.hintText]}>
                Get the most out of your security.
              </Text>
              <ListItem iconName="calendar" title="Adjust Motion Zones" subtitle="Define areas within the camera's view." />
              <ListItem iconName="format-list-group" title="Schedule Recording Periods" subtitle="Automated recording schedules." />
              <ListItem iconName="arrow-decision-auto" title="Enable Night Vision" subtitle="Adjust settings for better vision." />
              <ListItem iconName="filmstrip" title="Connect to Smart Lights" subtitle="Automatic lights w/ motion detection." />
              <ListItem iconName="lightning-bolt" title="Review & Share Clips" subtitle="Review saved & edit saved clips." />
              {/* Bottom SHEET Modals */}
            </ScrollView>
          </SafeAreaView>
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
    height: 280,
    justifyContent: "center",
  },
  moneyText: {
    fontFamily: "System",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "System",
  },

  hintText: {
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

export default CameraScreen;
