import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = () => {
    return (
        <View style={styles.screen}>
            <View>
                <Text>Tiến độ hiện tại</Text>
                <Text>Tiến độ 80%</Text>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    screen: { backgroundColor: '#E5E5E5', height: '100%', width: '100%' },
})
