import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'

function PhoneInput() {
    // const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <View style={styles.container}>
            <Text>Phone Number Input</Text>
            <PhoneInput />
        </View>
    )
}

export default PhoneInput
