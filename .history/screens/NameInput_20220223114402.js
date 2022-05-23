import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

function NameInput() {
    return (
        <View>
            <View>
                <Text style={styles.username}>Họ và tên đệm</Text>
                <View style={styles.userinput}>
                    <TextInput placeholder='Nhập họ và tên đệm của bạn' />
                </View>
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
    username: {
        width: 85,
        height: 15,
        marginTop: 47,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    userinput: {
        width: 343,
        height: 38,
        marginTop: 8,
        backgroundColor: '#FDFDFD',
        borderStyle: ' solid #D9D9D9',
        // boxSizing: 'border-box',
        borderRadius: 4,
    },
})
export default NameInput
