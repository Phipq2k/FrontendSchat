import React, { StatusBar, useState } from 'react'
import {
  StyleSheet
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
            Avatar: require('../../assets/images/ListChat/avatar/LogoSchat.png'),
            Messenger: 'Hello',
            UnreadMessage: 0,
            silent: true,
        },
        {
            Id: 2,
            Name: 'Ha My',
            Avatar: require('../../assets/images/ListChat/avatar/HaMy.png'),
            Messenger: 'Xin chào',
            UnreadMessage: 1,
            silent: false,
        },
        {
            Id: 3,
            Name: 'Ken Nguyen',
            Avatar: require('../../assets/images/ListChat/avatar/KenNguyen.png'),
            Messenger: 'Có khỏe không bạn',
            UnreadMessage: 0,
            silent: false,
        },
        {
            Id: 4,
            Name: 'Khaly',
            Avatar: require('../../assets/images/ListChat/avatar/Khaly.png'),
            Messenger: 'Bye Bye',
            UnreadMessage: 10,
            silent: true,
        },
        {
            Id: 5,
            Name: 'Mary',
            Avatar: require('../../assets/images/ListChat/avatar/Mary.png'),
            Messenger: 'Hihi',
            UnreadMessage: 1,
            silent: true,
        },
        {
            Id: 6,
            Name: 'Schat',
            Avatar: require('../../assets/images/ListChat/avatar/LogoSchat.png'),
            Messenger: 'Hola',
            UnreadMessage: 2,
            silent: true,
        },
        {
            Id: 7,
            Name: 'Ha Vy',
            Avatar: require('../../assets/images/ListChat/avatar/HaMy.png'),
            Messenger: 'Xin chào',
            UnreadMessage: 1,
            silent: false,
        },
        {
            Id: 8,
            Name: 'Nguyen Ly',
            Avatar: require('../../assets/images/ListChat/avatar/KenNguyen.png'),
            Messenger: 'Có khỏe không bạn',
            UnreadMessage: 0,
            silent: false,
        },
        {
            Id: 9,
            Name: 'LyLy',
            Avatar: require('../../assets/images/ListChat/avatar/Khaly.png'),
            Messenger: 'Good',
            UnreadMessage: 10,
            silent: true,
        },
        {
            Id: 10,
            Name: 'Mira',
            Avatar: require('../../assets/images/ListChat/avatar/Mary.png'),
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
                    source={require('../../assets/images/ListChat/MaskGroup.png')}
                    style={index.ImageBackground}
                >
                    <View style={index.BoxTop}>
                        <View style={index.BoxAvatar}>
                            <Image
                                source={require('../../assets/images/ListChat/avatar.png')}
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
                                source={require('../../assets/images/ListChat/IconNews.png')}
                                style={index.IconNews}
                            />
                            <View>
                                <Image
                                    source={require('../../assets/images/ListChat/IconNotification.png')}
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
                        placeholder='Nhập tin nhắn của bạn..'
                        style={index.textChat}
                    ></TextInput>
                </View>
                <View style={index.FooterIcon}>
                    <View style={index.FooterIconLeft}>
                        <Image
                            source={require('../../assets/images/ListChat/Icon.png')}
                            style={index.icon}
                        />
                        <TouchableOpacity onPress={chooseFile}>
                            <Image
                                source={require('../../assets/images/ListChat/Upfile.png')}
                                style={index.icon}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../../assets/images/ListChat/IconImage.png')}
                            style={index.icon}
                        />
                    </View>
                    <View style={index.FooterIconRight}>
                        <Image
                            source={require('../../assets/images/ListChat/IconExtend.png')}
                            style={index.iconExtend}
                        />
                        <Image
                            source={require('../../assets/images/ListChat/IconMic.png')}
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
                    source={require('../../assets/images/ListChat/MaskGroup.png')}
                    style={index.ImageBackground}
                >
                    <View style={index.BoxTop}>
                        <View style={index.BoxAvatar}>
                            <Image
                                source={require('../../assets/images/ListChat/avatar.png')}
                                style={index.avatar}
                            />
                            <Text style={index.NameFriend}>Thúy An</Text>
                        </View>
                        <View style={index.BoxAdd}>
                            <Image
                                source={require('../../assets/images/ListChat/Call.png')}
                                style={index.IconCall}
                            />
                            <Image
                                source={require('../../assets/images/ListChat/VideoCall.png')}
                                style={index.VideoCall}
                            />
                            <Image
                                source={require('../../assets/images/ListChat/Seting.png')}
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
                    source={require('../../assets/images/ListChat/Silent.png')}
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
const styles = StyleSheet.create({
    container: {
        height: height * 0.0911330049261084,
        flexDirection: 'row',
        backgroundColor: '#0D76C1',
    },
    groupLeft: {
        height: height * 0.0455665024630542,
        flexDirection: 'row',
        marginLeft: width * 0.042,
        marginTop: height * 0.035,
    },
    groupRight: {
        height: 16,
        flexDirection: 'row',
        marginLeft: width * 0.32,
        marginTop: height * 0.05,
        alignItems: 'center',
    },
    imgBackground: {
        width: width,
        height: height * 0.0911330049261084,
        position: 'absolute',
    },
    profile: {
        flexDirection: 'row',
    },
    imgAcc: {
        width: width * 0.06661,
        height: height * 0.037812,
        padding: 10,
        borderRadius: 50,
        marginLeft: width * 0.021,
    },
    backButton: {
        marginTop: height * 0.012,
        width: width * 0.02133333333,
        height: height * 0.01641625615,
    },
    phoneButton: {
        width: width * 0.042666,
        height: height * 0.019704,
    },
    videoCallButton: {
        width: width * 0.048,
        height: height * 0.01330049261,
        marginLeft: width * 0.05,
    },
    settingButton: {
        width: width * 0.0416,
        height: height * 0.01330049261,
        marginLeft: width * 0.05,
    },
    username: {
        marginLeft: width * 0.0213333333333333,
        fontFamily: 'Roboto',
        color: '#F2F1F1',
        fontSize: width * 0.0426666666666667,
        fontWeight: '500',
    },
    onlineStatus: {
        marginLeft: width * 0.0213333333333333,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: width * 0.0266666666666667,
        color: '#F2F1F1',
    },
})
