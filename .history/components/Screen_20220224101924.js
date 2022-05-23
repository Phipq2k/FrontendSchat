import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import NameInput from '../screens/NameInput'

function Screen() {
    return (
        <View style={styles.container}>
            <View>
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={styles.arrowLeftIcon}
                />
            </View>
            <View>
                <Text style={styles.text}>Đăng ký</Text>
                <Text style={styles.paragraph}>
                    Bạn đã có tài khoản Schat?
                    <Text style={styles.signup}>Đăng nhập</Text>
                </Text>
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
        positon: 'absolute',
        left: '100%',
        right: '-100%',
        top: '0%',
        bottom: '0.01%',
        color: '#000',
        // width: 20,
        // height: 26,
        // marginTop: 58,
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
    paragraph: {
        marginTop: 12,
        fontFamily: 'Roboto-Light',
        fontSize: 15,
        lineHeight: 18,
        color: '#7B7B7B',
    },
    signup: {
        color: '#339af0',
    },
})

export default Screen
