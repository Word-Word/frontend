import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import ResetPasswordComponent from "../../components/auth/ResetPassword"
const ResetPassword = () => {
  return <ResetPasswordComponent />
}
ResetPassword.navigationOptions = {
  header: null,
}
export default ResetPassword
