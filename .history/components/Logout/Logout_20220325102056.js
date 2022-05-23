import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
        <View style={styles.button}>
            <Button title='Đăng xuất' onPress={removeData} />
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    button: { width: 100, height: '100%', justifyContent: 'center' },
})
