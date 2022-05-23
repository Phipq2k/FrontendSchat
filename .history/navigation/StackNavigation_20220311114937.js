import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='WaitScreenConnect'
                component={WaitScreenConnect}
            />
            <Stack.Screen
                name='VideoScreenConnect'
                component={VideoScreenConnect}
            />
        </Stack.Navigator>
    )
}
