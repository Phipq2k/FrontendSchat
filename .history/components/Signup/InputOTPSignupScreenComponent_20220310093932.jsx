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

const InputOTPSignupScreenComponent = ({ route, navigation }) => {

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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
    },
    arrowLeftIcon: {
        color: '#000',
        width: 20,
        height: 26,
        marginTop: 58,
    },

    containerAvoidingView: {
        flex: 1,
        // marginLeft: 16,
        // marginRight: 16,

    },
    /* TEXT OTP*/
    OTPText: {
        width: 343,
        height: 27,
        marginTop: 29,
        fontFamily: 'Roboto',
        fontSize: 23,
        fontWeight: '500',
        lineHeight: 27,
        color: '#131313',
        marginBottom: 8,

    },
    InputOTPText: {
        color: "#7B7B7B",
    },
    /* CODE OTP */
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 76,
    },
    /*CODE OTP */
    InputBox: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: "center",
        textAlign: "center",
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#D7D7D7",
    },
    boxRed: {
        color: "red",
        fontSize: 15,

        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: "center",
        textAlign: "center",
        marginBottom: 6,
    },
    /*BUTTON CONFIRM */
    btnConfirm: {
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "500",
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#27AAE1",
        borderRadius: 4,
    },
    colorConfirm: {
        color: "white",
        fontWeight: "500",
        fontSize: 15,
    },
    timer: {
        fontFamily: 'roboto-regular',
        fontSize: 15,
        lineHeight: 18,
        alignItems: 'center',
        textAlign: 'center',
        color: '#48A4D5',
        margin: 32,
    },
})

export default InputOTPSignupScreenComponent
