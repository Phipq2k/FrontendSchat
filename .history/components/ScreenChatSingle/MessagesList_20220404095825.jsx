import React, { useState, useRef, useCallback, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'

const MessagesList = (props) => {
    const { accessToken } = useSelector((state) => state.userReducer)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        return () => {
            console.log('cleaned up')
        }
    }, [])

    useEffect(() => {
        console.log(props.value.id)
        const fetchData = async () => {
            try {
                const socket = io('http://172.21.20.67:3000', {
                    extraHeaders: {
                        Authorization: 'Bearer ' + accessToken,
                    },
                })
                socket.on('showAllChatOnRoom', (messages) => {
                    // socket.emit("joinroom", props.value.id)
                    console.log(messages)
                    // const response = dispatch(LoadChatRooms(accessToken));
                    // console.log("Fetch products successfully: ", response);
                    // setRooms(rooms);
                })
                socket.emit('joinRoom', props.value.id)
                //   socket.emit('joinroom', props.value.id, callback => {});
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [messages])

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
