import React, { useState, useEffect, useRef } from 'react'
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const InputOTPScreenComponent = ({ navigation }) => {
    let textInput = useRef(null)
    const lengthInput = 6
    const [internalVal, setInternalVal] = useState('')

    const onPressContinue = () => {
        if (internalVal) {
            navigation.navigate('HomeScreen')
        } else {
            alert('Vui lòng nhập mã OTP')
        }
    }
    const onChangeText = (val) => {
        setInternalVal(val)
    }

    useEffect(() => {
        textInput.focus()
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

                <View>
                    <TextInput
                        ref={(input) => (textInput = input)}
                        keyboardType='numeric'
                        onChangeText={onChangeText}
                        style={{ width: 0, height: 0 }}
                        value={internalVal}
                        maxLength={lengthInput}
                        returnKeyType='done'
                    />
                    <View style={styles.containerInput}>
                        {Array(lengthInput)
                            .fill()
                            .map((data, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.cellView,
                                        {
                                            borderColor:
                                                index === internalVal.length
                                                    ? '#FB6C6A'
                                                    : '#234DB7',
                                        },
                                    ]}
                                >
                                    <Text
                                        style={styles.cellText}
                                        onPress={() => textInput.focus()}
                                    >
                                        {internalVal && internalVal.length > 0
                                            ? internalVal[index]
                                            : ''}
                                    </Text>
                                </View>
                            ))}
                    </View>
                </View>

                <View style={styles.ConfirmContainer}>
                    <TouchableOpacity
                        onPress={onPressContinue}
                        style={styles.btnConfirm}
                    >
                        <Text style={styles.colorConfirm}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 16,
        marginLeft: 16,
    },
    arrowLeftIcon: {
        color: '#000',
        width: 20,
        height: 26,
        marginTop: 58,
    },
    containerAvoidingView: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
    },
    /* TEXT OTP*/
    OTPText: {
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
    InputOTPText: {
        color: '#7B7B7B',
    },
    /* CODE OTP */
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75,
        marginBottom: 68,
    },
    cellView: {
        paddingVertical: 11,
        width: 52,
        height: 52,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
        backgroundColor: 'white',
    },
    cellText: {
        textAlign: 'center',
        fontSize: 17,
        color: 'black',
    },
    /*BUTTON CONFIRM */
    btnConfirm: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '500',
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27AAE1',
        borderRadius: 4,
    },
    colorConfirm: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
    },
})
export default InputOTPScreenComponent
