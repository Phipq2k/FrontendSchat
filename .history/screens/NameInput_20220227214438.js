import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
} from 'react-native'
import Screen from '../components/Screen'
import MainButton from '../components/MainButton'
import { useForm, Controller } from 'react-hook-form'

const NavigateToDetails = (props) => {
    props.navigation.navigate('Second')
}
function NameInput(props) {
    const [enteredFirstName, setEnteredFirstName] = useState('')
    const [enteredLastName, setEnteredLastName] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    // const firstNameChangeHandler = () => {
    // if (enteredFirstName === '') {
    //     setBtnDisabled(true)
    //     setMessage(null)
    // }
    // } else if (
    //     enteredFirstName.trim().length > 25 &&
    //     enteredLastName.trim().length > 25
    // ) {
    //     setBtnDisabled(true)
    //     setMessage('Vui lòng nhập dưới 25 ký tự')
    // }
    // else {
    //     setBtnDisabled(false)
    //     setMessage(null)
    // }
    // setEnteredFirstName('')
    //     if (enteredFirstName.trim().length > 25) {
    //         setBtnDisabled(true)
    //         Alert.alert('Errors', 'Vui lòng nhập dưới 25 ký tự!!!')
    //     } else {
    //         setBtnDisabled(false)
    //     }
    // }
    const lastNameChangeHandler = () => {
        //     if (enteredLastName === '') {
        //         setBtnDisabled(true)
        //         setMessage(null)
        //     }
        // } else if (
        //     enteredlastName.trim().length > 25 &&
        //     enteredLastName.trim().length > 25
        // ) {
        //     setBtnDisabled(true)
        //     setMessage('Vui lòng nhập dưới 25 ký tự')
        // }
        //     else {
        //         setBtnDisabled(false)
        //         setMessage(null)
        //     }
        //     setEnteredLastName('')
        if (enteredLastName.trim().length > 25) {
            setBtnDisabled(true)
            Alert.alert('Errors', 'Vui lòng nhập dưới 25 ký tự!!!')
        } else {
            setBtnDisabled(false)
        }
    }

    return (
        <View style={styles.container}>
            <Screen />
            <View>
                <View>
                    <Text style={styles.firstName}>Họ và tên đệm</Text>

                    <TextInput
                        style={styles.firstNameInput}
                        // autoFocus={true}
                        placeholder='Nhập họ và tên đệm của bạn'
                        // value={enteredFirstName}
                        onChangeText={firstNameChangeHandler}
                        maxLength={25}
                    />
                </View>

                <View>
                    <Text style={styles.lastName}>Tên</Text>

                    <TextInput
                        style={styles.lastNameInput}
                        placeholder='Nhập tên của bạn'
                        maxLength={25}
                        // value={enteredLastName}
                        onChangeText={lastNameChangeHandler}
                    />
                </View>

                {/* <TouchableOpacity onPress={() => navigation.navigate('Second')}>
                    <MainButton
                        sytle={styles.button}
                        onPress={() => NavigateToDetails(props)}
                    >
                        Tiếp theo
                    </MainButton>
                </TouchableOpacity> */}
                <View style={styles.buttonContainer}>
                    <Button
                        title='Tiếp theo'
                        sytle={styles.button}
                        // onPress={() => NavigateToDetails(props)}
                        onPress={btnHandlerSubmit}
                        disabled={btnDisabled}
                    />
                </View>
                {/* <View>
                    {!!message && <Text style={styles.message}>{message}</Text>}
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'roboto-regular',
        marginRight: 16,
        marginLeft: 16,
    },
    firstName: {
        width: 90,
        height: 15,
        marginTop: 47,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    firstNameInput: {
        height: 38,
        marginTop: 8,
        backgroundColor: '#FDFDFD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 4,
        paddingTop: 8,
        paddingLeft: 13,
        paddingBottom: 10,
    },
    lastName: {
        marginTop: 16,
        width: 22,
        height: 15,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    lastNameInput: {
        height: 38,
        marginTop: 8,
        fontSize: 13,
        lineHeight: 15,
        color: '#404040',
        backgroundColor: '#FDFDFD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 4,
        paddingTop: 8,
        paddingLeft: 13,
        paddingBottom: 10,
    },
    buttonContainer: {
        marginTop: 32,
    },
    button: {
        backgroundColor: '#27AAE1',
        borderRadius: 4,
        fontFamily: 'roboto-medium',
        fontSize: 15,
        lineHeight: 18,
    },
    message: {
        color: 'red',
    },
})
export default NameInput
