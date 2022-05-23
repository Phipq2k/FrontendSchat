import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
import { SignupPhoneTheme } from '../../themes/Signup/SignupPhoneTheme'

const ScreenPhoneInput = ({ route, navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [Number, setNumber] = useState('')
    const [PhoneNumberError, setPhoneNumberError] = useState('')
    const MessageEro = ''
    const { firstName, lastName } = route.params

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('SignupNameScreen')
                }}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={styles.arrowLeftIcon}
                />
            </TouchableOpacity>

            <SigninScreenComponent />

            <View style={styles.boxSurname}>
                <Text style={styles.textLoginName}>Số điện thoại của bạn</Text>
                <View style={styles.PhoneInput}>
                    <PhoneInput
                        defaultValue={phoneNumber}
                        defaultCode='VN'
                        onChangeText={(text) => {
                            setNumber(text)
                        }}
                        onChangeFormattedText={(text) => {
                            setPhoneNumber(text)
                        }}
                    />
                </View>
            </View>

            <View style={styles.PhoneMessageError}>
                {PhoneNumberError.length > 0 && (
                    <Text style={styles.textPhoneError}>
                        {PhoneNumberError}
                    </Text>
                )}
            </View>

            <View style={styles.boxNext}>
                <TouchableOpacity
                    style={styles.ButtonLoginNext}
                    onPress={async (MessageEro) => {
                        if (Number == '') {
                            setPhoneNumberError('Vui lòng nhập số điện thoại')
                        } else {
                            if (
                                Number.includes('.') == true ||
                                isFinite(Number) == false
                            ) {
                                setPhoneNumberError(
                                    'Vui lòng không nhập ký tự đặc biệt'
                                )
                            } else {
                                if (Number.length != 9) {
                                    setPhoneNumberError(
                                        'Vui lòng nhập đúng 9 chữ số, không bao gồm chữ số 0 ở đầu'
                                    )
                                } else {
                                    const responseFromSmsRequirement =
                                        await fetch(
                                            'http://172.21.20.116:3000/auth/signup',
                                            {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type':
                                                        'application/x-www-form-urlencoded;charset=utf-8',
                                                },
                                                body: new URLSearchParams({
                                                    phone_number: phoneNumber,
                                                }).toString(),
                                            }
                                        )

                                    const dataFromResponse =
                                        await responseFromSmsRequirement.json()
                                    if (dataFromResponse.status) {
                                        navigation.navigate(
                                            'InputOTPSignupScreenComponent',
                                            { phoneNumber }
                                        )
                                    } else {
                                        Alert.alert(
                                            'Thông báo',
                                            dataFromResponse.message
                                        )
                                    }
                                }
                            }
                        }
                    }}
                >
                    <Text style={styles.appButtonTextCreate}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenPhoneInput
