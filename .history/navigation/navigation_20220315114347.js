import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './navigation/StackNavigation'
import TabNavigation from './navigation/TabNavigation'

export default const NestedNavigaiton = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
            <TabNavigation />
        </NavigationContainer>
    )
}
