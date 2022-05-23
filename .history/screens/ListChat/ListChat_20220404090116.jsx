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
import DocumentPicker, { types } from 'react-native-document-picker'
import ChatHeader from '../../components/ScreenChatSingle/ChatHeader'
import MessagesList from '../../components/ScreenChatSingle/MessagesList'
import ChatInput from '../../components/ScreenChatSingle/ChatInput'
import { GiftedChat } from 'react-native-gifted-chat'
import ChatScreen from '../ScreenChatSingle/ChatScreen'
import Logout from '../../components/Logout/Logout'
import io from 'socket.io-client'

import { useDispatch, useSelector } from 'react-redux'
import { LoadChatRooms } from '../../store/actions/socket.action'

export default function ListChat({ navigation }) {
    const { accessToken } = useSelector((state) => state.userReducer)
    const { rooms } = useSelector((state) => state.socketReducer)
    const dispatch = useDispatch()

    async function chooseFile() {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf],
                allowMultiSelection: true,
            })
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log(
                    'User cancelled the picker, exit any dialogs or menus and move on'
                )
            } else {
                throw err
            }
        }
    }

    const [dataRooms, setRooms] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const socket = io('http://172.21.20.67:5000', {
                    extraHeaders: {
                        Authorization: 'Bearer ' + accessToken,
                    },
                })
                socket.on('chatRooms', (rooms) => {
                    console.log('room' + rooms)
                    const response = dispatch(LoadChatRooms(accessToken))
                    console.log('Fetch products successfully: ', response)
                    setRooms(rooms)
                })
            } catch (error) {
                console.log('Fail to fetch room list', error)
            }
        }
        fetchData()
    }, [])

    // all Event:
    // join room and get all message: Event name: joinRoom -> Listener: showAllChatOnRoom
    // connection, get all room -> Listener: chatRooms
    // const [Data, setData] = useState([
    //     {
    //         Id: 1,
    //         Name: 'File Truyền',
    //         Avatar: require('../../assets/images/ListChat/avatar/LogoSchat.png'),
    //         Messenger: 'Hello',
    //         UnreadMessage: 0,
    //         silent: true,
    //     },
    //     {
    //         Id: 2,
    //         Name: 'Ha My',
    //         Avatar: require('../../assets/images/ListChat/avatar/HaMy.png'),
    //         Messenger: 'Xin chào',
    //         UnreadMessage: 1,
    //         silent: false,
    //     },
    //     {
    //         Id: 3,
    //         Name: 'Ken Nguyen',
    //         Avatar: require('../../assets/images/ListChat/avatar/KenNguyen.png'),
    //         Messenger: 'Có khỏe không bạn',
    //         UnreadMessage: 0,
    //         silent: false,
    //     },
    //     {
    //         Id: 4,
    //         Name: 'Khaly',
    //         Avatar: require('../../assets/images/ListChat/avatar/Khaly.png'),
    //         Messenger: 'Bye Bye',
    //         UnreadMessage: 10,
    //         silent: true,
    //     },
    //     {
    //         Id: 5,
    //         Name: 'Mary',
    //         Avatar: require('../../assets/images/ListChat/avatar/Mary.png'),
    //         Messenger: 'Hihi',
    //         UnreadMessage: 1,
    //         silent: true,
    //     },
    //     {
    //         Id: 6,
    //         Name: 'Schat',
    //         Avatar: require('../../assets/images/ListChat/avatar/LogoSchat.png'),
    //         Messenger: 'Hola',
    //         UnreadMessage: 2,
    //         silent: true,
    //     },
    //     {
    //         Id: 7,
    //         Name: 'Ha Vy',
    //         Avatar: require('../../assets/images/ListChat/avatar/HaMy.png'),
    //         Messenger: 'Xin chào',
    //         UnreadMessage: 1,
    //         silent: false,
    //     },
    //     {
    //         Id: 8,
    //         Name: 'Nguyen Ly',
    //         Avatar: require('../../assets/images/ListChat/avatar/KenNguyen.png'),
    //         Messenger: 'Có khỏe không bạn',
    //         UnreadMessage: 0,
    //         silent: false,
    //     },
    //     {
    //         Id: 9,
    //         Name: 'LyLy',
    //         Avatar: require('../../assets/images/ListChat/avatar/Khaly.png'),
    //         Messenger: 'Good',
    //         UnreadMessage: 10,
    //         silent: true,
    //     },
    //     {
    //         Id: 10,
    //         Name: 'Mira',
    //         Avatar: require('../../assets/images/ListChat/avatar/Mary.png'),
    //         Messenger: 'Hehe',
    //         UnreadMessage: 1,
    //         silent: true,
    //     },
    // ])

    const [Friend, SetFriend] = useState(dataRooms)
    const [RenderView, setRenderView] = useState(false)
    const [IdFriend, setIdFriend] = useState(0)
    const [Notification, setNotification] = useState(true)
    const [Search, setSearch] = useState('')
    const [SearchFriend, SetSearchFriend] = useState(Friend)

    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
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

    const renderNotification = () => {
        if (Notification) return <View style={index.NodeNotificatio}></View>
        else {
            return <></>
        }
    }

    const filterSearch = (text) => {
        setSearch(text)
        if (text) {
            const newData = Friend.filter((item) => {
                const itemData = item.chat_room_name
                    ? item.Name.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            SetSearchFriend(newData)
        } else {
            SetSearchFriend(Friend)
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
                            onPress={() => navigation.navigate('Logout')}
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
                                <Image
                                    source={require('../../assets/images/ListChat/Phonebook.png')}
                                    style={index.IconPhoneBook}
                                />
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
                    <FlatList
                        data={dataRooms}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => renderItem(item)}
                    />
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
                        {/* <Image source={item.chat_room_image} style={index.IconAvatar} /> */}
                        {/* <Image
                            source={item.chat_room_image}
                            style={index.IconAvatar}
                        /> */}
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
