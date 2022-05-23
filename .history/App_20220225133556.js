import { useFonts } from 'expo-font'
import { StyleSheet, View } from 'react-native'
import NameInput from './screens/NameInput'
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
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name='NameInput' component={NameInput} />
        //     </Stack.Navigator>
        // </NavigationContainer>

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen>
                    <View style={styles.container}>
                        name='Name' component={NameInput}
                        option={{ title: 'Welcome' }}
                        {/* <NameInput /> */}
                    </View>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
