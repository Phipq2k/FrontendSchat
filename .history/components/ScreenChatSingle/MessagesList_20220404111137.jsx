import { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { useSelector } from 'react-redux'
import io from 'socket.io-client'

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
                await socket.emit('joinRoom', props.value.id)
                await socket.on('showAllChatOnRoom', (allMessages) => {
                    setMessages(allMessages)
                    console.log(messages)
                })
                // socket.emit('joinRoom', props.value.id)
            } catch (error) {
                console.log(error)
            }
            // setIsBusy(false)
        }
        // return () => {
        //     setMessages(messages)
        //     console.log('cleaned up')
        // }
        fetchData()
    }, [messages])

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
