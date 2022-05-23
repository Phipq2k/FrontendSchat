import React from 'react'
import { Text, View } from 'react-native'
import Screen from '../components/Screen'
import PhoneInput from 'react-native-phone-number-input'

function PhoneInput() {
    return (
        <View>
            <Screen />
            <View>
                <Text>Số điện thoại của bạn</Text>
            </View>
        </View>
    )
}

export default PhoneInput
