import React, { useState } from "react"
import { StyleSheet, Dimensions } from "react-native"
import { ListItem } from "react-native-elements"

const SCREEN_WIDTH = Dimensions.get("window").width
const Group = ({ navigation, item, key }) => {
  // console.log(key)

  const [isClosed, setIsClosed] = useState(false)
  const { groupName, people } = item
  return (
    <>
      <ListItem title={`${groupName}(${people.length})`} badge={{ value: 3, textStyle: { color: "orange" }, containerStyle: { marginTop: -20 } }} key={key} chevron style={{ backgroundColor: "#9F9EA0" }} onPress={() => setIsClosed(!isClosed)} />
      {isClosed && people.map((l, i) => <ListItem leftAvatar={{ title: l.name[0], source: { uri: l.avatar_url } }} key={i} title={l.name} subtitle={l.subtitle} bottomDivider rightTitle="11:00am" rightTitleStyle={{ color: "green" }} rightSubtitle="12:00am" chevron onPress={() => navigation.navigate("MemberInfo")} />)}
    </>
  )
}

export default Group
