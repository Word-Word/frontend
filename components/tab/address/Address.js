import React from "react"
import { View, ScrollView, StyleSheet, Image, FlatList, Button, SafeAreaView, Dimensions } from "react-native"
import { Text, Card, Tile, Icon, Avatar, ListItem } from "react-native-elements"
import { LinearGradient } from "expo-linear-gradient"
import Group from "./group/Group"

const SCREEN_WIDTH = Dimensions.get("window").width
const addressAll = {
  members: [
    {
      groupName: "HR",
      people: [
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
      ],
    },
    {
      groupName: "develop",
      people: [
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
      ],
    },
    ,
    {
      groupName: "inte",
      people: [
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
      ],
    },
  ],
}

const AddressComponent = ({ navigation }) => {
  //<Icon color="white" name="invert-colors" size={62} />
  //<Text style={styles.heading}>Lists</Text>
  //<View style={styles.statusBar} />
  //<View style={styles.navBar}>
  //<Text style={styles.nameHeader}>Growing</Text>
  // </View>
  const { members } = addressAll
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(241,240,241,1)", marginHorizontal: 10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: 5,
              alignItems: "center",
              marginHorizontal: 10,
              height: 250,
              marginBottom: 10,
            }}
          >
            <View style={{ flex: 3, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50,
                }}
              >
                <Avatar
                  width={145}
                  height={145}
                  source={{
                    uri: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
                  }}
                  activeOpacity={0.7}
                  rounded
                  avatarStyle={{}}
                  overlayContainerStyle={{ backgroundColor: "transparent" }}
                />
              </View>
            </View>
            <View
              style={{
                width: 300,
                borderWidth: 0.5,
                borderColor: "rgba(222, 223, 226, 1)",
                marginHorizontal: 20,
                height: 1,
                marginVertical: 10,
                marginTop: 50,
              }}
            />
            <View
              style={{
                flex: 1,
                //marginTop: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  // fontFamily: "bold",
                  fontSize: 25,
                  color: "rgba(98,93,144,1)",
                  marginLeft: -15,
                }}
              >
                Paul Allen
              </Text>
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.list}>
          <ListItem title="MemberInfo" chevron style={{ backgroundColor: "#9F9EA0" }} onPress={() => navigation.navigate("MemberInfo")} />
          <ListItem title="ChatRoom" chevron style={{ backgroundColor: "#9F9EA0" }} onPress={() => navigation.navigate("ChatRoom")} />
          {members.map((v, k) => (
            <Group key={k} item={v} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default AddressComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    //borderColor: colors.greyOutline,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#FD6B78",
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
  },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignContent: "center",
  },
  nameHeader: {
    color: "black",
    fontSize: 25,
    //fontFamily: 'regular',
    marginLeft: 20,
  },
})
