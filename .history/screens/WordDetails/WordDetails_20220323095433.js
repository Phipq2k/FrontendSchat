import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'

// import { ChatSettingTheme } from '../../themes/ChatSetting/ChatSettingTheme'
const { width, height } = Dimensions.get('window')

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
                    <View style={styles.iconContainer}>
                        <AntDesign name='search' size={24} color='black' />
                        <FontAwesome5
                            name='ellipsis-v'
                            size={24}
                            color='white'
                        />
                    </View>
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
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
})
