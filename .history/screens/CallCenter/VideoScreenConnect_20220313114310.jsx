import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import {
    AntDesign,
    Feather,
    FontAwesome5,
    FontAwesome,
    MaterialCommunityIcons,
} from '@expo/vector-icons'

import Pulse from 'react-native-pulse'

// import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window')

const WaitScreenConnect = () => {
    // const navigation = useNavigation()

    const [changeVolume, setChangeVolume] = useState(true)
    const [changeMicro, setChangeMicro] = useState(true)
    const [changeEvent, setChangeEvent] = useState(true)
    const [changePhone, setChangePhone] = useState(true)
    const [changeImg, setChangeImg] = useState(true)
    const [changeName, setChangeName] = useState(true)
    const [changeBackground, setChangeBackground] = useState(true)
    const [footerChange, setFooterChange] = useState(true)
    const [time, setTime] = useState('00:00')

    const onPressChangeVolume = () => {
        if (changeVolume) {
            setChangeVolume(false)
        } else {
            setChangeVolume(true)
        }
    }

    const onPressChangeMicrophone = () => {
        if (changeMicro) {
            setChangeMicro(false)
        } else {
            setChangeMicro(true)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setChangeEvent(false)
            setChangeMicro(false)
            setChangeVolume(false)
            setChangePhone(false)
            setChangeImg(false)
            // setChangeBackground(false)
            setChangeName(false)
            setFooterChange(false)
            // setInterval(() => {
            //     setTime((preState) => preState + '00:01')
            // }, 1000)
        }, 2000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.zoomButton}>
                <AntDesign name='arrowsalt' size={24} color='white' />
            </View>

            <View style={styles.headerContainer}>
                {changeImg ? (
                    <Image
                        source={require('../../assets/images/CallCenter/avt.png')}
                        style={styles.avatar}
                    />
                ) : (
                    <Image
                        source={require('../../assets/images/avt-video.png')}
                        style={styles.avatarVideo}
                    />
                )}

                {changeName ? (
                    <Text style={styles.textHeader}>Gsoft Group</Text>
                ) : null}

                <View style={styles.bodyContainer}>
                    <View>
                        {changeEvent ? (
                            <View>
                                <View style={styles.iconContainerLeft}>
                                    <AntDesign
                                        name='left'
                                        size={15}
                                        color='#C0F7FF'
                                        style={{ opacity: 0.15 }}
                                    />
                                    <AntDesign
                                        name='left'
                                        size={15}
                                        color='#C0F7FF'
                                        style={{ opacity: 0.5 }}
                                    />
                                    <AntDesign
                                        name='left'
                                        size={15}
                                        color='#C0F7FF'
                                    />
                                </View>
                                <Text style={styles.textBody}>
                                    Đang kết nối với máy chủ
                                </Text>
                                <View style={styles.iconContainerRight}>
                                    <AntDesign
                                        name='right'
                                        size={15}
                                        color='#C0F7FF'
                                    />
                                    <AntDesign
                                        name='right'
                                        size={15}
                                        color='#C0F7FF'
                                        style={{ opacity: 0.5 }}
                                    />
                                    <AntDesign
                                        name='right'
                                        size={15}
                                        color='#C0F7FF'
                                        style={{ opacity: 0.15 }}
                                    />
                                </View>
                            </View>
                        ) : (
                            <Text style={styles.textBodyChange}>{time}</Text>
                        )}
                    </View>
                </View>
            </View>

            {footerChange ? (
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={onPressChangeVolume}>
                        {changeVolume ? (
                            <MaterialCommunityIcons
                                name='volume-variant-off'
                                size={24}
                                style={styles.volume}
                            />
                        ) : (
                            <Feather
                                name='volume-2'
                                size={24}
                                style={styles.volume}
                            />
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressChangeMicrophone}>
                        {changeMicro ? (
                            <FontAwesome
                                name='microphone-slash'
                                size={24}
                                style={styles.microphone}
                            />
                        ) : (
                            <FontAwesome5
                                name='microphone'
                                size={24}
                                color='black'
                                style={styles.microphone}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            ) : (
                <LinearGradient
                    colors={['rgba(39, 170, 225, 0)', '#27AAE1']}
                    style={styles.linearGradient}
                >
                    <View style={styles.footerChangeContainer}>
                        <TouchableOpacity onPress={onPressChangeVolume}>
                            {changeVolume ? (
                                <MaterialCommunityIcons
                                    name='volume-variant-off'
                                    size={24}
                                    style={styles.volume}
                                />
                            ) : (
                                <Feather
                                    name='volume-2'
                                    size={24}
                                    style={styles.volume}
                                />
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onPressChangeMicrophone}>
                            {changeMicro ? (
                                <FontAwesome
                                    name='microphone-slash'
                                    size={24}
                                    style={styles.microphone}
                                />
                            ) : (
                                <FontAwesome5
                                    name='microphone'
                                    size={24}
                                    color='black'
                                    style={styles.microphone}
                                />
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {}}>
                            <MaterialCommunityIcons
                                name='phone-hangup'
                                size={24}
                                style={styles.phoneHangup}
                            />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            )}

            <View style={styles.phoneContainer}>
                {changePhone ? (
                    <View>
                        <Pulse
                            color='#fff'
                            numPulses={3}
                            diameter={200}
                            speed={10}
                            duration={500}
                        />
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome5
                                name='video'
                                size={24}
                                style={styles.phone}
                            />
                        </TouchableOpacity>
                    </View>
                ) : null}
            </View>
        </SafeAreaView>
    )
}

export default WaitScreenConnect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27AAE1',

        // paddingTop: 50,
    },
    zoomButton: {
        width: 40,
        height: 40,
        marginTop: height * 0.061576354679803,
        marginLeft: width * 0.0426666666666667,
        borderStyle: 'solid',
        borderColor: '#1E73B9',
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: '#1E73B9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        marginTop: height * 0.0985221674876847,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    textHeader: {
        marginTop: height * 0.0369458128078818,
        fontFamily: 'roboto-medium',
        width: 174,
        height: 44,
        fontSize: 18,
        lineHeight: 21,
        color: '#F2F1F1',
        textAlign: 'center',
    },
    bodyContainer: {
        flexDirection: 'row',
    },
    textBody: {
        position: 'relative',
        width: 218,
        height: 18,
        fontFamily: 'roboto-regular',
        fontSize: 15,
        lineHeight: 16,
        alignItems: 'center',
        textAlign: 'center',
        color: '#C0F7FF',
    },
    textBodyChange: {
        position: 'relative',
        width: 218,
        height: 18,
        fontFamily: 'roboto-regular',
        fontSize: 15,
        lineHeight: 16,
        alignItems: 'center',
        textAlign: 'center',
        color: '#C0F7FF',
        marginTop: 440,
    },
    iconContainerLeft: {
        position: 'absolute',
        right: 200,
        bottom: 3,
        flexDirection: 'row',
    },
    iconContainerRight: {
        position: 'absolute',
        left: 200,
        bottom: 3,
        flexDirection: 'row',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: height * 0.1231527093596059,
    },

    footerChangeContainer: {
        height: 385,

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 100,
    },

    volume: {
        color: '#fff',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
    },

    microphone: {
        color: '#fff',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        paddingBottom: 20,
        paddingTop: 20,
        paddingRight: 25,
        paddingLeft: 25,
    },

    phoneContainer: {
        marginTop: height * 0.0862068965517241,
        // marginBottom: 45,
        alignItems: 'center',
    },
    phone: {
        color: '#1E73B9',
        borderStyle: 'solid',
        borderColor: '#27AAE1',

        borderWidth: 1,
        borderRadius: 100,
        paddingTop: height * 0.0246305418719212,
        paddingBottom: height * 0.0246305418719212,
        paddingRight: width * 0.0533333333333333,
        paddingLeft: width * 0.0533333333333333,
        backgroundColor: '#fff',
        position: 'relative',
    },

    phoneHangup: {
        color: '#FA1919',
        borderStyle: 'solid',
        borderColor: '#1E73B9',

        borderWidth: 1,
        borderRadius: 100,
        paddingTop: height * 0.0246305418719212,
        paddingBottom: height * 0.0246305418719212,
        paddingRight: width * 0.0533333333333333,
        paddingLeft: width * 0.0533333333333333,
        backgroundColor: '#fff',
        position: 'relative',
    },
    animation: {
        position: 'absolute',
    },
    avatarVideo: {
        position: 'absolute',
        top: -120,
        right: 20,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
    },
    // linearGradient: { width: 375, height: 385 },
})
