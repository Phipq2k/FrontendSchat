import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native'

const { width, height } = Dimensions.get('window')
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
                <TouchableOpacity>
                    <Image
                        style={styles.backButton}
                        source={require('.../../assets/images/ChatSingle/BackButton.png')}
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
        flexDirection: 'row',
        marginLeft: width * 0.042,
        marginTop: height * 0.035,
    },
    groupRight: {
        height: 16,
        flexDirection: 'row',
        marginLeft: width * 0.32,
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
        width: width * 0.06661,
        height: height * 0.037812,
        padding: 10,
        borderRadius: 50,
        marginLeft: width * 0.021,
    },
    backButton: {
        marginTop: height * 0.012,
        width: width * 0.02133333333,
        height: height * 0.01641625615,
    },
    phoneButton: {
        width: width * 0.042666,
        height: height * 0.019704,
    },
    videoCallButton: {
        width: width * 0.048,
        height: height * 0.01330049261,
        marginLeft: width * 0.05,
    },
    settingButton: {
        width: width * 0.0416,
        height: height * 0.01330049261,
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
