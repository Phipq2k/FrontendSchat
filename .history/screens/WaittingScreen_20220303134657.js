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

var height = Dimensions.get('window').height
var width = Dimensions.get('window').width

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

const styles = StyleSheet.create({
    imgBack: {
        height: height,
        width: width,
        position: 'absolute',
    },
    imgfirstclass: {
        width: width,
        height: height * 0.58,
        position: 'absolute',
        tintColor: '#36b0e3',
    },
    imgsecondclass: {
        width: width,
        height: height * 0.55,
        position: 'absolute',
        tintColor: '#5ec0e9',
    },
    imgthirdclass: {
        width: width,
        height: height * 0.525,
        position: 'absolute',
    },
    container: {
        flex: 1,
        height: height * 0.5,
        width: width,
        alignItems: 'center',
    },
    imglogo: {
        width: width * 0.233,
        height: height * 0.048,
        marginTop: height * 0.045,
    },
    imgmaskgroup: {
        width: width,
        height: height * 0.38,
        marginTop: height * 0.016,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textfirst: {
        marginTop: height * 0.1,
        fontSize: height * 0.046,
        color: '#FFFFFF',
    },
    textsecond: {
        fontFamily: 'Roboto',
        fontSize: height * 0.018,
        color: '#FFFFFF',
    },
    containerbutton: {
        height: height * 0.5,
        width: width,
        alignItems: 'center',
    },
    textthird: {
        marginTop: height * 0.085,
        marginBottom: 6,
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#FFFFFF',
    },
    buttonlogin: {
        width: width * 0.912,
        height: height * 0.057, // cần xem lại
        backgroundColor: '#BEF7FF',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonlogout: {
        width: width * 0.912,
        height: height * 0.057, // cần xem lại
        marginTop: height * 0.0098,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C0F7FF',
        backgroundColor: '#27aae1',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default ScreenWait
