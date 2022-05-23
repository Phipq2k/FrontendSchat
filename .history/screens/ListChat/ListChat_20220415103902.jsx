import React, { StatusBar, useState, useEffect, useCallback } from 'react'
import {
    ImageBackground,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import { index } from '../../themes/ListChat/index'
// import DocumentPicker, { types } from "react-native-document-picker";
import ChatHeader from '../../components/ScreenChatSingle/ChatHeader'
import MessagesList from '../../components/ScreenChatSingle/MessagesList'
import ChatInput from '../../components/ScreenChatSingle/ChatInput'
import { GiftedChat } from 'react-native-gifted-chat'
import ChatScreen from '../ScreenChatSingle/ChatScreen'
import Logout from '../../components/Logout/Logout'
import io from 'socket.io-client'

import { useDispatch, useSelector } from 'react-redux'
import { LoadSocket, ListenFindUser } from '../../store/actions/socket.action'

export default function ListChat({ navigation }) {
    const { accessToken, id } = useSelector((state) => state.userReducer)
    const { socket, isListenFindUser } = useSelector(
        (state) => state.socketReducer
    )
    const { rooms } = useSelector((state) => state.socketReducer)
    const dispatch = useDispatch()

    // async function chooseFile() {
    //   try {
    //     const response = await DocumentPicker.pick({
    //       presentationStyle: "fullScreen",
    //       type: [types.pdf],
    //       allowMultiSelection: true,
    //     });
    //   } catch (err) {
    //     if (DocumentPicker.isCancel(err)) {
    //       console.log(
    //         "User cancelled the picker, exit any dialogs or menus and move on"
    //       );
    //     } else {
    //       throw err;
    //     }
    //   }
    // }

    const [dataRooms, setDataRooms] = useState([])
    const [isBusy, setIsBusy] = useState(true)

    const addRoom = (newRoom) => setDataRooms((state) => [...state, newRoom])
    try {
        if (socket == null) {
            console.log('///Listchat')
            console.log('null')
            const socket1 = io('http://a48c-115-79-137-105.ngrok.io/chat', {
                extraHeaders: {
                    Authorization: 'Bearer ' + accessToken,
                },
            })
            dispatch(LoadSocket(socket1))
            socket1.on('chatRooms', (rooms) => {
                console.log(rooms)
                setDataRooms([])
                // setDataRooms(rooms);
                try {
                    rooms.forEach((item) => {
                        if (item.single_room) {
                            item.participants.forEach((user) => {
                                if (user._id != id) {
                                    const temp = {
                                        _id: item._id,
                                        chat_room_image: user.avatar,
                                        chat_room_name: user.user_name,
                                    }
                                    addRoom(temp)
                                }
                            })
                        }
                    })
                    console.log('///success')
                } catch (error) {
                    console.log(error)
                }
            })
            setIsBusy(false)
        }
        if (socket && isBusy) {
            console.log('///Listchat')
            console.log('exist')
            socket.emit('getListRoomForUser', id)
            setIsBusy(false)
        }
    } catch (error) {
        console.log('Fail to fetch room list', error)
    }

    // all Event:
    // join room and get all message: Event name: joinRoom -> Listener: showAllChatOnRoom
    // connection, get all room -> Listener: chatRooms

    const [Friend, SetFriend] = useState(dataRooms)
    const [RenderView, setRenderView] = useState(false)
    const [IdFriend, setIdFriend] = useState(0)
    const [Notification, setNotification] = useState(true)
    const [Search, setSearch] = useState('')
    const [SearchFriend, SetSearchFriend] = useState(Friend)

    const [messages, setMessages] = useState([])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        )
    }, [])

    const renderNotification = () => {
        if (Notification) return <View style={index.NodeNotificatio}></View>
        else {
            return <></>
        }
    }

    const filterSearch = (text) => {
        setSearch(text)
        if (text) {
            if (isListenFindUser) {
                dispatch(ListenFindUser(false))
                socket.off('getUserByPhone')
            }
            socket.on('getUserByPhone', (users) => {
                console.log('\\\\\\\\\\\\"')
                console.log(typeof users)

                setDataRooms([])
                console.log(dataRooms)
                if (typeof users != 'string') {
                    const temp = {
                        _id: users._id,
                        chat_room_image: users.avatar,
                        chat_room_name: users.user_name,
                    }
                    addRoom(temp)
                }
                dispatch(ListenFindUser(true))
            })
            socket.emit('searchUserByPhone', text)
        } else {
            socket.emit('getListRoomForUser', id)
        }
    }

    const renderHeader = () => {
        return (
            <View style={index.Header}>
                <ImageBackground
                    source={require('../../assets/images/ListChat/MaskGroup.png')}
                    style={index.ImageBackground}
                >
                    <View style={index.BoxTop}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MenuScreen')}
                        >
                            <View style={index.BoxAvatar}>
                                <Image
                                    source={require('../../assets/images/ListChat/avatar.png')}
                                    style={index.avatar}
                                />
                            </View>
                        </TouchableOpacity>

                        <View style={index.BoxSearch}>
                            <TextInput
                                placeholder='Tìm kiếm bạn bè, nhóm'
                                style={index.search}
                                selectionColor={'#1E73B9'}
                                value={Search}
                                onChangeText={(text) => filterSearch(text)}
                            ></TextInput>
                        </View>
                        <View style={index.BoxAdd}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('HomeScreen')
                                }
                            >
                                <Image
                                    source={require('../../assets/images/ListChat/IconNews.png')}
                                    style={index.IconNews}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View>
                                    <Image
                                        source={require('../../assets/images/ListChat/IconNotification.png')}
                                        style={index.IconNotification}
                                    />
                                    {renderNotification()}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderContent = () => {
        return (
            <View style={index.Content}>
                <View>
                    <View style={index.PhoneBook}>
                        <View>
                            <View style={index.BoxPhoneBook}>
                                <TouchableOpacity
                                    onPress={() => console.log(dataRooms)}
                                >
                                    <Image
                                        source={require('../../assets/images/ListChat/Phonebook.png')}
                                        style={index.IconPhoneBook}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>Danh bạ</Text>
                        </View>
                    </View>
                </View>
                <View style={index.MenuBody}>
                    <Text>Tất cả tin nhắn</Text>
                    <Image
                        source={require('../../assets/images/ListChat/list.png')}
                        style={index.iconList}
                    />
                    <Text>Chưa đọc</Text>
                </View>

                <View style={index.listFriend}>
                    {dataRooms !== null ? (
                        <FlatList
                            data={dataRooms}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => renderItem(item)}
                        />
                    ) : (
                        <Text>Không có dữ 84145678333liệu</Text>
                    )}
                </View>
            </View>
        )
    }

    const renderFooterFriend = () => {
        return (
            // <View style={index.FooterFriend}>
            //     <View style={index.BoxInputChat}>
            //         <TextInput
            //             placeholder='Nhập tin nhắn của bạn..'
            //             style={index.textChat}
            //         ></TextInput>
            //     </View>
            //     <View style={index.FooterIcon}>
            //         <View style={index.FooterIconLeft}>
            //             <Image
            //                 source={require('../../assets/images/ListChat/Icon.png')}
            //                 style={index.icon}
            //             />
            //             <TouchableOpacity onPress={chooseFile}>
            //                 <Image
            //                     source={require('../../assets/images/ListChat/Upfile.png')}
            //                     style={index.icon}
            //                 />
            //             </TouchableOpacity>
            //             <Image
            //                 source={require('../../assets/images/ListChat/IconImage.png')}
            //                 style={index.icon}
            //             />
            //         </View>
            //         <View style={index.FooterIconRight}>
            //             <Image
            //                 source={require('../../assets/images/ListChat/IconExtend.png')}
            //                 style={index.iconExtend}
            //             />
            //             <Image
            //                 source={require('../../assets/images/ListChat/IconMic.png')}
            //                 style={index.iconMic}
            //             />
            //         </View>
            //     </View>
            // </View>
            <ChatInput />
        )
    }

    const renderHeaderFriend = () => {
        return (
            // <View style={index.Header}>
            //     <ImageBackground
            //         source={require('../../assets/images/ListChat/MaskGroup.png')}
            //         style={index.ImageBackground}
            //     >
            //         <View style={index.BoxTop}>
            //             <View style={index.BoxAvatar}>
            //                 <Image
            //                     source={require('../../assets/images/ListChat/avatar.png')}
            //                     style={index.avatar}
            //                 />
            //                 <Text style={index.NameFriend}>Thúy An</Text>
            //             </View>
            //             <View style={index.BoxAdd}>
            //                 <Image
            //                     source={require('../../assets/images/ListChat/Call.png')}
            //                     style={index.IconCall}
            //                 />
            //                 <Image
            //                     source={require('../../assets/images/ListChat/VideoCall.png')}
            //                     style={index.VideoCall}
            //                 />
            //                 <Image
            //                     source={require('../../assets/images/ListChat/Seting.png')}
            //                     style={index.Seting}
            //                 />
            //             </View>
            //         </View>
            //     </ImageBackground>
            // </View>
            <ChatHeader />
        )
    }

    const renderContentFriend = () => {
        return (
            //     <View style={index.ContentFriend}>
            //         <Text>{IdFriend}</Text>
            //         <TouchableOpacity
            //             onPress={() => {
            //                 setRenderView(false)
            //             }}
            //         >
            //             <Text>Back</Text>
            //         </TouchableOpacity>
            //     </View>
            // )
            <MessagesList />
        )
    }

    const renderChatScreen = () => {
        return <ChatScreen />
    }

    const renderFriend = () => {
        return (
            <View style={index.container}>
                {/* {renderHeaderFriend()}
                {renderContentFriend()}
                {renderFooterFriend()} */}
                {renderChatScreen()}
            </View>
        )
    }

    const onPressItem = (item) => {
        // setIdFriend(item._id);
        // setRenderView(true);
    }

    const UnreadMessage = (item) => {
        if (item.UnreadMessage > 0) {
            return (
                <View style={index.Node}>
                    <Text style={index.NumberNode}>{item.UnreadMessage}</Text>
                </View>
            )
        } else {
            return <></>
        }
    }

    const Silent = (item) => {
        if (item.silent == true) {
            return (
                <Image
                    source={require('../../assets/images/ListChat/Silent.png')}
                    style={index.IconSilent}
                />
            )
        } else {
            return <></>
        }
    }

    const renderAvatar = (url) => {
        if (typeof url === 'string') {
            return <Image source={{ uri: url }} style={index.IconAvatar} />
        } else if (typeof url === 'number') {
            return <Image source={url} style={index.IconAvatar} />
        }
    }
    ///// các room trong list chat
    const renderItem = (item) => {
        const value = {
            id: item._id,
            avt: item.chat_room_image,
            name: item.chat_room_name,
        }
        return (
            <TouchableOpacity
                onPress={() =>
                    // console.log(id)
                    navigation.navigate('ChatScreen', value)
                }
            >
                <View style={index.ListBoxChat}>
                    <View>
                        {/* source={{ uri: item.chat_room_image }} */}
                        {/* {item.chat_room_image 
            ? <Image source={item.chat_room_image} style={index.IconAvatar} /> 
            : <Image 
            source={require("../../assets/images/ListChat/avatar.png")}
            style={index.IconAvatar} />} */}
                        {/* <Image source={item.chat_room_image} style={index.IconAvatar} /> */}
                        {renderAvatar(item.chat_room_image)}
                        {/* <Image source={{ uri: item.chat_room_image }}  style={index.IconAvatar} /> */}
                        {/* <Text>{item._id}</Text> */}
                    </View>
                    <View>
                        <Text>{item.chat_room_name}</Text>
                        {/* <Text>{item.Messenger}</Text> */}
                    </View>
                    <View style={index.TextTime}>
                        <View style={index.BoxTime}>
                            <View>{UnreadMessage(item)}</View>
                            <View style={index.BoxTextTime}>
                                <View style={index.TimeChat}>
                                    <Text>1 giờ</Text>
                                </View>
                                <View style={index.BoxSilent}>
                                    {Silent(item)}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const render = () => {
        if (RenderView == false) {
            return (
                <View style={index.container}>
                    {renderHeader()}
                    {renderContent()}
                </View>
            )
        } else {
            if (RenderView == true) {
                return renderFriend()
            }
        }
    }
    return render()
}
