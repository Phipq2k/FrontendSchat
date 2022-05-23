import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

const Details = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Tiến độ hiện tại</Text>
                <Text style={styles.textPercent}>Tiến độ 80%</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Lĩnh vực</Text>
                <Text style={styles.textContent}>Lập trình viên</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Nhóm công việc</Text>
                <Text style={styles.textContent}>Nhóm thiết kế CSDL</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Tên công việc</Text>
                <Text style={styles.textContent}>Thiết kế CSDL Ver.1</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Nội dung</Text>
                <Text style={styles.textContent}>
                    Nhập nội dung công việc...
                </Text>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.buttonContainer}>
                        <MaterialIcons
                            name='attach-file'
                            size={24}
                            color='black'
                        />
                        <Text>Tải file đính kèm</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <Text>Trạng thái</Text>
                <Text>Cần thực hiện</Text>
            </View>
            <View>
                <Text>Thời hạn</Text>
                <Text>Không thời hạn</Text>
            </View>
            <View>
                <Text>Người được giao</Text>
                <View>
                    <View>
                        <Text>hoangan</Text>
                        <FontAwesome name='times' size={24} color='black' />
                    </View>
                    <View>
                        <Text>hoangan</Text>
                        <FontAwesome name='times' size={24} color='black' />
                    </View>
                    <View>
                        <Text>hoangan</Text>
                        <FontAwesome name='times' size={24} color='black' />
                    </View>
                    <View>
                        <Text>hoangan</Text>
                        <FontAwesome name='times' size={24} color='black' />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#fff',
        minHeight: '100%',
        width: '100%',
        margin: 16,
        padding: 16,
        fontFamily: 'roboto-regular',
    },

    currentProgress: {
        flexDirection: 'row',
        marginTop: 22,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D3D3D3',
        borderStyle: 'solid',
        paddingBottom: 20,
    },
    textProgress: {
        fontSize: 12,
        lineHeight: 14,
        alignItems: 'center',
        color: '#919191',
        marginTop: 10,
    },
    textPercent: {
        backgroundColor: '#FA1919',
        color: '#fff',
        borderRadius: 50,
        padding: 5,
        marginLeft: 10,
        fontSize: 14,
    },
    textContent: {
        color: '#000',
        borderRadius: 50,
        marginTop: 10,
        fontSize: 14,
    },
    container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#D3D3D3',
        borderStyle: 'solid',
        paddingBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 16,
    },
})
