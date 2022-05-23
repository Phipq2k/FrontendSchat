import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import MainButton from '../MainButton'
import { index } from '../../themes/ChatSetting/FilesTheme'

const Files = () => {
    return (
        <View style={index.container}>
            <View style={index.infoContainer}>
                <Image
                    source={require('../../assets/images/img2.png')}
                    style={index.img}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={index.text}>BlockChain_Banner_Final.pdf</Text>
                    <Text style={index.paragraph}>189KB - Bởi Trọng Nghĩa</Text>
                </View>
            </View>
            <View style={index.infoContainer}>
                <Image
                    source={require('../../assets/images/img2.png')}
                    style={index.img}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={index.text}>BlockChain_Banner_Final.pdf</Text>
                    <Text style={index.paragraph}>189KB - Bởi Trọng Nghĩa</Text>
                </View>
            </View>
            <View style={index.infoContainer}>
                <Image
                    source={require('../../assets/images/img2.png')}
                    style={index.img}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={index.text}>BlockChain_Banner_Final.pdf</Text>
                    <Text style={index.paragraph}>189KB - Bởi Trọng Nghĩa</Text>
                </View>
            </View>
            <MainButton />
        </View>
    )
}

export default Files
