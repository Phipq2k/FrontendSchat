import { SignupScreenheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SignupScreen } from '../../themes/Signup/SignupScreen'

const SignupScreenComponent = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={SignupScreen.text}>Đăng Nhập</Text>
            <View style={SignupScreen.wrapper}>
                <Text style={SignupScreen.paragraph}>Bạn mới dùng Schat?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignupNameScreen')
                    }}
                >
                    <Text style={SignupScreen.signup}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupScreenComponent
