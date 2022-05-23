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
            <View>
                <Text>Lĩnh vực</Text>
                <Text>Lập trình viên</Text>
            </View>
            <View>
                <Text>Nhóm công việc</Text>
                <Text>Nhóm thiết kế CSDL</Text>
            </View>
            <View>
                <Text>Tên công việc</Text>
                <Text>Thiết kế CSDL Ver.1</Text>
            </View>
            <View>
                <Text>Nội dung</Text>
                <Text>Nhập nội dung công việc...</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.buttonContainer}>
                    <MaterialIcons name='attach-file' size={24} color='black' />
                    <Text>Tải file đính kèm</Text>
                </View>
            </TouchableOpacity>
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
        backgroundColor: '#E5E5E5',
        minHeight: '100%',
        width: '100%',
        marginLeft: 16,
        marginRight: 16,
    },

    currentProgress: { flexDirection: 'row', marginTop: 22 },
    textPercent: {
        backgroundColor: '#FA1919',
        color: '#fff',
        borderRadius: 50,
        padding: 5,
        marginLeft: 10,
    },
    buttonContainer: { flexDirection: 'row' },
})
