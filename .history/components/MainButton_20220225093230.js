import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

function MainButton(props) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text active style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton
