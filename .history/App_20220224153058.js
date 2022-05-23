import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import NameInput from './screens/NameInput'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
export default function App() {
    return (
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
