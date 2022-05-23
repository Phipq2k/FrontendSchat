import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions,
} from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import LottieView from 'lottie-react-native'
import Pulse from 'react-native-pulse'

const { width, height } = Dimensions.get('window')

const WaitScreenConnect = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.zoomButton}>
                <AntDesign name='arrowsalt' size={24} color='white' />
            </View>

            <View style={styles.headerContainer}>
                <Image
                    source={require('../../assets/images/CallCenter/avt.png')}
                    style={styles.avatar}
                />
                <Text style={styles.textHeader}>Gsoft Group</Text>
                <View style={styles.bodyContainer}>
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
                        <AntDesign name='left' size={15} color='#C0F7FF' />
                    </View>
                    <Text style={styles.textBody}>
                        Đang kết nối với máy chủ
                    </Text>
                    <View style={styles.iconContainerRight}>
                        <AntDesign name='right' size={15} color='#C0F7FF' />
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
            </View>

            <View style={styles.footerContainer}>
                <Feather
                    name='volume-2'
                    size={24}
                    style={{
                        color: '#fff',
                        borderStyle: 'solid',
                        borderColor: '#fff',
                        borderWidth: 1,
                        borderRadius: 20,
                        padding: 20,
                    }}
                />
                <FontAwesome5
                    name='video'
                    size={24}
                    color='black'
                    style={{
                        color: '#fff',
                        borderStyle: 'solid',
                        borderColor: '#fff',
                        borderWidth: 1,
                        borderRadius: 20,
                        padding: 20,
                    }}
                />
                <FontAwesome5
                    name='microphone'
                    size={24}
                    color='black'
                    style={{
                        color: '#fff',
                        borderStyle: 'solid',
                        borderColor: '#fff',
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingBottom: 20,
                        paddingTop: 20,
                        paddingRight: 25,
                        paddingLeft: 25,
                    }}
                />
            </View>
            <View style={styles.phoneContainer}>
                {/* <LottieView
                    source={require('../../assets/lottie-json/lf30_editor_59zihydy.json')}
                    autoPlay
                    loop
                /> */}
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
        // padding: 20,
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
})
