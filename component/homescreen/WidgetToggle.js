import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, Text, useTheme } from '@ui-kitten/components';
import { Toggle } from '@ui-kitten/components';

function WidgetToggle({ iconName, deviceText, labelText, checked, onCheckedChange, status }) {
    const theme = useTheme();
  return (
    <Card style={[ styles.deviceWidget, {justifyContent:"center"}]}>
      <View style={styles.rowFlex}>
        <View style={styles.colFlex}>
          <MaterialCommunityIcons style={{marginBottom:4}} name={iconName} size={34} color={theme['color-primary-500']} />
          <Text>{deviceText}</Text>
          <Text category='label'>{labelText}</Text>
        </View>
        <Toggle
          style={{alignItems:"center" }}
          checked={checked}
          onChange={onCheckedChange}
        >
          {`Status: ${status}`}
        </Toggle>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
    rowFlex: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
            colFlex: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
      },    
      deviceWidget: {
        borderRadius: 30,
        marginBottom: 5,
        marginRight:10,
        marginTop:20,
        width: 300,
        height: 110,
      },
    

    });
    export default WidgetToggle;