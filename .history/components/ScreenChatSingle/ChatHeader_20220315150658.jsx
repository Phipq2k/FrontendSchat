import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import { ChatHeaderTheme } from '../../themes/ScreenChatSingle/ChatHeaderTheme.js'
const ChatHeader = () => {
    const navigation = useNavigation()

    return (
        <View style={ChatHeaderTheme.container}>
            <Image
                style={ChatHeaderTheme.imgBackground}
                source={require('../../assets/images/ChatSingle/MaskGroup.png')}
                resizeMode='stretch'
            />
            <View style={ChatHeaderTheme.groupLeft}>
                {/* nút back */}
                <TouchableOpacity
                    onPress={() => navigation.push('ListChat')}
                    style={ChatHeaderTheme.imgBackgroundContainer}
                >
                    <AntDesign name='left' size={24} color='#fff' />
                </TouchableOpacity>
                {/* phần profile option */}
                <View style={ChatHeaderTheme.profileOptions}>
                    {/* nút profile */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ChatSetting')
                        }}
                        style={ChatHeaderTheme.profile}
                    >
                        <Image
                            style={ChatHeaderTheme.imgAcc}
                            source={require('../../assets/images/ChatSingle/ImgAcc.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>

                    <View style={ChatHeaderTheme.usernameAndOnlineStatus}>
                        <Text style={ChatHeaderTheme.username}>Thúy An</Text>
                        <Text style={ChatHeaderTheme.onlineStatus}>
                            Hoạt động 2 giờ trước
                        </Text>
                    </View>
                </View>
            </View>

            <View style={ChatHeaderTheme.groupRight}>
                {/* nút phone */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('WaitScreenConnect')}
                >
                    <Image
                        style={ChatHeaderTheme.phoneButton}
                        source={require('../../assets/images/ChatSingle/PhoneButton.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
                {/* nút videocall */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('VideoScreenConnect')}
                >
                    <Image
                        style={ChatHeaderTheme.videoCallButton}
                        source={require('../../assets/images/ChatSingle/VideoCallButton.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
                {/* nút settingButton */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('ChatSetting')}
                >
                    <Image
                        style={ChatHeaderTheme.settingButton}
                        source={require('../../assets/images/ChatSingle/SettingButton.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatHeader
