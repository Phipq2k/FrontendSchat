import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import MainButton from './MainButton'

import { LinksTheme } from '../../themes/ChatSetting/LinksTheme'

const { width, height } = Dimensions.get('window')

const Links = () => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/images/img6.png')}
                    style={styles.img}
                />
                <View>
                    <Text style={styles.text}>
                        https//www.youtube.com/watch/nguoihayquenemdi
                    </Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/images/img6.png')}
                    style={styles.img}
                />
                <View>
                    <Text style={styles.text}>
                        https://www.freepik.com/search?dates=any&demographic=any-people&format=search&page=14&query=background
                    </Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/images/img6.png')}
                    style={styles.img}
                />
                <View>
                    <Text style={styles.text}>
                        https://www.freepik.com/search?dates=any&demographic=any-people&format=search&page=14&query=background+technology&sort=popular
                    </Text>
                </View>
            </View>
            <MainButton />
        </View>
    )
}

export default Links
