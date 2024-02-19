import React from 'react';
import { Card, IconRegistry, Text } from '@ui-kitten/components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useTheme } from '@ui-kitten/components';

const IconCard = ( {name, icon, onPress} ) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Card
      onPress={onPress}
      style={[
        styles.dataBox,
        { justifyContent: "space-between", alignContent: "center" },
      ]}
    >
      <MaterialCommunityIcons
        name={icon}
        size={34}
        color={theme["color-primary-500"]}
        style={[{ textAlign: "center" }]}
      />
      <Text
        category="p2"
        style={[
          styles.taskText,
          { marginTop: 10 },
        ]}
      >
        {name}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
    taskText: {
        fontFamily: "System",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
  dataBox: {
    borderRadius: 30,
    marginBottom: 10,
    marginRight:10,
    marginTop:20,
    width: 120,
    height: 110,
  },
  });


export default IconCard;