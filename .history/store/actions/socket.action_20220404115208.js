import { LOAD_ROOMS } from '../contants/socket.contant'

import io from 'socket.io-client'
import axios from 'axios'
import userReducer from '../reducers/auth.reducer'
// const {accessToken} = useSelector(state => state.userReducer)

export const LoadChatRooms = (rooms) => {
    const socket = io('http://172.21.20.67:3000', {
        extraHeaders: {
            Authorization: 'Bearer ' + token,
        },
    })
    // // socket.on('chatRooms', roođms => {
    // //     console.log(rooms)
    // //     rooms = msg
    // // })
    // // socket.on("connect", rooms => {
    // //     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    // //     console.log(rooms)

    // // });

    socket.on('showAllChatOnRoom', (allMessages) => {
        setMessages(allMessages)
        console.log(messages)
    })
    socket.emit('joinRoom', props.value.id)
    // //
    return {
        type: LOAD_ROOMS,
        payload: rooms,
    }
}
