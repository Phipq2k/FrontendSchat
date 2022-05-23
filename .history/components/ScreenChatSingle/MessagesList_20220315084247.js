import React, { useState, useRef, useCallback, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
//import Message from './Message';

const MessagesList = () => {
    // const [messages, setMessage]= useState([
    //   {
    //     user: 0,
    //     time: '12:00',
    //     content: 'Hello Úc Nhỏ!'

    //   },
    //   {
    //     user: 1,
    //     time: '12:05',
    //     content: 'Hi Thúy An'
    //   },
    //   {
    //     user: 1,
    //     time: '12:10',
    //     content: 'Dạo này khỏe chứ bạn?'
    //   },
    //   {
    //     user: 0,
    //     time: '12:15',
    //     content: 'Bạn đang làm gì đó'
    //   },
    //   {
    //     user: 1,
    //     time: '12:20',
    //     content: 'Nghe nhạc nào'
    //   },
    //   {
    //     user: 0,
    //     time: '12:30',
    //     content: 'Nó thật tuyệt'
    //   },
    // ]);

    // const user = useRef(0);

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
                    avatar: require('../../assets/images/ChatSingle'),
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
        // <ScrollView>
        //   {messages.map((message, index) => (
        //     <Message
        //     key={index}
        //     time={message.time}
        //     isLeft={message.user !== user.current}
        //     message={message.content}
        //     />
        //     ))}
        // </ScrollView>

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
