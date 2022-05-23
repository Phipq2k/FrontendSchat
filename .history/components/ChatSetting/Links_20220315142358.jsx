import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import MainButton from '../MainButton'

import { index } from '../../themes/ChatSetting/LinksTheme'

const { width, height } = Dimensions.get('window')

const Links = () => {
    return (
        <View style={index.container}>
            <View style={index.infoContainer}>
                <Image
                    source={require('../../assets/images/img6.png')}
                    style={index.img}
                />
                <View>
                    <Text style={index.text}>
                        https//www.youtube.com/watch/nguoihayquenemdi
                    </Text>
                </View>
            </View>
            <View style={index.infoContainer}>
                <Image
                    source={require('../../assets/images/img6.png')}
                    style={index.img}
                />
                <View>
                    <Text style={index.text}>
                        https://www.freepik.com/search?dates=any&demographic=any-people&format=search&page=14&query=background
                    </Text>
                </View>
            </View>
            <View style={index.infoContainer}>
                <Image
                    source={require('../../assets/images/img6.png')}
                    style={index.img}
                />
                <View>
                    <Text style={index.text}>
                        https://www.freepik.com/search?dates=any&demographic=any-people&format=search&page=14&query=background+technology&sort=popular
                    </Text>
                </View>
            </View>
            <MainButton />
        </View>
    )
}

export default Links
