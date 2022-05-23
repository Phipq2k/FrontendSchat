import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SignupScreenComponentTheme } from '../../themes/Signup/SignupScreenComponentTheme'

const SignupScreenThemeComponent = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={SignupScreenTheme.text}>Đăng Nhập</Text>
            <View style={SignupScreenTheme.wrapper}>
                <Text style={SignupScreenTheme.paragraph}>
                    Bạn mới dùng Schat?
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignupNameScreen')
                    }}
                >
                    <Text style={SignupScreenTheme.signup}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupScreenThemeComponent
