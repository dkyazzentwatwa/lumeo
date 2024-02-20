import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Text, useTheme } from "@ui-kitten/components";

function DataCard({ iconName, label, value }) {
  const theme = useTheme();
  return (
    <Card style={[styles.dataBox]}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <MaterialCommunityIcons
          name={iconName}
          size={30}
          color={theme["color-primary-500"]}
          style={{ marginBottom: 4 }}
        />
        <Text category="label" style={styles.dataText}>
          {label}
        </Text>
        <Text category="label" style={styles.dataText}>
          {value}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  dataBox: {
    borderRadius: 30,
    marginBottom: 20,
    marginRight: 10,
    width: 110,
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  dataText: {
    marginTop: 3,
  },
});

export default DataCard;
