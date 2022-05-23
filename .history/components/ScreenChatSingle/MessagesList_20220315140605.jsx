import React, { useState, useRef, useCallback, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

const MessagesList = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello Úc Nhỏ!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: require('../../assets/images/ChatSingle/ImgAcc.png'),
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        )
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}

const styles = StyleSheet.create({})

export default MessagesList
