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

const { width, height } = Dimensions.get('window')

const WaitScreenConnect = () => {
    const navigation = useNavigation()

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
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.zoomButton}>
                    <AntDesign name='arrowsalt' size={24} color='white' />
                </View>
            </TouchableOpacity>

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

