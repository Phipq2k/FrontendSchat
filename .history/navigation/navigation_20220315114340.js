import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './navigation/StackNavigation'
import TabNavigation from './navigation/TabNavigation'

const NestedNavigaiton = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
            <TabNavigation />
        </NavigationContainer>
    )
}
