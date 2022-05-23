import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const WaitScreenConnect = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AntDesign
                name='arrowsalt'
                size={24}
                color='white'
                // style={styles.zoomButton}
            />

            <Image source={require('../../assets/images/CallCenter/avt.png')} />
            <Text>Gsoft Group</Text>
            <View>
                <View>
                    <AntDesign name='left' size={24} color='black' />
                    <AntDesign name='left' size={24} color='black' />
                    <AntDesign name='left' size={24} color='black' />
                </View>
                <Text>Đang kết nối với máy chủ</Text>
                <View>
                    <AntDesign name='right' size={24} color='black' />
                    <AntDesign name='right' size={24} color='black' />
                    <AntDesign name='right' size={24} color='black' />
                </View>
            </View>
            <View>
                <Feather name='volume-2' size={24} color='black' />
                <FontAwesome5 name='video' size={24} color='black' />
                <FontAwesome5 name='microphone' size={24} color='black' />
            </View>
            <MaterialCommunityIcons
                name='phone-in-talk'
                size={24}
                color='black'
            />
        </SafeAreaView>
    )
}

export default WaitScreenConnect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27AAE1',
        position: 'relative',
        paddingTop: 50,
    },
    zoomButton: {
        position: 'absolute',
        width: 36,
        height: 36,
        left: 16,
        top: 50,
        // backgroundColor: '#1E73B9',
        // paddingTop: 100,
    },
})
