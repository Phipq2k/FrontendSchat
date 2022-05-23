import React, { useState } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const { width, height } = Dimensions.get('window')
const ChatInput = ({ navigation }) => {
    let openImagePickerAsync = async () => {
        let permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!')
            return
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync()
        console.log(pickerResult)
    }

    const [messages, setMessage] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.innerBottom}>
                <View style={styles.leftButton}>
                    <TouchableOpacity onPress={() => openImagePickerAsync()}>
                        <Image
                            style={styles.imgFolderButton}
                            source={require('../../assets/images/ChatSingle/ImageFolder.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.stikerButton}
                            source={require('../../assets/images/ChatSingle/Stiker.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.atmButton}
                            source={require('../../assets/images/ChatSingle/Attachments.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.actionButton}
                            source={require('../../assets/images/ChatSingle/Action.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.rightButton}>
                    <TouchableOpacity>
                        <Image
                            style={styles.optionButton}
                            source={require('../../assets/images/ChatSingle/Option.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        //height: 76.15,
        height: height * 0.046,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    innerTop: {
        flexDirection: 'row',
    },
    input: {
        width: width * 0.9,
        marginLeft: 10,
    },
    textInput: {
        height: height * 0.034,
    },
    microButton: {
        marginLeft: 15,
        marginTop: 9,
        width: 12,
        height: 18,
    },
    innerBottom: {
        marginTop: height * 0.0061,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftButton: {
        flexDirection: 'row',
        marginLeft: width * 0.032,
    },
    imgFolderButton: {
        width: 16,
        height: 16,
    },
    stikerButton: {
        width: 16,
        height: 16,
        marginLeft: width * 0.05,
    },
    atmButton: {
        width: 16,
        height: 16,
        marginLeft: width * 0.05,
    },
    actionButton: {
        width: 14,
        height: 14,
        marginLeft: width * 0.05,
    },
    rightButton: {
        marginLeft: width * 0.555,
    },
    optionButton: {
        width: 16.5,
        height: 4.5,
    },
})
export default ChatInput
