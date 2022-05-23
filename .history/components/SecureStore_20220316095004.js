import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store'

const SecureStore = () => {
    const [key, onChangeKey] = useState('')
    const [value, onChangeValue] = useState('')
    const [result, onChangeResult] = useState('')

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value)
    }

    async function getValueFor(key) {
        const result = await SecureStore.getItemAsync(key)
        if (result) {
            onChangeResult(result)
        } else {
            alert('Invalid key!')
        }
    }
    return (
        <View>
            <Text>SecureStore</Text>
        </View>
    )
}

export default SecureStore

const styles = StyleSheet.create({})
