import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native'
import { useState, useRef } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import * as SecureStore from 'expo-secure-store';

const InputOTPSigninScreenComponent = ({ route, navigation }) => {

    const pin1ref = useRef()
    const pin2ref = useRef()
    const pin3ref = useRef()
    const pin4ref = useRef()
    const pin5ref = useRef()
    const pin6ref = useRef()

    const [OTPError, setOTPError] = useState("");


    const [Number1, setNumber1] = useState("");
    const [Number2, setNumber2] = useState("");
    const [Number3, setNumber3] = useState("");
    const [Number4, setNumber4] = useState("");
    const [Number5, setNumber5] = useState("");
    const [Number6, setNumber6] = useState("");

    const { phoneNumber } = route.params;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('SignupPhoneScreen', route.params)
                }}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={styles.arrowLeftIcon}
                />
            </TouchableOpacity>

            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style={styles.containerAvoidingView}
            >
                <View style={styles.OTPTextContainer}>
                    <Text style={styles.OTPText}>Xác nhận OTP</Text>
                    <Text style={styles.InputOTPText}>
                        Nhập mã OTP để tiếp tục
                    </Text>
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.InputBox}
                        autoFocus={true}
                        value={Number1}
                        onChangeText={(text) => {
                            setNumber1(text)
                            if (isFinite(text) == true && text != "") { pin1ref.current.focus() }
                            else {
                                setNumber1("")
                            }
                        }}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                    <TextInput
                        ref={pin1ref}
                        style={styles.InputBox}
                        keyboardType="numeric"
                        maxLength={1}
                        value={Number2}
                        onChangeText={(text) => {
                            setNumber2(text)
                            if (isFinite(text) == true && text != "") { pin2ref.current.focus() }
                            else {
                                setNumber2("")
                            }
                        }}
                        returnKeyType='next'
                        blurOnSubmit={false}
                    />
                    <TextInput
                        ref={pin2ref}
                        style={styles.InputBox}
                        keyboardType="numeric"
                        maxLength={1}
                        value={Number3}
                        onChangeText={(text) => {
                            setNumber3(text)
                            if (isFinite(text) == true && text != "") { pin3ref.current.focus() }
                            else {
                                setNumber3("")
                            }
                        }}
                        returnKeyType='next'
                        blurOnSubmit={false}
                    />
                    <TextInput
                        ref={pin3ref}
                        style={styles.InputBox}
                        keyboardType="numeric"
                        maxLength={1}
                        value={Number4}
                        onChangeText={(text) => {
                            setNumber4(text)
                            if (isFinite(text) == true && text != "") { pin4ref.current.focus() }
                            else {
                                setNumber4("")
                            }
                        }}
                        returnKeyType='next'
                        blurOnSubmit={false}
                    />
                    <TextInput
                        ref={pin4ref}
                        style={styles.InputBox}
                        keyboardType="numeric"
                        maxLength={1}
                        value={Number5}
                        onChangeText={(text) => {
                            setNumber5(text)
                            if (isFinite(text) == true && text != "") { pin5ref.current.focus() }
                            else {
                                setNumber5("")
                            }
                        }}
                        returnKeyType='next'
                        blurOnSubmit={false}
                    />
                    <TextInput
                        ref={pin5ref}
                        style={styles.InputBox}
                        keyboardType="numeric"
                        maxLength={1}
                        value={Number6}
                        onChangeText={(text) => {
                            setNumber6(text)
                            if (isFinite(text) == true && text != "") {
                                //
                                requireSms()
                            }
                            else {
                                setNumber6("")
                            }
                        }}
                        returnKeyType='done'
                        blurOnSubmit={false}
                    />
                </View>
                <View>
                    {OTPError.length > 0 && (
                        <Text style={styles.boxRed}>{OTPError}</Text>
                    )}
                </View>

                <Text style={styles.timer}>Còn 02:00s</Text>


                <View style={styles.ConfirmContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            if (Number1 == "" || Number2 == "" || Number3 == "" || Number4 == "" || Number5 == "" || Number6 == "") {
                                setOTPError("Vui lòng nhập đủ 6 số");
                            } else {
                                setOTPError('');
                                requireSms();
                            }
                        }}
                        style={styles.btnConfirm}>
                        <Text style={styles.colorConfirm}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )




    async function requireSms() {
        let otp = Number1 + Number2 + Number3 + Number4 + Number5 + Number6;
        if (otp.length !== 6) return;
        const responseFromSmsVerification = await fetch('http://172.21.20.116:3000/auth/sms-verification', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            body: new URLSearchParams({
                otp,
                phone_number: phoneNumber
            }).toString()
        });

        const dataFromResponse = await responseFromSmsVerification.json();
        if (dataFromResponse.status) {
            // luu vao secure store
            await SecureStore.setItemAsync('access_token', dataFromResponse.access_token);
            navigation.navigate(
                'WelcomeScreen'
            )
        } else {
            alert(dataFromResponse.message);
        }

    }
}




export default InputOTPSigninScreenComponent
