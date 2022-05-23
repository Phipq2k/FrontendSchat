import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

// import { ChatSettingTheme } from '../../themes/ChatSetting/ChatSettingTheme'

const WordDetails = () => {
    return (
        <View>
            <ImageBackground
                source={require('../../assets/images/bg-image.jpg')}
                style={styles.backgroundImage}
                resizeMode='cover'
            >
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.imgBackgroundContainer}
                >
                    <AntDesign name='left' size={24} color='#fff' />
                    <Text style={styles.textProfile}>Chi tiết công việc</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default WordDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: width * 0.0426666666666667,
        paddingLeft: width * 0.0426666666666667,
        backgroundColor: '#fff',
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
})
