import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native'
import React, { useEffect } from 'react'

import * as SecureStore from 'expo-secure-store'

import { index } from '../../themes/WaittingScreen/index'

const ScreenWait = ({ navigation }) => {
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        try {
            SecureStore.getItemAsync('phoneNumber').then((value) => {
                if (value != null) {
                    return value
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ImageBackground
            style={index.imgBack}
            source={require('../../assets/Background.png')}
            resizeMode='stretch'
        >
            <Image
                style={index.imgfirstclass}
                source={require('../../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />
            {/* lớp thứ 1 */}
            <Image
                style={index.imgsecondclass}
                source={require('../../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />
            {/* lớp thứ 2 */}
            <Image
                style={index.imgthirdclass}
                source={require('../../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={index.container}>
                    <Image
                        style={index.imglogo}
                        source={require('../../assets/LogoSchat.png')}
                        resizeMode='contain'
                    />

                    <Image
                        style={index.imgmaskgroup}
                        source={require('../../assets/Mask-Group.png')}
                        resizeMode='contain'
                    />

                    <Text style={index.textfirst}>Hello Gsoft!</Text>
                    <Text style={index.textsecond}>
                        <Text>Chào mừng bạn đến với </Text>
                        <Text style={{ fontWeight: 'bold' }}>Schat!</Text>
                    </Text>
                    <View style={index.containerbutton}>
                        {/* Đăng nhập */}
                        <Text style={index.textthird}>
                            Đăng nhập để vào Schat!
                        </Text>
                        <TouchableOpacity
                            style={index.buttonlogin}
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
                            style={index.buttonlogout}
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
