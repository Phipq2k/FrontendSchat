import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignupNameScreen from './screens/Signup/SignupNameScreen'
import WaittingScreen from './screens/WaittingScreen'
import PhoneInputScreen from './screens/Signup/SignupPhoneScreen'
import SigninScreen from './screens/Signin/SigninScreen'

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

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='WaittingScreen'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name='WaittingScreen'
                    component={WaittingScreen}
                />
                <Stack.Screen
                    name='SignupNameScreen'
                    component={SignupNameScreen}
                />
                <Stack.Screen name='SigninScreen' component={SigninScreen} />
                <Stack.Screen
                    name='PhoneInputScreen'
                    component={PhoneInputScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
