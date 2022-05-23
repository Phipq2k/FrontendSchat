import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SignupScreenComponent = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.text}>Đăng Nhập</Text>
            <View style={styles.wrapper}>
                <Text style={styles.paragraph}>Bạn mới dùng Schat?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignupNameScreen')
                    }}
                >
                    <Text style={styles.signup}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupScreenComponent
