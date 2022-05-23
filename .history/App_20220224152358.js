import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import NameInput from './screens/NameInput'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigattor>
                <View style={styles.container}>
                    <NameInput />
                    <StatusBar style='auto' />
                </View>
            </Stack.Navigattor>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
