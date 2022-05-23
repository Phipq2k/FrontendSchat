import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    screen: { backgroundColor: '#E5E5E5', height: '100%', width: '100%' },
    currentProgress: { flexDirection: 'row' },
})
