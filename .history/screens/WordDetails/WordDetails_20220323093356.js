import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
                    onPress={() => navigation.goBack()}
                    style={ChatSettingTheme.imgBackgroundContainer}
                >
                    <AntDesign name='left' size={24} color='#fff' />
                    <Text style={ChatSettingTheme.textProfile}>Hồ sơ</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default WordDetails

const styles = StyleSheet.create({})
