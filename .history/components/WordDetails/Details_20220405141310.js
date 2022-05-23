import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native'
import React, { useState } from 'react'

import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

const Details = () => {
    const [save, setSave] = useState(false)
    const [field, setField] = useState('Lập trình viên')
    const [workingGroup, setWorkingGroup] = useState('')
    const [nameGroup, setNameGroup] = useState('')

    const onPress = () => {
        console.log('save')
        setField(field)
        setWorkingGroup(workingGroup)
        setNameGroup(nameGroup)
    }

    const handleField = () => {}
    return (
        <ScrollView style={styles.screen}>
            <TouchableOpacity style={styles.saveContainer} onPress={onPress}>
                <Text style={styles.save}>Lưu</Text>
            </TouchableOpacity>

            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Tiến độ hiện tại</Text>
                <Text style={styles.textPercent}>Tiến độ 80%</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Lĩnh vực</Text>
                <TextInput
                    style={styles.textContent}
                    onChangeText={handleField}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Nhóm công việc</Text>
                <TextInput style={styles.textDesign} value={workingGroup}>
                    Nhóm thiết kế CSDL
                </TextInput>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Tên công việc</Text>
                <TextInput style={styles.textContent} value={nameGroup}>
                    Thiết kế CSDL Ver.1
                </TextInput>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Nội dung</Text>
                <TextInput
                    style={styles.textContent}
                    placeholder=' Nhập nội dung công việc...'
                />
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.buttonContainer}>
                        <MaterialIcons
                            name='attach-file'
                            size={23}
                            style={styles.iconUpfile}
                        />
                        <Text style={styles.textUpfile}>Tải file đính kèm</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Trạng thái</Text>
                <Text style={styles.textStatus}>Cần thực hiện</Text>
            </View>
            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Thời hạn</Text>
                <Text style={styles.textStatus}>Không thời hạn</Text>
            </View>
            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Người được giao</Text>
                <View style={styles.textContainer}>
                    <View>
                        <View style={styles.userContainer}>
                            <Text style={styles.textUser}>hoangan</Text>
                            <FontAwesome name='times' size={24} color='black' />
                        </View>
                        <View style={styles.userContainer}>
                            <Text style={styles.textUser}>hoangan</Text>
                            <FontAwesome name='times' size={24} color='black' />
                        </View>
                    </View>

                    <View>
                        <View style={styles.userContainer}>
                            <Text style={styles.textUser}>hoangan</Text>
                            <FontAwesome name='times' size={24} color='black' />
                        </View>
                        <View style={styles.userContainer}>
                            <Text style={styles.textUser}>hoangan</Text>
                            <FontAwesome name='times' size={24} color='black' />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#fff',
        margin: 16,
        padding: 16,
        fontFamily: 'roboto-regular',
        borderRadius: 10,
        position: 'relative',
    },

    saveContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        borderWidth: 1,
        borderColor: '#27AAE1',
        borderStyle: 'solid',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginRight: 10,
        borderRadius: 50,
    },
    save: { color: '#27AAE1', fontSize: 18 },

    currentProgress: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D3D3D3',
        borderStyle: 'solid',
        paddingBottom: 20,
    },
    textProgress: {
        fontSize: 12,
        lineHeight: 14,
        alignItems: 'center',
        color: '#919191',
        marginTop: 10,
    },
    textPercent: {
        backgroundColor: '#FA1919',
        color: '#fff',
        borderRadius: 50,
        padding: 10,
        marginLeft: 10,
        fontSize: 14,
    },
    textContent: {
        color: '#000',
        borderRadius: 50,
        marginTop: 10,
        fontSize: 14,
    },

    textDesign: {
        color: '#27AAE1',
        marginTop: 10,
        fontSize: 14,
        // lineHeight: 16.41,
    },

    textStatus: {
        color: '#fff',
        marginTop: 10,
        fontSize: 14,
        backgroundColor: '#27AAE1',
        borderRadius: 50,
        marginLeft: 20,
        padding: 10,
    },
    container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#D3D3D3',
        borderStyle: 'solid',
        paddingBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

        marginTop: 16,
        borderWidth: 0.7,
        borderColor: '#27AAE1',
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 10,
    },
    textUpfile: {
        color: '#27aae1',
        fontSize: 14,
        marginLeft: 5,
    },
    iconUpfile: { color: '#27aae1', transform: [{ rotate: '40deg' }] },
    textContainer: { flexDirection: 'row' },
    userContainer: {
        flexDirection: 'row',
        marginLeft: 30,
        alignItems: 'center',
        textAlign: 'center',
    },
    textUser: { marginRight: 12 },
})
