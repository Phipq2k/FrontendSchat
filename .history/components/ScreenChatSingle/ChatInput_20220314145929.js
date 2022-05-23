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

const { width, height } = Dimensions.get('window')
const ChatInput = ({ navigation }) => {
    const [messages, setMessage] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.innerBottom}>
                <TouchableOpacity>
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
                <TouchableOpacity>
                    <Image
                        style={styles.optionButton}
                        source={require('../assets/Option.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        //height: 76.15,
        height: height * 0.041,
        backgroundColor: 'white',
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
    imgFolderButton: {
        width: width * 0.04266666666,
        height: height * 0.01970443349,
        marginLeft: width * 0.03,
    },
    stikerButton: {
        width: width * 0.04266666666,
        height: height * 0.01970443349,
        marginLeft: width * 0.05,
    },
    atmButton: {
        width: width * 0.04266666666,
        height: height * 0.01970443349,
        marginLeft: width * 0.05,
    },
    actionButton: {
        width: width * 0.04266666666,
        height: height * 0.01970443349,
        marginLeft: width * 0.05,
    },
    optionButton: {
        width: width * 0.0437333333333333,
        height: height * 0.008,
        marginLeft: width * 0.59,
    },
})
export default ChatInput
