import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
function Screen() {
    return (
        <View>
            <View>
                <AntDesign name='arrowleft' size={24} color='black' />
            </View>
            <View>
                <Text>Đăng ký</Text>
                <Text>Bạn đã có tài khoản Schat? Đăng nhập</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Screen
