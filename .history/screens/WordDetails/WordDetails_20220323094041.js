import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { ChatSettingTheme } from '../../themes/ChatSetting/ChatSettingTheme'

const WordDetails = () => {
    return (
        <View>
            <ImageBackground
                source={require('../../assets/images/bg-image.jpg')}
                style={ChatSettingTheme.backgroundImage}
                resizeMode='cover'
            >
                <TouchableOpacity
                    onPress={() => {}}
                    style={ChatSettingTheme.imgBackgroundContainer}
                >
                    <AntDesign name='left' size={24} color='#fff' />
                    <Text style={ChatSettingTheme.textProfile}>Chi Tiê</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default WordDetails

const styles = StyleSheet.create({})
