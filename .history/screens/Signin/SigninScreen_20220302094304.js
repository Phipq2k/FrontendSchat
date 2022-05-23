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
    const [phoneNumber, setPhoneNumber] = useState()
    const [focusInput, setFocusInput] = useState(true)
    const onChangePhone = (number) => {
        setPhoneNumber(number)
    }
    const onPressContinue = () => {
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

            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style={styles.containerAvoidingView}
            >
                <View style={styles.Text}>
                    <Text style={styles.numberphone}>
                        Số điện thoại của bạn
                    </Text>
                </View>
                <View style={styles.CountryCode}>
                    <View style={styles.CodeVietNam}>
                        <Image
                            style={styles.LogoVietNam}
                            source={require('../../assets/vietnam.png')}
                        ></Image>
                        <Text>{'  +84 '}</Text>
                        <Image
                            style={styles.LogoVietNam}
                            source={require('../../assets/icons8-sort-down-7.png')}
                        ></Image>
                    </View>
                    <TextInput
                        style={styles.TextPhone}
                        ref={(input) => (textInput = input)}
                        placeholder=' Số điện thoại'
                        keyboardType='numeric'
                        value={phoneNumber}
                        onChangeText={onChangePhone}
                        secureTextEntry={false}
                        onFocus={onChangeFocus}
                        onBlur={onChangeBlur}
                    />
                </View>
                <View style={styles.InputContatiner}>
                    <TouchableOpacity
                        onPress={onPressContinue}
                        style={styles.btnLogin}
                    >
                        <Text style={styles.colorLogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
