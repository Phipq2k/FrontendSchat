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
        <View style={styles.container}>
            <Image
                style={styles.imgBackground}
                source={require('../../assets/images/ChatSingle/MaskGroup.png')}
                resizeMode='stretch'
            />
            <View style={styles.groupLeft}>
                {/* nút back */}
                <TouchableOpacity
                    onPress={() => navigation.push('ListChat')}
                    style={styles.imgBackgroundContainer}
                >
                    <AntDesign name='left' size={24} color='#fff' />
                </TouchableOpacity>
                {/* phần profile option */}
                <View style={styles.profileOptions}>
                    {/* nút profile */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ChatSetting')
                        }}
                        style={styles.profile}
                    >
                        <Image
                            style={styles.imgAcc}
                            source={require('../../assets/images/ChatSingle/ImgAcc.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>

                    <View style={styles.usernameAndOnlineStatus}>
                        <Text style={styles.username}>Thúy An</Text>
                        <Text style={styles.onlineStatus}>
                            Hoạt động 2 giờ trước
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.groupRight}>
                {/* nút phone */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('WaitScreenConnect')}
                >
                    <Image
                        style={styles.phoneButton}
                        source={require('../../assets/images/ChatSingle/PhoneButton.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
                {/* nút videocall */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('VideoScreenConnect')}
                >
                    <Image
                        style={styles.videoCallButton}
                        source={require('../../assets/images/ChatSingle/VideoCallButton.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
                {/* nút settingButton */}
                <TouchableOpacity>
                    <Image
                        style={styles.settingButton}
                        source={require('../../assets/images/ChatSingle/SettingButton.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatHeader
