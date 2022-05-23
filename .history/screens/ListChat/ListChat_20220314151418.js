import React, { StatusBar, useState } from 'react'
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

export default function ListChat() {
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

    const [Data, setData] = useState([
        {
            Id: 1,
            Name: 'File Truyền',
            Avatar: require('./assets/images/avatar/LogoSchat.png'),
            Messenger: 'Hello',
            UnreadMessage: 0,
            silent: true,
        },
        {
            Id: 2,
            Name: 'Ha My',
            Avatar: require('./assets/images/avatar/HaMy.png'),
            Messenger: 'Xin chào',
            UnreadMessage: 1,
            silent: false,
        },
        {
            Id: 3,
            Name: 'Ken Nguyen',
            Avatar: require('./assets/images/avatar/KenNguyen.png'),
            Messenger: 'Có khỏe không bạn',
            UnreadMessage: 0,
            silent: false,
        },
        {
            Id: 4,
            Name: 'Khaly',
            Avatar: require('./assets/images/avatar/Khaly.png'),
            Messenger: 'Bye Bye',
            UnreadMessage: 10,
            silent: true,
        },
        {
            Id: 5,
            Name: 'Mary',
            Avatar: require('./assets/images/avatar/Mary.png'),
            Messenger: 'Hihi',
            UnreadMessage: 1,
            silent: true,
        },
        {
            Id: 6,
            Name: 'Schat',
            Avatar: require('./assets/images/avatar/LogoSchat.png'),
            Messenger: 'Hola',
            UnreadMessage: 2,
            silent: true,
        },
        {
            Id: 7,
            Name: 'Ha Vy',
            Avatar: require('./assets/images/avatar/HaMy.png'),
            Messenger: 'Xin chào',
            UnreadMessage: 1,
            silent: false,
        },
        {
            Id: 8,
            Name: 'Nguyen Ly',
            Avatar: require('./assets/images/avatar/KenNguyen.png'),
            Messenger: 'Có khỏe không bạn',
            UnreadMessage: 0,
            silent: false,
        },
        {
            Id: 9,
            Name: 'LyLy',
            Avatar: require('./assets/images/avatar/Khaly.png'),
            Messenger: 'Good',
            UnreadMessage: 10,
            silent: true,
        },
        {
            Id: 10,
            Name: 'Mira',
            Avatar: require('./assets/images/avatar/Mary.png'),
            Messenger: 'Hehe',
            UnreadMessage: 1,
            silent: true,
        },
    ])

    const [Friend, SetFriend] = useState(Data)
    const [RenderView, setRenderView] = useState(false)
    const [IdFriend, setIdFriend] = useState(0)
    const [Notification, setNotification] = useState(true)
    const [Search, setSearch] = useState('')
    const [SearchFriend, SetSearchFriend] = useState(Friend)

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
                const itemData = item.Name
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
                    source={require('./assets/images/MaskGroup.png')}
                    style={index.ImageBackground}
                >
                    <View style={index.BoxTop}>
                        <View style={index.BoxAvatar}>
                            <Image
                                source={require('./assets/images/avatar.png')}
                                style={index.avatar}
                            />
                        </View>
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
                            <Image
                                source={require('./assets/images/IconNews.png')}
                                style={index.IconNews}
                            />
                            <View>
                                <Image
                                    source={require('./assets/images/IconNotification.png')}
                                    style={index.IconNotification}
                                />
                                {renderNotification()}
                            </View>
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
                                    source={require('./assets/images/Phonebook.png')}
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
                        source={require('./assets/images/list.png')}
                        style={index.iconList}
                    />
                    <Text>Chưa đọc</Text>
                </View>

                <View style={index.listFriend}>
                    <FlatList
                        data={SearchFriend}
                        keyExtractor={(item) => item.Id}
                        renderItem={({ item }) => renderItem(item)}
                    />
                </View>
            </View>
        )
    }

    const renderFooterFriend = () => {
        return (
            <View style={index.FooterFriend}>
                <View style={index.BoxInputChat}>
                    <TextInput
                        placeholder='Nhập tin nhắn của bạn...'
                        style={index.textChat}
                    ></TextInput>
                </View>
                <View style={index.FooterIcon}>
                    <View style={index.FooterIconLeft}>
                        <Image
                            source={require('./assets/images/Icon.png')}
                            style={index.icon}
                        />
                        <TouchableOpacity onPress={chooseFile}>
                            <Image
                                source={require('./assets/images/Upfile.png')}
                                style={index.icon}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('./assets/images/IconImage.png')}
                            style={index.icon}
                        />
                    </View>
                    <View style={index.FooterIconRight}>
                        <Image
                            source={require('./assets/images/IconExtend.png')}
                            style={index.iconExtend}
                        />
                        <Image
                            source={require('./assets/images/IconMic.png')}
                            style={index.iconMic}
                        />
                    </View>
                </View>
            </View>
        )
    }

    const renderHeaderFriend = () => {
        return (
            <View style={index.Header}>
                <ImageBackground
                    source={require('./assets/images/MaskGroup.png')}
                    style={index.ImageBackground}
                >
                    <View style={index.BoxTop}>
                        <View style={index.BoxAvatar}>
                            <Image
                                source={require('./assets/images/avatar.png')}
                                style={index.avatar}
                            />
                            <Text style={index.NameFriend}>Thúy An</Text>
                        </View>
                        <View style={index.BoxAdd}>
                            <Image
                                source={require('./assets/images/Call.png')}
                                style={index.IconCall}
                            />
                            <Image
                                source={require('./assets/images/VideoCall.png')}
                                style={index.VideoCall}
                            />
                            <Image
                                source={require('./assets/images/Seting.png')}
                                style={index.Seting}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderContentFriend = () => {
        return (
            <View style={index.ContentFriend}>
                <Text>{IdFriend}</Text>
                <TouchableOpacity
                    onPress={() => {
                        setRenderView(false)
                    }}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderFriend = () => {
        return (
            <View style={index.container}>
                {renderHeaderFriend()}
                {renderContentFriend()}
                {renderFooterFriend()}
            </View>
        )
    }

    const onPressItem = (item) => {
        setIdFriend(item.Id)
        setRenderView(true)
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
                    source={require('./assets/images/Silent.png')}
                    style={index.IconSilent}
                />
            )
        } else {
            return <></>
        }
    }

    const renderItem = (item) => {
        //alert(item.Avatar)
        return (
            <TouchableOpacity onPress={() => onPressItem(item)}>
                <View style={index.ListBoxChat}>
                    <View>
                        <Image source={item.Avatar} style={index.IconAvatar} />
                    </View>
                    <View>
                        <Text>{item.Name}</Text>
                        <Text>{item.Messenger}</Text>
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
