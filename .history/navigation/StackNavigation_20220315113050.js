const Stack = createNativeStackNavigator()

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='ListChat'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='ListChat' component={ListChat} />
                <Stack.Screen name='ChatScreen' component={ChatScreen} />
                {/* <Stack.Screen name='ChatHeader' component={ChatHeader} /> */}
                <Stack.Screen name='MyTabs' component={MyTabs} />

                <Stack.Screen
                    name='WaitScreenConnect'
                    component={WaitScreenConnect}
                />
                <Stack.Screen
                    name='VideoScreenConnect'
                    component={VideoScreenConnect}
                />
                <Stack.Screen name='ChatSetting' component={ChatSetting} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
