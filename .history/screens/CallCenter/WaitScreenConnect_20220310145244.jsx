import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'

const WaitScreenConnect = () => {
    return (
        <View style={styles.container}>
            <AntDesign name='arrowsalt' size={24} color='black' />
            <View>
                <Image
                    source={require('../../assets/images/CallCenter/avt.png')}
                />
            </View>
        </View>
    )
}

export default WaitScreenConnect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27AAE1',
    },
})
