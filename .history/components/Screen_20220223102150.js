import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
function Screen() {
    return (
        <View>
            <View>
                <AntDesign name='arrowleft' />
            </View>
            <View>
                <Text>Đăng ký</Text>
                <Text>Bạn đã có tài khoản Schat? Đăng nhập</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    arrowLeftIcon: {
        paddingTop: 58,
        paddingLeft: 16,
    },
})

export default Screen
