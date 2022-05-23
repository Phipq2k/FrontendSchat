import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store'

const SecureStoreApp = () => {
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
        <View style={styles.container}>
            <Text style={styles.maintext}>Save a key/value</Text>

            <TextInput
                style={styles.textInput}
                placeholder={'Enter a key:'}
                onChangeText={(text) => onChangeKey(text)}
                value={key}
            />

            <TextInput
                style={styles.textInput}
                placeholder={'Enter a value:'}
                onChangeText={(text) => onChangeValue(text)}
                value={value}
            />

            <Button
                title='Save'
                onPress={() => {
                    save(key, value)
                    onChangeKey('')
                    onChangeValue('')
                }}
            />

            <Text style={styles.maintext}>Enter your key:</Text>

            <TextInput
                style={styles.textInput}
                placeholder={'Enter a key:'}
                onSubmitEditing={(event) => {
                    getValueFor(event.nativeEvent.text)
                }}
            />

            <Text style={styles.maintext}>{result}</Text>
        </View>
    )
}

export default SecureStoreApp

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    maintext: {
        marginTop: 34,
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    textInput: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 0.5,
        padding: 10,
        margin: 4,
        borderRadius: 20,
    },
})
