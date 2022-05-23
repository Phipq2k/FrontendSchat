import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SignintTheme } from '../../themes/Signin/SigninScreen'

const SigninScreenComponent = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={SignintTheme.text}>Đăng ký</Text>
            <View style={SignintTheme.wrapper}>
                <Text style={SignintTheme.paragraph}>
                    Bạn đã có tài khoản Schat?
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SigninScreen')
                    }}
                >
                    <Text style={SignintTheme.signin}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SigninScreenComponent
