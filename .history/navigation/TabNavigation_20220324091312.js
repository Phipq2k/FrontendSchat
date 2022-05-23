import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Files from '../components/ChatSetting/Files'
import ImageVideo from '../components/ChatSetting/ImageVideo'
import Links from '../components/ChatSetting/Links'

import Details from '../components/WordDetails/Details'
import Comments from '../components/WordDetails/Comments'

const Tab = createMaterialTopTabNavigator()

export default function TabNavigation() {
    return (
        <Tab.Navigator
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
                tabBarStyle: {
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#D3D3D3',
                    borderStyle: 'solid',
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
    )
}
export function WordDetailsNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#1B1B1B',
                tabBarLabelStyle: {
                    fontSize: 14,
                    textTransform: 'none',
                    fontFamily: 'roboto-regular',
                    lineHeight: 16,
                    marginTop: 20,
                    width: 120,
                },

                tabBarIndicatorStyle: {
                    // padding: 28,
                    // borderRadius: 100,
                },
                tabBarIndicatorContainerStyle: {
                    width: '100%',
                    height: 65,
                    textAlign: 'center',
                    // marginLeft: 10,
                    // backgroundColor: '#F2F1F1',
                    backgroundColor: '#fff',
                    // marginTop: 5,
                },
            }}
        >
            <Tab.Screen
                name='Details'
                component={Details}
                options={{ tabBarLabel: 'Chi tiết công việc' }}
            />
            <Tab.Screen
                name='Comments'
                component={Comments}
                options={{ tabBarLabel: 'Bình luận' }}
            />
        </Tab.Navigator>
    )
}
