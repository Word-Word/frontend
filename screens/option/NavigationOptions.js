import { Dimensions } from "react-native"
import { Header, Icon } from "react-native-elements"
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

// export const AddressStackOption = (screenProps) => ({
//   header: (
//     <Header
//       placement="left"
//       leftComponent={{ icon: "menu", color: "#636FF6", onPress: () => screenProps.navigation.openDrawer() }}
//       centerComponent={{ text: "MY TITLE", style: { color: "#111111" } }}
//       //rightComponent={{ icon: "home", color: "#fff" }}
//       containerStyle={{
//         backgroundColor: "#fff",
//         justifyContent: "space-around",
//       }}
//     />
//   ),
//   tabBarIcon: ({ tintColor }) => <Icon name="heartbeat" type="font-awesome" style={{ color: tintColor }} />,
// })
