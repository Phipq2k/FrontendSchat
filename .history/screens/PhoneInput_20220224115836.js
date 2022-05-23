import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import Screen from '../components/Screen'
import PhoneInput from 'react-native-phone-number-input'

function PhoneInput() {
    const phoneInput = useRef < PhoneInput > null
    return (
        <View>
            <Screen />
            <View>
                <Text>Số điện thoại của bạn</Text>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode='DM'
                    layout='first'
                    onChangeText={(text) => {
                        setValue(text)
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text)
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                />
            </View>
        </View>
    )
}

export default PhoneInput
