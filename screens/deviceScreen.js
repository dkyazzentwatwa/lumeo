import React, { useRef, useMemo, useCallback } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {
  Text,
  Avatar,
  useTheme,
  Layout,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
//components
import SettingScreen from "./settingScreen";
import DeviceBox from "../component/devicescreen/DeviceBox";
import IconCard from "../component/homescreen/IconCard";
import ListItem from "../component/listItem";

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
              <Text category="s2" appearance="hint">
                Connect your devices here.
              </Text>
            </View>
            <View style={[styles.rowFlex, { justifyContent: "center" }]}>
              <DeviceBox
                title="Lightbulbs"
                devices="5"
                description="Connected"
                onCheckedChange={onCheckedChange}
                status={status}
                checked={checked}
                icon="lightbulb"
                circleColor={circleState}
              />
              <DeviceBox
                title="Climate"
                devices="5"
                description="Connected"
                onCheckedChange={onCheckedChange}
                status={status}
                checked={checked}
                icon="thermometer-lines"
                circleColor={circleState}
              />
              <DeviceBox
                title="Security"
                devices="3"
                description="Connected"
                onCheckedChange={onCheckedChange}
                status={status}
                checked={checked}
                icon="security"
                circleColor={circleState}
              />
              <DeviceBox
                title="Kitchen"
                devices="8"
                description="Connected"
                onCheckedChange={onCheckedChange}
                status={status}
                checked={checked}
                icon="stove"
                circleColor={circleState}
              />
              <DeviceBox
                title="Laundry"
                devices="3"
                description="Connected"
                onCheckedChange={onCheckedChange}
                status={status}
                checked={checked}
                icon="tumble-dryer"
                circleColor={circleState}
              />
              <DeviceBox
                title="Cleaning"
                devices="5"
                description="Connected"
                onCheckedChange={onCheckedChange}
                status={status}
                checked={checked}
                icon="silverware-clean"
                circleColor={circleState}
              />
              <DeviceBox
                title="Solar Devices"
                devices="5"
                description="Connected"
                onCheckedChange={onCheckedChange}
                status={status}
                checked={checked}
                icon="solar-panel"
                circleColor={circleState}
              />
              <DeviceBox
                title="Entertainment"
                devices="5"
                description="Connected"
                onCheckedChange={onCheckedChange}
                status={status}
                checked={checked}
                icon="youtube-tv"
                circleColor={circleState}
              />
            </View>

            <Text category="h3" style={{ marginTop: 10 }}>
              Favorites
            </Text>
            <ScrollView
              style={{ height: 160 }}
              horizontal={true}
              pagingEnabled={false}
              showsHorizontalScrollIndicator={false}
            >
              <IconCard name="Lightbulbs" icon="lightbulb" />
              <IconCard name="TVs" icon="youtube-tv" />
              <IconCard name="Audio" icon="cast-audio-variant" />
              <IconCard name="Kitchen" icon="stove" />
              <IconCard name="Social" icon="account-group" />
              <IconCard name="Security" icon="security" />
            </ScrollView>

            <Text category="h4" style={{ marginTop: 10 }}>
              Optimize your devices
            </Text>
            <Text appearance="hint" category="s2" style={[styles.hintText]}>
              Get the most out of your devices
            </Text>
            <ListItem
              iconName="calendar"
              title="Schedule your devices"
              subtitle="Optimal schedules based on usage."
            />
            <ListItem
              iconName="format-list-group"
              title="Group & Control Together"
              subtitle="Custom groups of devices."
            />
            <ListItem
              iconName="arrow-decision-auto"
              title="Automate Routines"
              subtitle="Routines triggered by events."
            />
            <ListItem
              iconName="filmstrip"
              title="Get Smarter with Scenes"
              subtitle="Control multiple devices in rooms."
            />
            <ListItem
              iconName="lightning-bolt"
              title="Boost Efficiency"
              subtitle="Tips and suggestions."
            />
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
    marginTop: 5,
  },
  listCard: {
    marginTop: 15,
  },
});

export default DeviceScreen;
