import { LOAD_ROOMS } from '../contants/socket.contant'

import io from 'socket.io-client'
import axios from 'axios'
import userReducer from '../reducers/auth.reducer'
import { useSelector } from 'react-redux'

import { WEBSITE_URL } from '../../helper/misc'
const { accessToken } = useSelector((state) => state.userReducer)

const socket = io(`${WEBSITE_URL}`, {
    forceNew: true,
    extraHeaders: {
        Authorization: 'Bearer ' + accessToken,
    },
})
export const LoadChatRooms = (rooms) => {
    // // socket.on('chatRooms', roođms => {
    // //     console.log(rooms)
    // //     rooms = msg
    // // })
    // // socket.on("connect", rooms => {
    // //     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    // //     console.log(rooms)

    // // });

    // socket.on('showAllChatOnRoom', (allMessages) => {
    //     setMessages(allMessages)
    //     console.log(messages)
    // })
    // socket.emit('joinRoom', props.value.id)
    // //
    return {
        type: LOAD_ROOMS,
        payload: rooms,
    }
}
