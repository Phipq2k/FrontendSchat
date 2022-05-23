import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import NameInput from './screens/NameInput'
import PhoneInput from './screens/PhoneInput'

export default function App() {
    return (
        <View style={styles.container}>
            <NameInput />
            {/* <PhoneInput /> */}
            <StatusBar style='auto' />
        </View>

{/* <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen>
        <View style={styles.container}>
            name='Name' component={NameInput}
            option={{ title: 'Welcome' }}
            {/* <NameInput /> */}
        </View>
    </Stack.Screen>
</Stack.Navigator>
</NavigationContainer> */}
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
