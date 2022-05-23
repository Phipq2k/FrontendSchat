import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import NameInput from '../screens/NameInput'
import 
function Screen() {
    return (
        <View style={styles.container}>
            <View>
                <AntDesign name='arrowleft' style={styles.arrowLeftIcon} />
            </View>
            <View>
                <Text style={styles.text}>Đăng ký</Text>
                <Text>Bạn đã có tài khoản Schat? Đăng nhập</Text>
            </View>
            <NameInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
        marginLeft: 16,
    },
    arrowLeftIcon: {
        width: 18,
        height: 10,
        marginTop: 58,
    },
    text: {
        width: 343,
        height: 27,
        fontSize: 23,
        fontFamily: 'Roboto-Medium',
        lineHeight: 27,
        alignItems: 'flex-end',
        color: '#131313',
        marginTop: 29,
    },
})

export default Screen
