import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SigninScreenComponent = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.text}>Đăng ký</Text>
            <View style={styles.wrapper}>
                <Text style={styles.paragraph}>Bạn đã có tài khoản Schat?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SigninScreen')
                    }}
                >
                    <Text style={styles.signin}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SigninScreenComponent
