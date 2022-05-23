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
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    screen: { backgroundColor: '#E5E5E5', height: '100%', width: '100%' },
    currentProgress: { flexDirection: 'row' },
})
