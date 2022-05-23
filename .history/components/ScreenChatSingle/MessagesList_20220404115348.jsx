import { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import io from 'socket.io-client'

import { useSelector, useDispatch } from 'react-redux'

const MessagesList = (props) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            console.log('id' + props.value.id)
            try {
                // const socket = io('http://172.21.20.67:3000', {
                //     extraHeaders: {
                //         Authorization: 'Bearer ' + accessToken,
                //     },
                // })
                // socket.on('showAllChatOnRoom', (allMessages) => {
                //     setMessages(allMessages)
                //     console.log(messages)
                // })
                // socket.emit('joinRoom', props.value.id)
            } catch (error) {
                console.log(error)
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
