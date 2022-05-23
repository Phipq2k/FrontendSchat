import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

function MainButton(props) {
    return (
        <TouchableOpacity>
            <View>
                <View style={styles.button}>
                    <Text style={styles.text}></Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton
