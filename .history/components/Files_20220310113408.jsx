import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import MainButton from './MainButton'

const { width, height } = Dimensions.get('window')

const Files = () => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/images/img2.png')}
                    style={styles.img}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.text}>BlockChain_Banner_Final.pdf</Text>
                    <Text style={styles.paragraph}>
                        189KB - Bởi Trọng Nghĩa
                    </Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/images/img2.png')}
                    style={styles.img}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.text}>BlockChain_Banner_Final.pdf</Text>
                    <Text style={styles.paragraph}>
                        189KB - Bởi Trọng Nghĩa
                    </Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/images/img2.png')}
                    style={styles.img}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.text}>BlockChain_Banner_Final.pdf</Text>
                    <Text style={styles.paragraph}>
                        189KB - Bởi Trọng Nghĩa
                    </Text>
                </View>
            </View>
            <MainButton />
        </View>
    )
}

export default Files

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: height * 0.0233990147783251,
        paddingLeft: width * 0.0453333333333333,
        paddingBottom: height * 0.0197044334975369,
        paddingRight: width * 0.0453333333333333,
        maxHeight: 247,
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 9,
    },
    img: {
        marginRight: 9,
    },
    text: {
        width: 271,
        height: 17,
        fontFamily: 'roboto-regular',
        fontSize: 12,
        lineHeight: 14,
        color: '#212121',
    },
    paragraph: {
        width: 271,
        height: 17,
        fontFamily: 'roboto-regular',
        fontSize: 10,
        lineHeight: 12,
        color: '#A9A9A9',
    },
})
