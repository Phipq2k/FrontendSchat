import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import NameInput from './screens/NameInput'
import * as Font from 'expo-font'

const fetchFonts = () => {
    return Font.loadAsync({
        'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.'),
        'roboto-medium': require('./assets/fonts/Roboto-Medium'),
    })
}

export default function App() {
    return (
        <View style={styles.container}>
            <NameInput />
            {/* <PhoneInput /> */}
            <StatusBar style='auto' />
        </View>

        //  <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen>
        //             <View style={styles.container}>
        //                 name='Name' component={NameInput}
        //                 option={{ title: 'Welcome' }}
        //                 {/* <NameInput /> */}
        //             </View>
        //         </Stack.Screen>
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
