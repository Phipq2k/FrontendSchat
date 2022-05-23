import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Dimensions,
} from 'react-native'
import React, { Component } from 'react'
import Welcome from './Welcome'

import { index } from '../../themes/WaittingScreen/index'

const ScreenWait = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.imgBack}
            source={require('../assets/Background.png')}
            resizeMode='stretch'
        >
            <Image
                style={styles.imgfirstclass}
                source={require('../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />
            {/* lớp thứ 1 */}
            <Image
                style={styles.imgsecondclass}
                source={require('../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />
            {/* lớp thứ 2 */}
            <Image
                style={styles.imgthirdclass}
                source={require('../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image
                        style={styles.imglogo}
                        source={require('../assets/LogoSchat.png')}
                        resizeMode='contain'
                    />

                    <Image
                        style={styles.imgmaskgroup}
                        source={require('../assets/Mask-Group.png')}
                        resizeMode='contain'
                    />

                    <Text style={styles.textfirst}>Hello Gsoft!</Text>
                    <Text style={styles.textsecond}>
                        <Text>Chào mừng bạn đến với </Text>
                        <Text style={{ fontWeight: 'bold' }}>Schat!</Text>
                    </Text>
                    <View style={styles.containerbutton}>
                        {/* Đăng nhập */}
                        <Text style={styles.textthird}>
                            Đăng nhập để vào Schat!
                        </Text>
                        <TouchableOpacity
                            style={styles.buttonlogin}
                            onPress={() => {
                                navigation.navigate('SigninScreen')
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                    color: '#0D76C1',
                                }}
                            >
                                Đăng Nhập
                            </Text>
                        </TouchableOpacity>

                        {/* Đăng ký */}
                        <TouchableOpacity
                            style={styles.buttonlogout}
                            onPress={() => {
                                navigation.navigate('SignupNameScreen')
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                    color: '#FFFFFF',
                                }}
                            >
                                Đăng Ký
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ScreenWait
