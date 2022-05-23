import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import TabNavigation from '../../navigation/TabNavigation.js'
import SwitchMain from '../../components/SwitchMain'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

const ChatSetting = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <StatusBar style='light' />
            <ImageBackground
                source={require('../assets/images/bg-image.jpg')}
                style={styles.backgroundImage}
                resizeMode='cover'
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.imgBackgroundContainer}
                >
                    <AntDesign name='left' size={24} color='#fff' />
                    <Text style={styles.textProfile}>Hồ sơ</Text>
                </TouchableOpacity>
            </ImageBackground>

            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../assets/images/avt.png')}
                        style={styles.avatar}
                    />
                    <FontAwesome
                        name='camera'
                        size={18}
                        color='black'
                        style={styles.imgCamera}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.textInfo}>Gsoft Group</Text>
                        <AntDesign name='edit' size={22} color='black' />
                    </View>
                </View>

                <View style={{ height: 300 }}>
                    <TabNavigation />
                </View>

                <View style={styles.empty}></View>

                <View style={styles.otherContainer}>
                    <Text style={styles.setupOther}>Cài đặt khác</Text>

                    <View style={styles.hideContainer}>
                        <Text style={styles.hideText}>Ẩn trò chuyện</Text>
                        <SwitchMain />
                    </View>
                    <View style={styles.showContainer}>
                        <Text style={styles.showText}>Hiện thông báo</Text>
                        <SwitchMain />
                    </View>
                    <Text style={styles.changeImg}>Thay đổi ảnh nền</Text>
                    <Text style={styles.outGroup}>Rời nhóm</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: width * 0.0426666666666667,
        marginLeft: width * 0.0426666666666667,
    },
    backgroundImage: {
        backgroundColor: '#0D76C1',
    },
    imgBackgroundContainer: {
        flexDirection: 'row',
        marginTop: height * 0.0178571428571429,
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

    headerContainer: {
        marginTop: height * 0.0147783251231527,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: height * 0.0307881773399015,
    },
    avatar: {
        borderRadius: 100,
        width: 128,
        height: 121,
        overflow: 'hidden',
        position: 'relative',
    },
    imgCamera: {
        position: 'absolute',
        right: 120,
        top: 85,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 2,
        paddingRight: width * 0.0266666666666667,
        paddingLeft: width * 0.0266666666666667,
        paddingTop: height * 0.0123152709359606,
        paddingBottom: height * 0.0123152709359606,
        backgroundColor: '#E7E7E7',
        color: '#606060',
        borderRadius: 50,
        textAlign: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: height * 0.0073891625615764,
    },
    textInfo: {
        fontSize: 16,
        fontFamily: 'roboto-medium',
        marginRight: width * 0.016,
        marginLeft: width * 0.032,
    },
    empty: {
        backgroundColor: '#F2F1F1',
    },
    otherContainer: {
        backgroundColor: '#fff',
    },

    setupOther: {
        fontFamily: 'roboto-medium',
        fontSize: 18,
        lineHeight: 19,
        color: '#000000',
        marginTop: height * 0.0246305418719212,
    },
    hideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        borderStyle: 'solid',
    },
    hideText: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#797979',
        marginTop: height * 0.0246305418719212,
        marginBottom: height * 0.0123152709359606,
    },

    showContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        borderStyle: 'solid',
    },
    showText: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        lineHeight: 16,
        color: '#797979',
        marginTop: height * 0.0246305418719212,
    },
    changeImg: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        lineHeight: 16,
        color: '#797979',
        marginTop: height * 0.0246305418719212,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        borderStyle: 'solid',
        paddingBottom: 7,
    },
    outGroup: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        lineHeight: 16,
        color: '#FF0000',
        marginBottom: height * 0.0246305418719212,
        marginTop: height * 0.0246305418719212,
    },
})

export default ChatSetting
