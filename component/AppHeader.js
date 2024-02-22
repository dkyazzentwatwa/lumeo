import { theme } from "@eva-design/eva";
import React from "react";
import { View, StyleSheet,ScrollView, TouchableOpacity} from "react-native";
import {
  Card,
  Text,
  useTheme,
  Avatar
} from "@ui-kitten/components";
/**
 * Renders the AppHeader component with the given title and avatar source.
 *
 * @param {Object} title - The title of the header
 * @param {Object} avatarSource - The source of the avatar image
 * @return {JSX.Element} The rendered AppHeader component
 */

function AppHeader({ title, avatarSource }) {
  const theme = useTheme();
  return (
    <View
    style={[
      styles.rowFlex,
      { borderRadius: 20, alignItems: "center", marginBottom:10 },
    ]}
  >
    <Text category="h3" style={{ alignItems: "flex-start" }}>
      {title}
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
        <Avatar size="giant" source={avatarSource} />
      </TouchableOpacity>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
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
});

export default AppHeader
/*
<AppHeader title="My Home" avatarSource={require("../assets/user.png")} />
For a different title and avatar: 
<AppHeader title="Profile" avatarSource={{ uri: "https://example.com/avatar.jpg" }} />
*/