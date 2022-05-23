import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import MainButton from './MainButton'

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: width * 0.0233990147783251,
        paddingLeft: 17,
        paddingBottom: width * 0.0197044334975369,
        paddingRight: 17,
        maxHeight: 247,
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    img: {
        marginRight: 9,
    },
    text: {
        fontFamily: 'roboto-regular',
        width: 269.27,
        // height: 34,
        fontSize: 12,
        lineHeight: 14,
        color: '#48A4D5',
    },
})
