import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  const getData = () => {
    try {
        SecureStore.getItemAsync('phoneNumber').then((value) => {
            if (value != null) {
                navigation.navigate('ListChat')
            }
        })
    } catch (error) {
        console.log(error)
    }
}
    return (
        <View>
            <Button title="Đăng xuất" onPress={}/>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
