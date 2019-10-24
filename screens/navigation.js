import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { DrawerOption, AppStackOption, AuthStackOption } from "./option/NavigationOptions"
import Test from "./Test"

const Address = createStackNavigator({
  AddressMain: { screen: Test },
})
const Calendar = createStackNavigator({
  CalendarMain: { screen: Test },
})
const Chat = createStackNavigator({
  ChatMain: { screen: Test },
})
const Board = createStackNavigator({
  BoardMain: { screen: Test },
})
const Activity = createStackNavigator({
  ActivityMain: { screen: Test },
})

const Setting = createStackNavigator({
  SettingMain: { screen: Test },
})

const MainTab = createBottomTabNavigator({
  Address: { screen: Address },
  Calendar: { screen: Calendar },
  Chat: { screen: Chat },
  Board: { screen: Board },
  Activity: { screen: Activity },
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
    Access: { screen: Test },
    ForgotPassword: { screen: Test },
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
