import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
    const removeData = () => {
        try {
            SecureStore.deleteItemAsync('phoneNumber')
                    navigation.navigate('ListChat')
              
        }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <Button title='Đăng xuất' onPress={removeData} />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
