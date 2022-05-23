import React from 'react'
import { Button } from 'react-native'

// const NavigateToDetails = (props) => {
//     props.navigation.navigate('NameInput')
// }
function Second({ navigation }) {
    return (
        <Button
            title='Move to name'
            onPress={() => navigation.navigate('NameInput')}
        />
    )
}

export default Second
