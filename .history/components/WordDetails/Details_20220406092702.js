import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

const Details = () => {
    const [field, onChangeField] = useState('Lập trình viên')
    const [workingGroup, onChangeWorkingGroup] = useState('Nhóm thiết kế CSDL')
    const [nameGroup, onChangeNameGroup] = useState('Thiết kế CSDL Ver.1')
    const [modalVisible, setModalVisible] = useState(false)
    const [percent, setPercent] = useState(0)

    const onPress = () => {
        onChangeField(field)
        onChangeWorkingGroup(workingGroup)
        onChangeNameGroup(nameGroup)
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Tiến độ hiện tại</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.textPercent}>Tiến độ 80%</Text>
                </TouchableOpacity>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    presentationStyle='overFullScreen'
                >
                    <View style={styles.TienDo}>
                        <Text style={styles.txtTiendo}>Tiến độ:</Text>
                        <TextInput
                            style={styles.txtinputPer}
                            keyboardType={'number-pad'}
                            maxLength={3}
                            contextMenuHidden={true}
                            onChangeText={(text) => {
                                if (+text > 100) text = 100
                                setPercent(Number(text))
                            }}
                        >
                            {percent}
                        </TextInput>
                        <Text style={styles.txtPer}>%</Text>
                    </View>
                    <Slider
                        style={styles.percentBar}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor='#27AAE1'
                        maximumTrackTintColor='#D6D6D6'
                        thumbTintColor='#27AAE1'
                        value={percent}
                        step={1}
                        onValueChange={setPercent}
                    />
                </Modal>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Lĩnh vực</Text>

                <TextInput
                    style={styles.textContent}
                    onChangeText={onChangeField}
                    value={field}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Nhóm công việc</Text>
                <TextInput
                    style={styles.textDesign}
                    value={workingGroup}
                    onChangeText={onChangeWorkingGroup}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Tên công việc</Text>
                <TextInput
                    style={styles.textContent}
                    value={nameGroup}
                    onChangeText={onChangeNameGroup}
                />
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
    TienDo: {
        flex: 1,
        backgroundColor: '#000000aa',
        marginTop: 20,
        marginLeft: 10,
        flexDirection: 'row',
    },
    txtTiendo: {
        fontSize: 14,
        color: '#27AAE1',
    },
    txtinputPer: {
        textAlign: 'center',
        fontSize: 14,
        color: '#353535',
        marginLeft: 12,
        borderWidth: 1,
        width: 48,
        height: 28,
        marginTop: -6,
        borderRadius: 8,
        borderColor: '#27AAE1',
    },
    txtPer: {
        fontSize: 14,
        color: '#353535',
        marginLeft: 10,
    },
    percentBar: {
        marginTop: 10,
        marginHorizontal: '5%',
    },
})
