import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ChatHeader from '../../components/ScreenChatSingle/ChatHeader'
import ChatInput from '../../components/ScreenChatSingle/ChatInput'
import MessagesList from '../../components/ScreenChatSingle/MessagesList'
import { useNavigation } from '@react-navigation/native'

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <ChatHeader />
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
