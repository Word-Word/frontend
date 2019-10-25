import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import ForgotPasswordComponent from "../../components/auth/ForgotPassword"
// redux test
const ForgotPassword = ({navigation}) => {
  return <ForgotPasswordComponent navigation={navigation} />
}
ForgotPassword.navigationOptions = {
  header: null,
}
export default ForgotPassword
