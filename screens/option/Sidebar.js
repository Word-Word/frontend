import React from "react"
import { View, Image, Dimensions } from "react-native"
import { DrawerNavigatorItems } from "react-navigation-drawer"

const Sidebar = (props) => (
  <View style={{ flex: 1, backgroundColor: "#43484d" }}>
    <View style={{ marginTop: 40, justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../../assets/con-icon.jpg")} style={{ width: Math.min(Dimensions.get("window").width * 0.57, 200) }} resizeMode="contain" />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerNavigatorItems {...props} />
    </View>
  </View>
)

export default Sidebar
