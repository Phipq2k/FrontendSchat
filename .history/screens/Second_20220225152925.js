import React from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const NavigateToDetails = (props) => {
    props.navigation.navigate('NameInput')
}
function Second(props) {
    return (
        <Button title='Move to name' onPress={() => NavigateToDetails(props)} />
    )
}

export default Second
