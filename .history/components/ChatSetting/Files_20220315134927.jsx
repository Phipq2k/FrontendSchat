import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import MainButton from '../MainButton'

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
