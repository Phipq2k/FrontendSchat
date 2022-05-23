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
import { ChatInputTheme } from '../../themes/ScreenChatSingle/ChatInputTheme.js'

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
        <View style={ChatInputTheme.container}>
            <View style={ChatInputTheme.innerBottom}>
                <View style={ChatInputTheme.leftButton}>
                    <TouchableOpacity onPress={() => openImagePickerAsync()}>
                        <Image
                            style={ChatInputTheme.imgFolderButton}
                            source={require('../../assets/images/ChatSingle/ImageFolder.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={ChatInputTheme.stikerButton}
                            source={require('../../assets/images/ChatSingle/Stiker.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={ChatInputTheme.atmButton}
                            source={require('../../assets/images/ChatSingle/Attachments.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={ChatInputTheme.actionButton}
                            source={require('../../assets/images/ChatSingle/Action.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>

                <View style={ChatInputTheme.rightButton}>
                    <TouchableOpacity>
                        <Image
                            style={ChatInputTheme.optionButton}
                            source={require('../../assets/images/ChatSingle/Option.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ChatInput
