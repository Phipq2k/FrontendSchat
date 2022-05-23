import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
import SignupScreenComponent from '../../components/Signup/SignupScreenComponent'
import { SigninScreenTheme } from '../../themes/Signin/SigninScreenTheme'
import * as SecureStore from 'expo-secure-store'

const ScreenPhoneInput = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [Number, setNumber] = useState('')
    const [PhoneNumberError, setPhoneNumberError] = useState('')
    const MessageEro = ''

    useEffect(() => {}, [])
    const getData = () => {
        try {
            await SecureStore.getItemAsync('phoneNumber').then((value) => {
                if (value != null) {
                }
            })
        } catch (err) {}
    }
    const setData = async () => {
        if (Number == '') {
            setPhoneNumberError('Vui lòng nhập số điện thoại')
        } else {
            try {
                await SecureStore.setItemAsync('phoneNumber', phoneNumber)
                if (Number.includes('.') == true || isFinite(Number) == false) {
                    setPhoneNumberError('Vui lòng không nhập ký tự đặc biệt')
                } else {
                    if (Number.length != 9) {
                        setPhoneNumberError(
                            'Vui lòng nhập đúng 9 chữ số, không bao gồm chữ số 0 ở đầu'
                        )
                    } else {
                        const responseFromSmsRequirement = await fetch(
                            'http://api.globalchain.vn:3000/auth/login',
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
                                'InputOTPSigninScreenComponent',
                                {
                                    phoneNumber,
                                }
                            )
                        } else {
                            Alert.alert('Thông báo', dataFromResponse.message)
                        }
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <View style={SigninScreenTheme.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('WaittingScreen')
                    // navigation.navigate('SecureStoreApp')
                }}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={SigninScreenTheme.arrowLeftIcon}
                />
            </TouchableOpacity>

            <SignupScreenComponent />

            <View style={SigninScreenTheme.boxSurname}>
                <Text style={SigninScreenTheme.textLoginName}>
                    Số điện thoại của bạn
                </Text>
                <View style={SigninScreenTheme.PhoneInput}>
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

            <View style={SigninScreenTheme.PhoneMessageError}>
                {PhoneNumberError.length > 0 && (
                    <Text style={SigninScreenTheme.textPhoneError}>
                        {PhoneNumberError}
                    </Text>
                )}
            </View>

            <View style={SigninScreenTheme.boxNext}>
                <TouchableOpacity
                    style={SigninScreenTheme.ButtonLoginNext}
                    onPress={setData}
                >
                    <Text style={SigninScreenTheme.appButtonTextCreate}>
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenPhoneInput
