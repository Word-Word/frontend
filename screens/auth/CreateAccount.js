import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import CreateAccountComponent from "../../components/auth/CreactAccount"
// redux test
const CreateAccount = ({ navigation }) => {
  return <CreateAccountComponent navigation={navigation} />
}
CreateAccount.navigationOptions = {
  header: null,
}
export default CreateAccount
