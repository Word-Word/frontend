import React from "react"
import { Icon, FormInput, ListItem } from "react-native-elements"
import { StyleSheet, Text, View, ScrollView } from "react-native"
//import { Button, Text } from "react-native-elements"
const members = [
  {
    name: "Amy Farha",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
    linearGradientColors: ["#FF9800", "#F44336"],
  },
  {
    name: "Chris Jackson",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
    linearGradientColors: ["#3F51B5", "#2196F3"],
  },
  {
    name: "Amanda Martin",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    subtitle: "CEO",
    linearGradientColors: ["#FFD600", "#FF9800"],
  },
  {
    name: "Christy Thomas",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
    subtitle: "Lead Developer",
    linearGradientColors: ["#4CAF50", "#8BC34A"],
  },
  {
    name: "Melissa Jones",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg",
    subtitle: "CTO",
    linearGradientColors: ["#F44336", "#E91E63"],
  },
  {
    name: "Amanda Martin",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    subtitle: "CEO",
    linearGradientColors: ["#FFD600", "#FF9800"],
  },
  {
    name: "Christy Thomas",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
    subtitle: "Lead Developer",
    linearGradientColors: ["#4CAF50", "#8BC34A"],
  },
  {
    name: "Melissa Jones",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg",
    subtitle: "CTO",
    linearGradientColors: ["#F44336", "#E91E63"],
  },
]

const ChatComponent = ({ navigation }) => {
  return (
    <ScrollView>
      <ListItem title={`즐겨찾기`} chevron style={{ backgroundColor: "#9F9EA0" }} onPress={() => console.log(`gdgd`)} />
      <ListItem title={`gggg`} chevron style={{ backgroundColor: "#9F9EA0" }} onPress={() => console.log(`gdgd`)} />
      {members.map((l, i) => (
        <ListItem leftAvatar={{ title: l.name[0], source: { uri: l.avatar_url } }} key={i} title={l.name} subtitle={l.subtitle} bottomDivider rightTitle="11:00am" rightTitleStyle={{ color: "green" }} rightSubtitle="12:00am" chevron onPress={() => navigation.navigate("MemberInfo")} />
      ))}
      {members.map((l, i) => (
        <ListItem leftAvatar={{ title: l.name[0], source: { uri: l.avatar_url } }} key={i} title={l.name} subtitle={l.subtitle} bottomDivider rightTitle="11:00am" rightTitleStyle={{ color: "green" }} rightSubtitle="12:00am" chevron onPress={() => navigation.navigate("MemberInfo")} />
      ))}
    </ScrollView>
  )
}

export default ChatComponent
