import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import Chat from "./Chat"
import ChatList from "./ChatList"
import Home from "./Home"
import Login from "./Login"
import NearStadium from "./NearStadium"
import RecommendStadium from "./RecommendStadium"
import RecommendUser from "./RecommendUser"
import Reservation from "./Reservation"
import SignUp from "./SignUp"
import StadiumInfo from "./StadiumInfo"
import UserInfo from "./UserInfo"

const AppNavigator = createSwitchNavigator(
  {
    Chat: { screen: Chat },
    ChatList: { screen: ChatList },
    Home: { screen: Home },
    Login: { screen: Login },
    NearStadium: { screen: NearStadium },
    RecommendStadium: { screen: RecommendStadium },
    RecommendUser: { screen: RecommendUser },
    Reservation: { screen: Reservation },
    SignUp: { screen: SignUp },
    StadiumInfo: { screen: StadiumInfo },
    UserInfo: { screen: UserInfo }
  },
  { initialRouteName: "Login" }
)

export default createAppContainer(AppNavigator)
