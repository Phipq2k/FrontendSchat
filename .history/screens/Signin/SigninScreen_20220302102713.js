import React, { useRef, useState, useEffect } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native'
import SignupScreenComponent from '../../components/SignupScreenComponent'
import { FontAwesome5 } from '@expo/vector-icons'

const SigninScreen = ({ navigation }) => {
    let textInput = useRef(null)
    // const [phoneNumber, setPhoneNumber] = useState()
    // const [focusInput, setFocusInput] = useState(true)

    const [phoneNumber, setPhoneNumber] = useState('')
    const [Number, setNumber] = useState('')
    const [PhoneNumberError, setPhoneNumberError] = useState('')
    const MessageEro = ''
    const onChangePhone = (number) => {
        setPhoneNumber(number)
    }
    const onPressContinue = ({ navigation }) => {
        if (phoneNumber) {
            navigation.navigate('InputOTPScreenComponent')
        } else {
            alert('Vui lòng đăng kí bằng số điện thoại')
        }
    }
    const onChangeFocus = () => {
        setFocusInput(true)
    }
    const onChangeBlur = () => {
        setFocusInput(false)
    }

    useEffect(() => {
        textInput.focus
    }, [])
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('WaittingScreen')
                }}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={styles.arrowLeftIcon}
                />
            </TouchableOpacity>

            <SignupScreenComponent />

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
                    onPress={(MessageEro) => {
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
                                } else
                                    navigation.navigate(
                                        'InputOTPScreenComponent'
                                    )
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

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
        marginLeft: 16,
    },

    arrowLeftIcon: {
        color: '#000',
        width: 20,
        height: 26,
        marginTop: 58,
    },
    LoginText: {
        width: 343,
        height: 27,
        marginTop: 97,
        fontFamily: 'Roboto',
        fontSize: 23,
        fontWeight: '500',
        lineHeight: 27,
        color: '#131313',
        marginBottom: 10,
    },
    SiginText: {
        color: '#0D76C1',
    },
    numberphone: {
        marginTop: 55,
        marginBottom: 8,
    },
    /* NUMBER PHONE*/
    CountryCode: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: '#EEEEEE',
        height: 45,
    },
    CodeVietNam: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextPhone: {
        backgroundColor: 'white',
        width: 270,
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 8,
        borderRadius: 2,
    },
    btnLogin: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '500',
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75,
        backgroundColor: '#27AAE1',
        borderRadius: 4,
    },
    colorLogin: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
    },
})

export default SigninScreen
