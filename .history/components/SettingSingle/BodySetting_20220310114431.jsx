import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BodySetting = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.headerContainer}>
                <Image
                    source={require('../assets/images/avt.png')}
                    style={styles.avatar}
                />
                <FontAwesome
                    name='camera'
                    size={18}
                    color='black'
                    style={styles.imgCamera}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.textInfo}>Gsoft Group</Text>
                    <AntDesign name='edit' size={22} color='black' />
                </View>
            </View>

            <TabNavigation />

            <View style={styles.empty}></View>

            <View style={styles.otherContainer}>
                <Text style={styles.setupOther}>Cài đặt khác</Text>

                <View style={styles.hideContainer}>
                    <Text style={styles.hideText}>Ẩn trò chuyện</Text>
                    <SwitchMain />
                </View>
                <View style={styles.showContainer}>
                    <Text style={styles.showText}>Hiện thông báo</Text>
                    <SwitchMain />
                </View>
                <Text style={styles.changeImg}>Thay đổi ảnh nền</Text>
                <Text style={styles.outGroup}>Rời nhóm</Text>
            </View>
        </SafeAreaView>
    )
}

export default BodySetting

const styles = StyleSheet.create({})
