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

const { width, height } = Dimensions.get('window')

const { navigation } = useNavigation
const ChatHeader = () => {
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
                    onPress={() => {
                        navigation.navigate('ListChat')
                    }}
                >
                    <Image
                        style={styles.backButton}
                        source={require('../../assets/images/ChatSingle/BackButton.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
                {/* phần profile option */}
                <View style={styles.profileOptions}>
                    {/* nút profile */}
                    <TouchableOpacity style={styles.profile}>
                        <Image
                            style={styles.imgAcc}
                            source={require('../../assets/images/ChatSingle/ImgAcc.png')}
                            resizeMode='stretch'
                        />
                        <View style={styles.usernameAndOnlineStatus}>
                            <Text style={styles.username}>Thúy An</Text>
                            <Text style={styles.onlineStatus}>
                                Hoạt động 2 giờ trước
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.groupRight}>
                {/* nút phone */}
                <TouchableOpacity>
                    <Image
                        style={styles.phoneButton}
                        source={require('../../assets/images/ChatSingle/PhoneButton.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
                {/* nút videocall */}
                <TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        height: height * 0.0911330049261084,
        flexDirection: 'row',
        backgroundColor: '#0D76C1',
    },
    groupLeft: {
        height: height * 0.0455665024630542,
        width: width * 0.4,
        flexDirection: 'row',
        marginLeft: width * 0.042,
        marginTop: height * 0.035,
    },
    groupRight: {
        height: height * 0.02,
        flexDirection: 'row',
        marginLeft: width * 0.27,
        marginTop: height * 0.05,
        alignItems: 'center',
    },
    imgBackground: {
        width: width,
        height: height * 0.0911330049261084,
        position: 'absolute',
    },
    profile: {
        flexDirection: 'row',
    },
    imgAcc: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginLeft: width * 0.025,
    },
    backButton: {
        marginTop: height * 0.012,
        width: 8,
        height: 13.3,
    },
    phoneButton: {
        width: 16,
        height: 16,
    },
    videoCallButton: {
        width: 15.6,
        height: 11,
        marginLeft: width * 0.05,
    },
    settingButton: {
        width: 15.6,
        height: 11,
        marginLeft: width * 0.05,
    },
    username: {
        marginLeft: width * 0.0213333333333333,
        fontFamily: 'Roboto',
        color: '#F2F1F1',
        fontSize: width * 0.0426666666666667,
        fontWeight: '500',
    },
    onlineStatus: {
        marginLeft: width * 0.0213333333333333,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: width * 0.0266666666666667,
        color: '#F2F1F1',
    },
})

export default ChatHeader
