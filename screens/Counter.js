import React, { useReducer } from "react"
import { useDispatch, useSelector } from "react-redux"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
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

export default Counter
