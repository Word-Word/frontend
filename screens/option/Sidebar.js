import React from "react"
import { View, Image, Dimensions } from "react-native"
import { DrawerNavigatorItems } from "react-navigation-drawer"
import { LinearGradient } from "expo-linear-gradient"

const Sidebar = (props) => (
  <View
    style={{
      flex: 1,
      //  backgroundColor: "#43484d"
     // backgroundColor: ["#636FF6", "#AC7AF8"],
    }}
    linearGradientProps={{
      colors: ["#636FF6", "#AC7AF8"],
      start: [1, 0],
      end: [0.2, 0],
    }}
    activeOpacity={0.5}
    ViewComponent={LinearGradient}
  >
    <View style={{ marginTop: 40, justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../../assets/con-icon.jpg")} style={{ width: Math.min(Dimensions.get("window").width * 0.57, 200) }} resizeMode="contain" />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerNavigatorItems {...props} />
    </View>
  </View>
)

export default Sidebar
