import { Dimensions } from "react-native"
import Sidebar from "./Sidebar"

export const DrawerOption = {
  initialRouteName: "Main",
  contentOptions: {
    activeTintColor: "#44F2",
    activeBackgroundColor: "transparent",
    inactiveTintColor: "#ffffff",
    labelStyle: {
      fontSize: 15,
      marginLeft: 0,
    },
  },
  drawerWidth: Math.min(Dimensions.get("window").width * 0.8, 300),
  comtentComponent: Sidebar,
  headerMode: "none",
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
