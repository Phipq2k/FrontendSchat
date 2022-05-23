import React, { useState, useEffect } from 'react'
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
    const [image, setImage] = useState(null)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            //allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log(result)

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerBottom}>
                <View style={styles.leftButton}>
                    <TouchableOpacity onPress={pickImage}>
                        <Image
                            style={styles.imgFolderButton}
                            source={require('../assets/ImageFolder.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.stikerButton}
                            source={require('../assets/Stiker.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.atmButton}
                            source={require('../assets/Attachments.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.actionButton}
                            source={require('../assets/Action.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.rightButton}>
                    <TouchableOpacity>
                        <Image
                            style={styles.optionButton}
                            source={require('../assets/Option.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={() => {navigation.navigate('ImagePickerScreen')}}> */}
            </View>
        </View>
    )
}

export default ChatInput
