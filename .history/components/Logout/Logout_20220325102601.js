import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'

const Logout = () => {
    const navigation = useNavigation()

    const removeData = async () => {
        try {
            await SecureStore.deleteItemAsync('phoneNumber')
            navigation.navigate('WaittingScreen')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('WaittingScreen')
                }}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={SigninScreenTheme.arrowLeftIcon}
                />
            </TouchableOpacity>
            <View style={styles.screen}>
                <Button
                    style={styles.button}
                    title='Đăng xuất'
                    onPress={removeData}
                />
            </View>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    button: {
        borderRadius: 100,
    },
})
