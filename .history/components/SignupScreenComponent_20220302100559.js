import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
    },
    arrowLeftIcon: {
        color: '#000',
        width: 20,
        height: 26,
        marginTop: 58,
    },
    text: {
        width: 343,
        height: 27,
        fontSize: 23,
        fontFamily: 'roboto-medium',
        lineHeight: 27,
        alignItems: 'flex-end',
        color: '#131313',
        marginTop: 29,
    },
    paragraph: {
        marginTop: 12,
        fontFamily: 'roboto-light',
        fontSize: 15,
        lineHeight: 18,
        color: '#7B7B7B',
    },
    signup: {
        color: '#339af0',
        paddingLeft: 8,
        paddingTop: 10,
    },
})

export default SignupScreenComponent
