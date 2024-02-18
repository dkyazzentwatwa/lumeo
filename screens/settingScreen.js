import React from "react";
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



function SettingScreen({ navigation }) {
  const theme = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [status, setStatus] = React.useState("Off");
  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    if (isChecked == true) {
      setStatus("On");
    } else {
      setStatus("Off");
    }
  };
  const onCheckedChange2 = (isChecked2) => {
    setChecked2(isChecked2);
    if (isChecked2 == true) {
      setStatus("On");
    } else {
      setStatus("Off");
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Layout style={[styles.container]}>
        <View
                  style={[
                    styles.rowFlex,
                    { borderRadius: 20, alignItems:"center",marginTop:60,marginBottom:10 },
                  ]}
                >
                  <Text
                    category="h3"
                    style={{alignItems:"flex-start"}}
                  >
                    Settings
                  </Text>
                  <View
                    style={[{
                      justifyContent: "flex-end",
                      flex: 3,
                    }, styles.rowFlex]}
                  >
                  </View>
                </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
              <Card style={styles.cardPic}>
                <View style={[styles.colFlex, {marginTop:10} ]}>
                  <View style={[styles.rowFlex]}>
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color={theme["color-primary-500"]} style={{ alignItems: "flex-start", }}  />
                      </View>
                      <View style={[styles.rowFlex, {justifyContent:'center'} ]}>
                        <Avatar
                        size="large"
                        source={require("../assets/user3.png")}
                        style={[ {height:80, width:80} ]}
                      />
                      </View>
                      <View style={[styles.rowFlex, {justifyContent:'flex-end'}]}>
                      <MaterialCommunityIcons name="share-variant" size={24} color={theme["color-primary-500"]} style={{ alignItems: "flex-end" }}  />
                      </View>
                      <View style={styles.colFlex}>
                        <View style={[ {justifyContent:'center', marginTop:85}, styles.rowFlex]}>
                          <Text category="h4" color="white" >
                            Tim Cook
                          </Text>
                        </View>
                        <View style={[ {justifyContent:'center', marginTop:35}, styles.rowFlex]}>
                          <Text appearance="hint" category="h6" color="white" >
                            $tcook
                          </Text>
                        </View>
                        <View style={[ {justifyContent:'center', marginTop:35}, styles.rowFlex]}>
                        <Button status="primary" size="large" appearance="filled" style={styles.editProfileButton}>
                          Edit Profile
                        </Button>

                        </View>


                    </View>
                </View>
                
                  </Card>
              <Card style={[styles.listCard]}>
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="plus-circle"
                      size={44}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Connect friends or family</Text>
                    <Text appearance="hint" category="p2" style={{marginLeft:15, marginTop:5}} >Invite friends or family to your home.</Text>
                    
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
              <Text category="h6" appearance="hint" style={{marginTop:30}}>
                Account & Settings
              </Text>
              <Card style={[styles.listCard]}>
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center',}  ]}>
                <MaterialCommunityIcons
                      name="account"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Account</Text>
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
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="cog"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>App Settings</Text>
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
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="home"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Home Settings</Text>
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
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="lightbulb"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Device Settings</Text>
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
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="security"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Security</Text>
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
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="robot"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Automations</Text>
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
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="lightning-bolt"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Energy Monitoring</Text>
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
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="bed"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Room Management</Text>
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
              <View style={{alignItems:'flex-start'}}>
                <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
                <MaterialCommunityIcons
                      name="help-circle"
                      size={34}
                      color={theme["color-primary-500"]}
                    />
                    <View style={styles.colFlex}>
                    <Text category="h6" style={{marginLeft:15, marginTop:5}}>Support</Text>
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
              <Button status="danger" size="large" appearance="outline" style={styles.button}>
                Logout
              </Button>

              <Text category="s2" appearance="hint" style={{textAlign:'center', marginTop:50}}>
              Banking services provided by Plumm's bank partner(s). Debit cards issued by Hogwarts Bank. Brokerage services by Plumm Investing LLC, member FINRA, subsidiary of Plumm, Inc. Bitcoin services by Plumm, Inc.
              </Text>
          </ScrollView>
        </Layout>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    topBox: {
        borderRadius: 30,
        marginBottom: 10,
        width: "100%",
        height: 110,
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
    button: {
        width: "100%",
        height: 60,
        marginTop:30
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
    height: 120,
  },
  moneyBox: {
    borderRadius: 30,
    marginBottom: 10,
    marginRight:10,
    marginTop:20,
    width: "45%",
    height: 190,
  },
  moneyText: {
    fontFamily: "System",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: 'System'
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
  balanceBox:{
    width:'100%',
    height: 190,
    borderRadius:20,
    marginTop: 20,
  },
  cashButton: {
    borderRadius: 30,
    width: 120,
    height: 50,
    marginBottom: 15,
    marginRight: 10,
    marginLeft:10
},
  listCard: {
    marginTop:15,
  },
  cardPic: {
    width: '100',
    height: 250,
    marginTop: 30,
    marginBottom: 10,
    borderRadius:30,
  },
  avatar: {
    height:70,
  },
  editProfileButton: {
    width: "100%",
    height: 20,
    borderRadius: 20,
  }

  });

export default SettingScreen;
