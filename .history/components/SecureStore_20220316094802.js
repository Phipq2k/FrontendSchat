import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store'

const SecureStore = () => {
    const [key, onChangeKey] = useState('')
    const [value, onChangeValue] = useState('')
    const [result, onChangeresult] = useState('')
    return (
        <View>
            <Text>SecureStore</Text>
        </View>
    )
}

export default SecureStore

const styles = StyleSheet.create({})
