import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json';
import { StyleSheet, } from 'react-native';
import {
  ApplicationProvider, 
  useTheme,
} from "@ui-kitten/components";

import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'


//MAIN SCREENS
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/settingScreen';
import DeviceScreen from './screens/deviceScreen';
import RoomScreen from './screens/roomScreen';
import CameraScreen from './screens/cameraScreen';

//CourseScreens

//Lesson Swipe Screens

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); 


function MyTabs() {
  const theme = useTheme();
  
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor:theme['background-basic-color-2'], borderTopWidth:0 },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home-battery'
                : 'home-battery-outline';
            } 
            else if (route.name === 'Rooms'){
              iconName = focused
                ? 'bed-king'
                : 'bed-king-outline';
            }
            else if (route.name === 'Devices'){
              iconName = focused
                ? 'battery-charging-10'
                : 'battery-charging-100';
            }
            else if (route.name === 'Cameras'){
              iconName = focused
                ? 'camera-wireless'
                : 'camera-wireless-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused 
                ? 'cog' 
                : 'cog-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={theme['color-primary-500']} />;
          },
          tabBarActiveTintColor: theme['color-warning-600'],
          tabBarInactiveTintColor: theme['color-primary-500'],
          headerShown: false,
          headerStyle: {
            backgroundColor:theme['background-alternative-color-4'],
            shadowColor:'black'
          },
          
          })}
      >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          }} />
      <Tab.Screen name="Rooms" component={RoomScreen} options={{
          }}  />
      <Tab.Screen name="Devices" component={DeviceScreen} options={{
          }}  />
      <Tab.Screen name="Cameras" component={CameraScreen} options={{
          }}  />
      <Tab.Screen name="Settings" component={SettingScreen} options={{
          }}  />

    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
      <ApplicationProvider  {...eva} theme={{ ...eva.dark, ...theme}} >
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown:false, headerMode:'screen', headerStyle: {backgroundColor:'#D4D4D4', shadowColor:'black'},headerTintColor: theme['background-basic-color-1'],}}>
            <Stack.Screen name="Homee" component={MyTabs} />
          </Stack.Navigator>
      </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
