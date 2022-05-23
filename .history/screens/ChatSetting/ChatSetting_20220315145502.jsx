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
                source={require('../../assets/images/bg-image.jpg')}
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
                        source={require('../../assets/images/avt.png')}
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



export default ChatSetting
