import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import StadiumInfo from "./StadiumInfo"

const AppNavigator = createSwitchNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    StadiumInfo: { screen: StadiumInfo },
  },
  { initialRouteName: "Login" }
)

export default createAppContainer(AppNavigator)
