import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Files from '../components/Files'
import ImageVideo from '../components/ImageVideo'
import Links from '../components/Links'

import WaitScreenConnect from '../screens/CallCenter/WaitScreenConnect'
import VideoScreenConnect from '../screens/CallCenter/VideoScreenConnect'
import ChatScreen from '../screens/ScreenChatSingle/ChatScreen'
import ListChat from '../screens/ListChat/ListChat'
import ChatHeader from '../components/ScreenChatSingle/ChatHeader'

import ChatSetting from '../screens/ChatSetting'

const Tab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()

export default function MyTabs() {
    return (
      
            <Tab.Navigator
                initialRouteName='ListChat'
                screenOptions={{
                    tabBarActiveTintColor: '#0D76C1',
                    tabBarInactiveTintColor: '#1B1B1B',
                    tabBarLabelStyle: {
                        fontSize: 14,
                        textTransform: 'none',
                        fontFamily: 'roboto-regular',
                        lineHeight: 16,
                        color: '#1B1B1B',
                    },
                }}
            >
                <Tab.Screen
                    name='ImageVideo'
                    component={ImageVideo}
                    options={{ tabBarLabel: 'Ảnh/ video' }}
                />
                <Tab.Screen
                    name='Files'
                    component={Files}
                    options={{ tabBarLabel: 'Files' }}
                />
                <Tab.Screen
                    name='Links'
                    component={Links}
                    options={{ tabBarLabel: 'Links' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function MyStack() {
    return (  <NavigationContainer></NavigationContainer>
        <Stack.Navigator
            initialRouteName='ListChat'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='ListChat' component={ListChat} />
            <Stack.Screen name='ChatScreen' component={ChatScreen} />
            <Stack.Screen name='ChatHeader' component={ChatHeader} />
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
    )
}

// export default function NestedNavigation() {
//     return (
//         <NavigationContainer>
//             {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name='MyStack' component={MyStack} />
//                 <Stack.Screen name='MyTabs' component={MyTabs} />
//             </Stack.Navigator> */}

//             <MyTabs />
//             {/* <MyStack /> */}
//         </NavigationContainer>
//     )
// }
