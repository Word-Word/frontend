import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
// redux test
const People = ({ navigation }) => {
  return (
    <View>
      <Text h1> ChatRoom</Text>
      <Button title="plus" onPress={() => {}} />
      <Button title="user infomation detail" onPress={() => navigation.navigate("MemberInfo")} />
    </View>
  )
}

export default People
