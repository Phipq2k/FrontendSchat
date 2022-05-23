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

import { useDispatch } from 'react-redux';
import { SetAccessToken, SetIdUser } from "../../store/actions/auth.action";

// var EC = require('elliptic').ec;
// var ec = new EC('curve25519');
// let A = ec.genKeyPair();



const ScreenWait = ({ navigation }) => {

    
    // var B = ec.genKeyPair();
    // var C = ec.genKeyPair();

    // var AB = A.getPublic().mul(B.getPrivate())
    // var BC = B.getPublic().mul(C.getPrivate())
    // var CA = C.getPublic().mul(A.getPrivate())

    // var ABC = AB.mul(C.getPrivate())
    // var BCA = BC.mul(A.getPrivate())
    // var CAB = CA.mul(B.getPrivate())

    // console.log(ABC.getX().toString(16))

    const dispatch = useDispatch();

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        try {
            SecureStore.getItemAsync('idUser').then((value) => {
                if (value != null) {
                    dispatch(SetIdUser(value))
                }
            })
            SecureStore.getItemAsync('accessToken').then((value) => {
                if (value != null) {
                    dispatch(SetAccessToken(value))
                    navigation.navigate('ListChat')
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
