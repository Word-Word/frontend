import React, { useReducer } from "react"
import { useDispatch, useSelector } from "react-redux"
import { View } from "react-native"
import { Header, Button, Text } from "react-native-elements"
import { setPlus, setMinus } from "../store/counter"

const Counter = () => {
  //console.log(counter)
  const num = useSelector((state) => state.counter.num)
  const dispatch = useDispatch()
  return (
    <View>
      <Text h1>수짜 {num}</Text>
      <Button
        title="plus"
        onPress={() => {
          dispatch(setPlus())
        }}
      />
      <Button
        title="Minus"
        onPress={() => {
          dispatch(setMinus())
        }}
      />
    </View>
  )
}

Counter.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={{ icon: "menu", color: "#636FF6", onPress: () => screenProps.navigation.openDrawer() }}
      centerComponent={{ text: "Counter", style: { color: "#111111" } }}
      //rightComponent={{ icon: "home", color: "#fff" }}
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "space-around",
      }}
    />
  ),
})
export default Counter
