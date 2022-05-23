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
    button: {backgroundColor:},
    buttonText: '',
})

export default MainButton
