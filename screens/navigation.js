import React from "react"
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { DrawerOption, AppStackOption, AuthStackOption } from "./option/NavigationOptions"
import { Icon } from "react-native-elements"
import Test from "./Test"
import Access from "./auth/Access"
//tab
import Address from "./tab/address/Address"
import Calendar from "./tab/calendar/Calendar"
import Chat from "./tab/chat/Chat"
import Activity from "./tab/activity/Activity"
import Board from "./tab/board/Board"
import Counter from "./Counter"
//auth
import FindInfo from "./auth/FindInfo"
import CreateAccount from "./auth/CreateAccount"
//app
import ChatRoom from "./tab/chat/ChatRoom"
import MemberInfo from "./app/MemberInfo"
const AddressStack = createStackNavigator({
  AddressMain: { screen: Address },
})
const CalendarStack = createStackNavigator({
  CalendarMain: { screen: Calendar },
})
const ChatStack = createStackNavigator({
  ChatMain: { screen: Chat },
})
const BoardStack = createStackNavigator({
  BoardMain: { screen: Board },
})
const ActivityStack = createStackNavigator({
  ActivityMain: { screen: Activity },
})

const SettingStack = createStackNavigator({
  SettingMain: { screen: Test },
})

const MainTab = createBottomTabNavigator(
  {
    // Counter: {
    //   screen: Counter,
    //   navigationOptions: () => ({ tabBarIcon: ({ tintColor }) => <Icon name="heartbeat" type="font-awesome" style={{ color: tintColor }} /> }),
    // },
    Address: { screen: AddressStack, navigationOptions: () => ({ tabBarIcon: ({ tintColor }) => <Icon name="address-card" type="font-awesome" color={tintColor} /> }) },
    Calendar: { screen: CalendarStack, navigationOptions: () => ({ tabBarIcon: ({ tintColor }) => <Icon name="calendar" type="font-awesome" color={tintColor} /> }) },
    Chat: { screen: ChatStack, navigationOptions: () => ({ tabBarIcon: ({ tintColor }) => <Icon name="comments" type="font-awesome" color={tintColor} /> }) },
    Board: { screen: BoardStack, navigationOptions: () => ({ tabBarIcon: ({ tintColor }) => <Icon name="window-restore" type="font-awesome" color={tintColor} /> }) },
    // Activity: { screen: Test, navigationOptions: () => ({ tabBarIcon: ({ tintColor }) => <Icon name="heartbeat" type="font-awesome" size={25} color={tintColor} /> }) },
    // Activity: { screen: ActivityStack },
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: "##915AC4", // active icon color
      inactiveTintColor: "#637DFC", // inactive icon color
      style: {
        backgroundColor: "#F8F8F8", // TabBar background
      },
    },
  },
)
//#9BB6E8
//#637DFC
//#636FF6
//#E0BBEC

const Drawer = createDrawerNavigator(
  {
    Main: { screen: MainTab },
    Setting: { screen: Test },
  },
  DrawerOption,
)

const AppStack = createStackNavigator(
  {
    Main: Drawer,
    MemberInfo: { screen: MemberInfo },
    ChatRoom: { screen: ChatRoom },
    Promotion01: { screen: Test },
  },
  AppStackOption,
)

const AuthStack = createStackNavigator(
  {
    Access: { screen: Access },
    FindInfo: { screen: FindInfo },
    ResetPassword: { screen: Test },
    CreateAccount: { screen: CreateAccount },
  },
  AuthStackOption,
)

const App = createSwitchNavigator({
  Loading: { screen: Test },
  Auth: { screen: AuthStack },
  App: { screen: AppStack },
})

export default createAppContainer(App)
