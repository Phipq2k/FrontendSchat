import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import MainButton from './MainButton'

const { width, height } = Dimensions.get('window')

const ImageVideo = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    resizeMode: 'cover',
                    marginBottom: 10,
                }}
            >
                <Image
                    source={require('../assets/images/img1.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img2.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img3.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img4.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img5.png')}
                    style={{ width: 61, height: 48 }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    resizeMode: 'cover',
                    marginBottom: 10,
                }}
            >
                <Image
                    source={require('../assets/images/img5.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img6.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img7.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img8.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img9.png')}
                    style={{ width: 61, height: 48 }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    resizeMode: 'cover',
                    marginBottom: 10,
                }}
            >
                <Image
                    source={require('../assets/images/img2.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img4.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img5.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img9.png')}
                    style={{ width: 61, height: 48 }}
                />
                <Image
                    source={require('../assets/images/img2.png')}
                    style={{ width: 61, height: 48 }}
                />
            </View>

            <MainButton />
        </View>
    )
}

export default ImageVideo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: height * 0.0233990147783251,
        paddingLeft: 17,
        paddingBottom: 16,
        paddingRight: 17,
        maxHeight: 247,
    },
})
