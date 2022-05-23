import React, { useState, useRef, useCallback, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'

const MessagesList = (props) => {
    const { accessToken } = useSelector((state) => state.userReducer)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            console.log('id' + props.value.id)
            try {
                const socket = io('http://172.21.20.67:3000', {
                    extraHeaders: {
                        Authorization: 'Bearer ' + accessToken,
                    },
                })
                // setMessages[[]]
                // console.log(messages)
                socket.on('showAllChatOnRoom', (allMessages) => {
                    setMessages(allMessages)
                    console.log(messages)
                })
                socket.emit('joinRoom', props.value.id)
            } catch (error) {
                console.log(error)
            }
            // setIsBusy(false)
            return () => {
                console.log('cleaned up')
            }
        }
        fetchData()
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        )
    }, [])

    return (
        <View>
            <FlatList
                data={messages}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <Text>{item.message_content}</Text>}
            />
            {/* 
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: 1,
            }}
        /> */}
        </View>
        // <FlatList
        //     data={messages}
        //     keyExtractor={(item) => item._id}
        //     renderItem={({ item }) => renderItem(item)}
        // />
    )
}

const styles = StyleSheet.create({})

export default MessagesList
