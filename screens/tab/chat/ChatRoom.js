import React from "react"
import { View } from "react-native"
import { Button, Text, Header } from "react-native-elements"
import ChatRoomComponent from "../../../components/tab/chat/ChatRoom"
// redux test
const ChatRoom = ({ navigation }) => {
  return <ChatRoomComponent navigation={navigation} />
}
ChatRoom.navigationOptions = (screenProps) => ({
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
})
export default ChatRoom
