import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

const ScreenWait = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.imgBack}
            source={require('../assets/Background.png')}
            resizeMode='stretch'
        >
            {/* lớp thứ 1 */}

            <Image
                style={styles.imgfirstclass}
                source={require('../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />
            
            {/* lớp thứ 2 */}

            <Image
                style={styles.imgsecondclass}
                source={require('../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />

            {/* lớp thứ 3 */}

            <Image
                style={styles.imgthirdclass}
                source={require('../assets/Backgroundtop.png')}
                resizeMode='stretch'
            />
            <SafeAreaView>
                <View style={styles.container}>
                    <Image
                        style={styles.imglogo}
                        source={require('../assets/LogoSchat.png')}
                    />

                    <Image
                        style={styles.imgmaskgroup}
                        source={require('../assets/Mask-Group.png')}
                    />

                    <Text style={styles.texfirst}>Hello Gsoft!</Text>
                    <Text style={styles.textsecond}>
                        <Text>Chào mừng bạn đến với </Text>
                        <Text style={{ fontWeight: 'bold' }}>Schat!</Text>
                    </Text>
                    <View style={styles.containerbutton}>
                        {/* Đăng nhập */}
                        <Text style={styles.textthird}>
                            Đăng nhập để vào Schat!
                        </Text>
                        <TouchableOpacity
                            style={styles.buttonlogin}
                            onPress={() => {
                                navigation.navigate('SigninScreen')
                            }}
                        >
                            <Text style={styles.textSignin}>Đăng Nhập</Text>
                        </TouchableOpacity>

                        {/* Đăng ký */}
                        <TouchableOpacity
                            style={styles.buttonlogout}
                            onPress={() => {
                                navigation.navigate('SignupNameScreen')
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                    color: '#FFFFFF',
                                }}
                            >
                                Đăng Ký
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBack: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    imgfirstclass: {
        width: '100%',
        position: 'absolute',
        tintColor: '#36b0e3',
    },
    imgsecondclass: {
        width: '100%',
        height: 456.5,
        position: 'absolute',
        tintColor: '#5ec0e9',
    },
    imgthirdclass: {
        width: '100%',
        height: 440,
        position: 'absolute',
    },
    container: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
    },
    imglogo: {
        width: 98,
        height: 38.82,
        marginTop: 36.75,
    },
    imgmaskgroup: {
        width: 375,
        height: 313.87,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texfirst: {
        marginTop: 65,
        fontSize: 24,
        color: '#FFFFFF',
    },
    textsecond: {
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#FFFFFF',
    },
    containerbutton: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textthird: {
        marginTop: 60,
        marginBottom: 6,
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#FFFFFF',
    },
    buttonlogin: {
        width: 342.91,
        height: 38,
        backgroundColor: '#BEF7FF',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonlogout: {
        width: 342.91,
        height: 38,
        marginTop: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C0F7FF',
        backgroundColor: '#27aae1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSignin: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#0D76C1',
    },
})
export default ScreenWait
