import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import MemberInfoComponent from "../../components/app/MemberInfo"
import { Feather } from "@expo/vector-icons"
const MemberInfo = ({ navigation }) => {
  return <MemberInfoComponent navigation={navigation} />
}

export default MemberInfo
