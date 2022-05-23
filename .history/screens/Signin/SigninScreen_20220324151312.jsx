import { FontAwesome5 } from '@expo/vector-icons'
import { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, Alert, Button } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
import SignupScreenComponent from '../../components/Signup/SignupScreenComponent'
import { SigninScreenTheme } from '../../themes/Signin/SigninScreenTheme'
import * as SecureStore from 'expo-secure-store'

import { Formik } from 'formik'
// import { useFormik } from 'formik'
import { SigninSchema } from '../../validation'

import { useSelector, useDispatch } from 'react-redux'
import { setPhoneNumber } from '../../store/actions'

const ScreenPhoneInput = ({ navigation }) => {
    const { phoneNumber } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [Number, setNumber] = useState('')

    const [PhoneNumberError, setPhoneNumberError] = useState('')
    const MessageEro = ''

    const setData = async () => {
        try {
            dispatch(setPhoneNumber(phoneNumber))

            await SecureStore.setItemAsync('phoneNumber', phoneNumber)

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
        } catch (status) {
            const dataFromResponse = await responseFromSmsRequirement.json()
            if (dataFromResponse.status) {
                navigation.navigate('InputOTPSigninScreenComponent', {
                    phoneNumber,
                })
            } else {
                Alert.alert('Thông báo', dataFromResponse.message)
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

            <Formik
                initialValues={{ phoneNumber: '' }}
                validationSchema={SigninSchema}
                onSubmit={handleSubmit}
            >
                {({
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                    dirty,
                    isValid,
                    handleSubmit,
                }) => (
                    <View>
                        <View>
                            <Text style={SigninScreenTheme.textLoginName}>
                                Số điện thoại của bạn
                            </Text>

                            <View style={SigninScreenTheme.PhoneInput}>
                                <PhoneInput
                                    defaultValue={phoneNumber}
                                    defaultCode='VN'
                                    onChange={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber}
                                />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <Text
                                        style={SigninScreenTheme.textPhoneError}
                                    >
                                        {errors.phoneNumber}
                                    </Text>
                                ) : null}
                            </View>
                        </View>
                        <View style={SigninScreenTheme.boxNext}>
                            <TouchableOpacity
                                style={SigninScreenTheme.ButtonLoginNext}
                                onPress={handleSubmit}
                            >
                                <Text
                                    style={
                                        SigninScreenTheme.appButtonTextCreate
                                    }
                                >
                                    Đăng nhập
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ScreenPhoneInput
