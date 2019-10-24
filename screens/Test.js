import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
// TouchableOpacity(https://facebook.github.io/react-native/docs/touchableopacity) : 터치가능 불투명, 뷰가 터치에 응답하도록 만드는 wrapper

// random으로 색깔 얻어와서 배경으로 사용
const getRandomColor = () => {
  let letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const getAvailableRoutes = (navigation) => {
  let available_routes = [] // 사용가능경로`들`
  if (!navigation) return available_routes // navigation이 없으면 걍 return하고 보내세요

  const parent = navigation.dangerouslyGetParent() // parent navigator를 반환하는 함수  typeof = object
  //console.log(parent)
  if (parent) {
    if (parent.router && parent.router.childRouters) {
      //부모가 가져온 route목록을 추가한다
      available_routes = [...available_routes, ...Object.keys(parent.router.childRouters)]
    }
    available_routes = [...available_routes, ...getAvailableRoutes(parent)]
    // 배열안에 재귀로 자기자신을 계속 풀어버림
  }

  //filter : route가져올때 자기자신(현재경로)빼고 넣기 (목록 중복제거)
  return [...new Set(available_routes)].filter((route) => route !== navigation.state.routeName)
}

// Test용으로 만든 component 경로 파악 + component render 확인 용도
// navigation을 통해 route를 getAvailableRoutes함수를 통해 map으로 찍어줌
const Test = ({ navigation }) => {
  //{navigation.state.routeName}
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Test Component</Text>
      <Text style={styles.title}>| {navigation.state.routeName} |</Text>
      {getAvailableRoutes(navigation).map((route) => (
        <TouchableOpacity style={styles.routeButton} key={route} onPress={() => navigation.navigate(route)}>
          <Text>{route}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
Test.navigationOptions = {
  header: null,
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: getRandomColor(),
  },
  routeButton: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
  },
  header: {
    color: "#fff",
    fontSize: 30,
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
})
