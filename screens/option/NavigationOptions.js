import { Dimensions } from "react-native"
import Sidebar from "./Sidebar"

export const DrawerOption = {
  initialRouteName: "Main",
  contentOptions: {
    activeTintColor: "#548ff7",
    activeBackgroundColor: "transparent",
    inactiveTintColor: "#ffffff",
    inactiveBackgroundColor: "transparent", //
    labelStyle: {
      fontSize: 15,
      marginLeft: 0,
    },
  },
  drawerWidth: Math.min(Dimensions.get("window").width * 0.8, 300),
  contentComponent: Sidebar,
}

export const AppStackOption = {
  mode: "modal",
  headerMode: "none",
}

export const AuthStackOption = {
  navigationOptions: {
    header: null,
  },
}
