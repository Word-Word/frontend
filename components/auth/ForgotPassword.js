import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
// redux test
const ForgotPassword = ({navigation}) => {
  return (
    <View>
      <Text h1>ForgotPassword </Text>
      <Button title="Access" onPress={()=>navigation.navigate('Access')} />

    </View>
  )
}

export default ForgotPassword
