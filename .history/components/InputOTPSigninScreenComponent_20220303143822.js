import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const InputOTPSigninScreenComponent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('SigninScreen')
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
                        style={styles.Input1}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input2}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input3}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input4}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input5}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input6}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                </View>

                <Text style={styles.timer}>Còn 02:00s</Text>

                <View style={styles.ConfirmContainer}>
                    <TouchableOpacity
                        /*onPress={onPressContinue}*/
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
        color: '#7B7B7B',
    },
    /* CODE OTP */
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 76,
        marginBottom: 68,
    },

    timer: {
        // width: 76,
        // height: 18,

        fontFamily: 'Roboto',
        fontSize: 15,
        lineHeight: 18,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#48A4D5',
    },

    Input1: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input2: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input3: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input4: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input5: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input6: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
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

export default InputOTPSigninScreenComponent
