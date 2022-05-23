import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logout = () => {
    const removeData = () => {
        try {
            SecureStore.deleteItemAsync('phoneNumber')
            navigation.navigate('WaittingScreen')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <Button title='Đăng xuất' onPress={removeData} />
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({})
