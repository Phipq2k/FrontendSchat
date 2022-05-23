import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignupNameScreen from './screens/Signup/SignupNameScreen'
import WaittingScreen from './screens/WaittingScreen'
import SignupPhoneScreen from './screens/Signup/SignupPhoneScreen'
import SigninScreen from './screens/Signin/SigninScreen'
import Welcome from './screens/Welcome'

import SigninScreenComponent from './components/SigninScreenComponent'
import SignupScreenComponent from './components/SignupScreenComponent'
import AuthenticationScreenComponent from './components/AuthenticationScreenComponent'
import InputOTPSigninScreenComponent from './components/InputOTPSigninScreenComponent'
import InputOTPSignupScreenComponent from './components/InputOTPSignupScreenComponent'
import ChatSetting from './screens/ChatSetting.jsx'
import WaitScreenConnect from './screens/CallCenter/WaitScreenConnect'
import VideoScreenConnect from './screens/CallCenter/VideoScreenConnect'
import TabNavigation from './navigation/TabNavigation'
import StackNavigation from './navigation/StackNavigation'

const Stack = createNativeStackNavigator()

export default function App() {
    const [loaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    })

    if (!loaded) {
        return null
    }

    return <StackNavigation />
}
