import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native'
import PhoneInput from 'react-native-phone-input'

function PhoneInput() {
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <View style={styles.container}>
            <Text>Phone Number Input</Text>
            <PhoneInput defaultValue={phoneNumber} />

            <TouchableOpacity
                styles={styles.phoneButton}
                onPress={() => Alert.alert(phoneBumber)}
            >
                <Text>Get Phone Number</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PhoneInput
