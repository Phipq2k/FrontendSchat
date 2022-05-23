import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { WordDetailsNavigation } from '../../navigation/TabNavigation.js'

// import { ChatSettingTheme } from '../../themes/ChatSetting/ChatSettingTheme'
const { width, height } = Dimensions.get('window')

const WordDetails = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground
                source={require('../../assets/images/bg-image.jpg')}
                style={styles.backgroundImage}
                resizeMode='cover'
            >
                <View style={styles.imgBackgroundContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name='left' size={24} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.textProfile}>Chi tiết công việc</Text>

                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            style={styles.saveContainer}
                            onPress={() => {}}
                        >
                            <AntDesign name='save' size={24} color='#fff' />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {}}>
                            <AntDesign
                                name='search1'
                                size={18}
                                color='white'
                                style={styles.search}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome5
                                name='ellipsis-v'
                                size={18}
                                color='white'
                                style={styles.ellipsis}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <WordDetailsNavigation styles={{ height: 500 }} />
        </View>
    )
}

export default WordDetails

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    backgroundImage: {
        position: 'relative',
        backgroundColor: '#0D76C1',
        // flexDirection: 'row',
    },
    imgBackgroundContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginLeft: width * 0.0426666666666667,
        marginBottom: height * 0.0246305418719212,
    },
    textProfile: {
        fontFamily: 'roboto-medium',
        fontSize: 18,
        lineHeight: 19,
        color: '#fff',
        marginTop: height * 0.0036945812807882,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    search: { marginRight: 20 },
    ellipsis: {
        marginRight: 40,
        marginLeft: 10,
        // marginTop: -5,
    },

    saveContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginRight: 20,
        // borderRadius: 50,
        marginTop: -8,
    },
    save: { color: '#fff', fontSize: 18 },
})
