import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

function MainButton(props) {
    return (
        <TouchableOpacity>
            <View>
                <View style={styles.button}></View>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton
