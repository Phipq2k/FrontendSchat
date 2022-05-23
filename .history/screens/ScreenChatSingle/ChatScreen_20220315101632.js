import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ChatHeader from '../../components/ScreenChatSingle/ChatHeader'
import ChatInput from '../../components/ScreenChatSingle/ChatInput'
import MessagesList from '../../components/ScreenChatSingle/MessagesList'
// import ImagePickerScreen from '../components/ImagePickerScreen'

const ChatScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ChatHeader />
            </TouchableOpacity>

            <MessagesList />
            <ChatInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
})

export default ChatScreen
