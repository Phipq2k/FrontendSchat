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

const { width, height } = Dimensions.get('window')

export default class ScreenWait extends Component {
    render() {
        const { navigation } = this.props
        return (
            <ImageBackground
                style={{ height: height, width: width, position: 'absolute' }}
                source={require('../assets/Background.png')}
                resizeMode='stretch'
            >
                <Image
                    style={{
                        width: width,
                        position: 'absolute',
                        tintColor: '#36b0e3',
                    }}
                    source={require('../assets/Backgroundtop.png')}
                    resizeMode='stretch'
                />
                {/* lớp thứ 1 */}
                <Image
                    style={{
                        width: width,
                        height: height - 19.5,
                        position: 'absolute',
                        tintColor: '#5ec0e9',
                    }}
                    source={require('../assets/Backgroundtop.png')}
                    resizeMode='stretch'
                />
                {/* lớp thứ 2 */}
                <Image
                    style={{
                        width: width,
                        height: height - 35,
                        position: 'absolute',
                    }}
                    source={require('../assets/Backgroundtop.png')}
                    resizeMode='stretch'
                />
                <SafeAreaView>
                    <View
                        style={{
                            height: 0.5 * height,
                            width: width,
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../assets/LogoSchat.png')}
                            style={{
                                width: 98,
                                height: 38.82,
                                marginTop: 36.75,
                            }}
                        />

                        <Image
                            source={require('../assets/Mask-Group.png')}
                            style={{
                                width: 375,
                                height: 313.87,
                                marginTop: 25,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        />

                        <Text
                            style={{
                                marginTop: 65,
                                fontSize: 24,
                                color: '#FFFFFF',
                            }}
                        >
                            Hello Gsoft!
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Roboto',
                                fontSize: 13,
                                color: '#FFFFFF',
                            }}
                        >
                            <Text>Chào mừng bạn đến với </Text>
                            <Text style={{ fontWeight: 'bold' }}>Schat!</Text>
                        </Text>
                        <View
                            style={{
                                height: 0.5 * height,
                                wight: width,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {/* Đăng nhập */}
                            <Text
                                style={{
                                    marginTop: 60,
                                    marginBottom: 6,
                                    fontFamily: 'Roboto',
                                    fontSize: 13,
                                    color: '#FFFFFF',
                                }}
                            >
                                Đăng nhập để vào Schat!
                            </Text>
                            <TouchableOpacity
                                style={{
                                    width: 342.91,
                                    height: 38,
                                    backgroundColor: '#BEF7FF',
                                    borderRadius: 4,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() => {
                                    navigation.navigate('SignIn')
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
                                style={{
                                    width: 342.91,
                                    height: 38,
                                    marginTop: 8,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: '#C0F7FF',
                                    backgroundColor: '#27aae1',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() => {
                                    navigation.navigate('NameInput')
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
}

const styles = StyleSheet.create({})
