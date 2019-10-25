import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { DrawerOption, AppStackOption, AuthStackOption } from "./option/NavigationOptions"
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
import ForgotPassword from "./auth/ForgotPassword"
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

const MainTab = createBottomTabNavigator({
  Counter: { screen: Counter },
  Address: { screen: AddressStack },
  Calendar: { screen: CalendarStack },
  Chat: { screen: ChatStack },
  Board: { screen: BoardStack },
  Activity: { screen: ActivityStack },
})

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
    Promotion01: { screen: Test },
  },
  AppStackOption,
)

const AuthStack = createStackNavigator(
  {
    Access: { screen: Access },
    ForgotPassword: { screen: ForgotPassword },
    ResetPassword: { screen: Test },
  },
  AuthStackOption,
)

const App = createSwitchNavigator({
  Loading: { screen: Test },
  Auth: { screen: AuthStack },
  App: { screen: AppStack },
})

export default createAppContainer(App)
