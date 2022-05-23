import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from 'react-native'
import React from 'react'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'

import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

const Logout = () => {
    const navigation = useNavigation()

    const removeData = async () => {
        try {
            await SecureStore.deleteItemAsync('phoneNumber')
            navigation.navigate('WaittingScreen')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <ImageBackground
                source={require('../../assets/images/bg-image.jpg')}
                style={styles.backgroundImage}
                resizeMode='cover'
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.imgBackgroundContainer}
                >
                    <AntDesign name='left' size={24} color='#fff' />
                    <Text style={styles.textProfile}>Trở về</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.screen}>
                <TouchableOpacity style={styles.WordDetails}>
                    <Text>Phân công công việc</Text>
                </TouchableOpacity>
                <Button
                    style={styles.button}
                    title='Đăng xuất'
                    onPress={removeData}
                />
            </View>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    button: {
        borderRadius: 100,
    },

    // container: {
    //     flex: 1,
    //     paddingRight: width * 0.0426666666666667,
    //     paddingLeft: width * 0.0426666666666667,
    //     backgroundColor: '#fff',
    // },
    backgroundImage: {
        backgroundColor: '#0D76C1',
    },
    imgBackgroundContainer: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: width * 0.0426666666666667,
        marginBottom: height * 0.0246305418719212,
    },
    textProfile: {
        fontFamily: 'roboto-medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#fff',
        marginLeft: width * 0.032,
        marginTop: height * 0.0036945812807882,
    },
})
