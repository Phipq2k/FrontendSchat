import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignupNameScreen from './screens/SignupNameScreen'
import WaittingScreen from './screens/WaittingScreen'
import PhoneInputScreen from './screens/PhoneInputScreen'

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
                    name='ScreenSignupName'
                    component={SignupNameScreen}
                />
                {/* <Stack.Screen
                    name='ScreenPhoneInput'
                    component={ScreenPhoneInput}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
