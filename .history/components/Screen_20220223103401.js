import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import NameInput from '../screens/NameInput'
function Screen() {
    return (
        <View>
            <View>
                <AntDesign name='arrowleft' sytle={styles.arrowLeftIcon} />
            </View>
            <View>
                <Text>Đăng ký</Text>
                <Text>Bạn đã có tài khoản Schat? Đăng nhập</Text>
            </View>
            <NameInput />
        </View>
    )
}

const styles = StyleSheet.create({
    arrowLeftIcon: {
        flex: 1,
        width: 18,
        height: 10,
        marginTop: 58,
        marginLeft: 16,
    },
})

export default Screen
