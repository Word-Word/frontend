import React, { Component } from "react"
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, StatusBar } from "react-native"
import { Button, Icon } from "react-native-elements"
//import { LinearGradient } from '../../components/LinearGradient';
import { LinearGradient } from "expo-linear-gradient"
import { Feather } from "@expo/vector-icons"
const SCREEN_WIDTH = Dimensions.get("window").width

const IMAGE_SIZE = SCREEN_WIDTH - 80
//<Button title="plus" onPress={() => navigation.navigate('ChatRoom')} />
const MemberInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
          <Text style={styles.nameHeader}>Theresa, 26</Text>
          <Button title="<" onPress={() => navigation.navigate("Address")} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://static.pexels.com/photos/428336/pexels-photo-428336.jpeg",
              }}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 20,
              marginHorizontal: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 26,
                color: "#525252",
                //fontFamily: 'bold',
              }}
            >
              Theresa
            </Text>
            <Text
              style={{
                flex: 0.5,
                fontSize: 15,
                color: "gray",
                textAlign: "left",
                marginTop: 5,
              }}
            >
              0.8 mi
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 26,
                color: "green",
                //fontFamily: 'bold',
                textAlign: "right",
              }}
            >
              84%
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              width: SCREEN_WIDTH - 80,
              marginLeft: 40,
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 15,
                color: "#525252",
                //fontFamily: 'regular',
              }}
            >
              100% Italian, fun loving, affectionate, young lady who knows what it takes to make a relationship work.
            </Text>
          </View>

          <View style={{ flex: 1, marginTop: 10 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                //marginTop: 20,
                marginHorizontal: 30,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                {
                  // <View style={{ flex: 1 }}>
                  //   <Text style={styles.infoTypeLabel}>소속</Text>
                  //   <Text style={styles.infoTypeLabel}>직급</Text>
                  //   <Text style={styles.infoTypeLabel}>핸드폰</Text>
                  //   <Text style={styles.infoTypeLabel}>이메일</Text>
                  // </View>
                }
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.infoAnswerLabel}>개발부서</Text>
                  <Text style={styles.infoAnswerLabel}>리액트네이티브팀</Text>
                  <Text style={styles.infoAnswerLabel}>010.1234.1234</Text>
                  <Text style={styles.infoAnswerLabel}>email@example.com</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 70,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",

              //marginHorizontal: 30,
            }}
          >
            <Icon raised name="heartbeat" type="font-awesome" color="#f50" onPress={() => console.log("hello")} />
            <Icon raised name="heartbeat" type="font-awesome" color="#f50" onPress={() => console.log("hello")} />
            <Icon raised name="heartbeat" type="font-awesome" color="#f50" onPress={() => console.log("hello")} />
            <Icon raised name="heartbeat" type="font-awesome" color="#f50" onPress={() => console.log("hello")} />
          </View>
        </View>
      </View>
      <Button
        containerStyle={{ marginVertical: 20 }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        buttonStyle={{
          height: 55,
          //width: SCREEN_WIDTH - 40,
          //borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
        linearGradientProps={{
          colors: ["#636FF6", "#AC7AF8"],
          start: [1, 0],
          end: [0.2, 0],
        }}
        ViewComponent={LinearGradient}
        title="Message Theresa"
        titleStyle={{
          // fontFamily: 'regular',
          fontSize: 20,
          color: "white",
          textAlign: "center",
        }}
        onPress={() => console.log("Message Theresa")}
        activeOpacity={0.5}
      />
    </SafeAreaView>
  )
}
MemberInfo.navigationOptions = {
  header: null,
}
export default MemberInfo
const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignContent: "center",
  },
  nameHeader: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingBottom: 20,
  },
  infoTypeLabel: {
    fontSize: 25,
    //textAlign: "right",
    color: "#525252",
    //   fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 25,
    color: "#525252",
    //  fontFamily: 'regular',
    paddingBottom: 10,
  },
})

//icon memo
//position : MaterialIcons
//phone : Feather-phone

//email : MaterialCommunityIcons-email-outline
