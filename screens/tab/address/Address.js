import React from "react"
import AddressComponent from "../../../components/tab/address/Address"
import { Header, Icon } from "react-native-elements"
const Address = ({ navigation }) => {
  return <AddressComponent navigation={navigation} />
}
Address.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={{ icon: "menu", color: "#636FF6", onPress: () => screenProps.navigation.openDrawer() }}
      centerComponent={{ text: "MY TITLE", style: { color: "#111111" } }}
      //rightComponent={{ icon: "home", color: "#fff" }}
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "space-around",
      }}
    />
  ),
  tabBarIcon: ({ tintColor }) => <Icon name="heartbeat" type="font-awesome" style={{ color: tintColor }} />,
})
export default Address
