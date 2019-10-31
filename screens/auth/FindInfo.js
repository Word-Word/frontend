import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import FindInfoComponent from "../../components/auth/FindInfo"
// redux test
const FindInfo = ({ navigation }) => {
  return <FindInfoComponent navigation={navigation} />
}
FindInfo.navigationOptions = {
  header: null,
}
export default FindInfo
