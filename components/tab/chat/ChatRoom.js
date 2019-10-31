import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, TextInput, FlatList, Button } from "react-native"
//import { Text } from "react-native-elements"

const ChatRoom = ({ navigation }) => {
  return (
    <View>
      <Text>ㅎㅇㅎㅇ Chat Room</Text>
      <Button title="bbbbq" onPress={() => navigation.navigate("Chat")} />
      <Button title="bbbbq" onPress={() => navigation.navigate("Chat")} />
      <Button title="bbbbq" onPress={() => navigation.navigate("Chat")} />
      <Button title="bbbbq" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default ChatRoom
