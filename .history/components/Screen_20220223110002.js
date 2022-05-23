import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import NameInput from '../screens/NameInput'
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
  container:{
    
  }
    arrowLeftIcon: {
        width: 18,
        height: 10,
        marginTop: 58,
        marginLeft: 16,
    },
    text: {
        flex: 1,
        fontSize: 23,
        fontFamily: 'Roboto-Medium',
        lineHeight: 27,
        alignItems: 'flex-end',
        color: '#131313',
        marginTop: 29,
        marginLeft: 16,
        marginTop: 16,
    },
})

export default Screen
