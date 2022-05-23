import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WaitScreenConnect from '../screens/CallCenter/WaitScreenConnect'
import VideoScreenConnect from '../screens/CallCenter/VideoScreenConnect'
import ChatScreen from '../screens/ScreenChatSingle/ChatScreen'
import ListChat from '../screens/ListChat/ListChat'
import ChatHeader from '../components/ScreenChatSingle/ChatHeader'

import ChatSetting from '../screens/ChatSetting/ChatSetting'

import WaittingScreen from '../screens/WaittingScreen/WaittingScreen'
import SigninScreen from '../screens/Signin/SigninScreen'
import SignupNameScreen from '../screens/Signup/SignupNameScreen'
import SignupPhoneScreen from '../screens/Signup/SignupPhoneScreen'
import SecureStoreApp from '../components/SecureStore'

const Stack = createNativeStackNavigator()

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='WaittingScreen'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name='SecureStoreApp'
                    component={SecureStoreApp}
                />

                <Stack.Screen
                    name='WaittingScreen'
                    component={WaittingScreen}
                />

                <Stack.Screen name='SigninScreen' component={SigninScreen} />
                <Stack.Screen
                    name='SigninScreenComponent'
                    component={SigninScreenComponent}
                />

                <Stack.Screen
                    name='SignupNameScreen'
                    component={SignupNameScreen}
                />

                <Stack.Screen
                    name='SignupPhoneScreen'
                    component={SignupPhoneScreen}
                />

                <Stack.Screen name='ListChat' component={ListChat} />
                <Stack.Screen name='ChatScreen' component={ChatScreen} />

                <Stack.Screen
                    name='WaitScreenConnect'
                    component={WaitScreenConnect}
                />
                <Stack.Screen
                    name='VideoScreenConnect'
                    component={VideoScreenConnect}
                />
                <Stack.Screen name='ChatSetting' component={ChatSetting} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// export default function StackNavigation() {
//     return (
//         <NavigationContainer>
//             <MyStack />
//         </NavigationContainer>
//     )
// }
