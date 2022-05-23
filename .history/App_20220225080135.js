import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import NameInput from './screens/NameInput'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
    return Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.'),
        'roboto-medium': require('./assets/fonts/Roboto-Medium'),
        'roboto-light': require('./assets/fonts/Roboto-Light'),
    })
}

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false)

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}
            />
        )
    }
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
