import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Screen from './components/Screen'
import NameInput from './screens/NameInput'

export default function App() {
    return (
        <View style={styles.container}>
            <NameInput />
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
