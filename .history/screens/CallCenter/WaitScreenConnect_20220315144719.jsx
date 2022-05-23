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

import {
    AntDesign,
    Feather,
    FontAwesome5,
    FontAwesome,
    MaterialCommunityIcons,
} from '@expo/vector-icons'

import Pulse from 'react-native-pulse'

import { WaitScreen } from '../../themes/CallCenter/WaitScreen'

const { width, height } = Dimensions.get('window')

const WaitScreenConnect = () => {
    const navigation = useNavigation()

    const [changeVolume, setChangeVolume] = useState(true)
    const [changeMicro, setChangeMicro] = useState(true)
    const [changeEvent, setChangeEvent] = useState(true)
    const [changePhone, setChangePhone] = useState(true)
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
                <Image
                    source={require('../../assets/images/CallCenter/avt.png')}
                    style={styles.avatar}
                />
                <Text style={styles.textHeader}>Gsoft Group</Text>
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
                            <Text style={styles.textBody}>{time}</Text>
                        )}
                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={onPressChangeVolume}>
                    {changeVolume ? (
                        <Feather
                            name='volume-2'
                            size={24}
                            style={styles.volume}
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name='volume-variant-off'
                            size={24}
                            style={styles.volume}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('VideoScreenConnect')}
                >
                    <FontAwesome5
                        name='video'
                        size={24}
                        style={styles.volume}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressChangeMicrophone}>
                    {changeMicro ? (
                        <FontAwesome5
                            name='microphone'
                            size={24}
                            style={styles.microphone}
                        />
                    ) : (
                        <FontAwesome
                            name='microphone-slash'
                            size={24}
                            style={styles.microphone}
                        />
                    )}
                </TouchableOpacity>
            </View>
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
                        <MaterialCommunityIcons
                            name='phone-in-talk'
                            size={24}
                            style={styles.phone}
                        />
                    </View>
                ) : (
                    <TouchableOpacity onPress={() => {}}>
                        <MaterialCommunityIcons
                            name='phone-hangup'
                            size={24}
                            style={styles.phoneHangup}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    )
}

export default WaitScreenConnect
