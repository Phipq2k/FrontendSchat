import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

function NameInput() {
    return (
        <View>
            <View>
                <Text style={styles.userName}>Họ và tên đệm</Text>
                <TextInput
                    placeholder='Nhập họ và tên đệm của bạn'
                    style={styles.nameinput}
                />
            </View>
            <View>
                <Text>Tên</Text>
                <TextInput placeholder='Nhập tên của bạn' />
            </View>
            <Button title='Tiếp theo' />
        </View>
    )
}

const styles = StyleSheet.create({
    userName: {
        width: 85,
        height: 15,
        marginTop: 47,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    nameinput: {
        marginTop: 8,
    },
})
export default NameInput
