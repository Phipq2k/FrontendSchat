import { useFonts } from 'expo-font'
import { StyleSheet, View } from 'react-native'
import NameInput from './screens/NameInput'
import Second from './screens/Second'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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
        <NavigationContainer screenOptions={{ headerShown: false }}>
            <Stack.Navigator initialRouteName='NameInput'>
                <Stack.Screen name='NameInput' component={NameInput} />
                <Stack.Screen name='Second' component={Second} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
