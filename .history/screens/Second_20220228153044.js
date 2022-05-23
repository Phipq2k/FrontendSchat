import React from 'react'
import { Button } from 'react-native'

function Second({ navigation }) {
    return (
        <Button
            title='Move to name'
            onPress={() => navigation.navigate('NameInput')}
        />
    )
}

export default Second
