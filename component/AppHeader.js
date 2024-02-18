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
    <Card appearance="filled" style={[styles.topBox, { borderColor: theme["color-primary-500"], justifyContent: "center" }]}>
      <View style={[styles.rowFlex, { borderRadius: 20, alignItems: "center" }]}>
        <Text category="h3" style={{ alignItems: "flex-start" }}>
          {title}
        </Text>
        <View style={[{ justifyContent: "flex-end", alignItems: "center", flex: 3 }, styles.rowFlex]}>
          <Avatar size="giant" source={avatarSource} />
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

export default AppHeader
/*
<AppHeader title="My Home" avatarSource={require("../assets/user.png")} />
For a different title and avatar: 
<AppHeader title="Profile" avatarSource={{ uri: "https://example.com/avatar.jpg" }} />
*/