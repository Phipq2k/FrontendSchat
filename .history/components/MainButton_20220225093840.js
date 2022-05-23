import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

function MainButton(props) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text
                    activeOpacity={0.6}
                    onPress={props.onPress}
                    style={styles.buttonText}
                >
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: { backgroundColor: '#27AAE1', borderRadius: 4, paddingTop: 32 },
    buttonText: { color: '#fff' },
})

export default MainButton
