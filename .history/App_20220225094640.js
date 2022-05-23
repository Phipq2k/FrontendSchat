import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import NameInput from './screens/NameInput'

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
        <View style={styles.container}>{<NameInput />}</View>

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
