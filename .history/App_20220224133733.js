import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import NameInput from './screens/NameInput'
import PhoneInput from './screens/PhoneInput'

export default function App() {
    return (
        <View style={styles.container}>
            <NameInput />
            <PhoneInput />
            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
