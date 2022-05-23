import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
// import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { useState, useRef, useEffect } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Modal,
    Button,
    Pressable,
    FlatList,
    SafeAreaView,
    StatusBar,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import MultiSelect from 'react-native-multiple-select'
const K_OPTIONS = [
    {
        item: 'Juventus',
        id: 'JUVE',
    },
    {
        item: 'Real Madrid',
        id: 'RM',
    },
    {
        item: 'Barcelona',
        id: 'BR',
    },
    // {
    //     item: 'PSG',
    //     id: 'PSG',
    // },
    // {
    //     item: 'FC Bayern Munich',
    //     id: 'FBM',
    // },
    // {
    //     item: 'Manchester United FC',
    //     id: 'MUN',
    // },
    // {
    //     item: 'Manchester City FC',
    //     id: 'MCI',
    // },
    // {
    //     item: 'Everton FC',
    //     id: 'EVE',
    // },
    // {
    //     item: 'Tottenham Hotspur FC',
    //     id: 'TOT',
    // },
    // {
    //     item: 'Chelsea FC',
    //     id: 'CHE',
    // },
    // {
    //     item: 'Liverpool FC',
    //     id: 'LIV',
    // },
    // {
    //     item: 'Arsenal FC',
    //     id: 'ARS',
    // },

    // {
    //     item: 'Leicester City FC',
    //     id: 'LEI',
    // },
]

const Details = () => {
    const [field, setField] = useState('')
    const [workingGroup, setWorkingGroup] = useState('')
    const [nameGroup, setNameGroup] = useState('Thiết kế CSDL Ver.1')
    const [percent, setPercent] = useState(0)
    const [text, setText] = useState('Không thời hạn')
    const [isVisible, setIsVisible] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [status, setStatus] = useState('')

    const [modalVisible, setModalVisible] = useState(false)
    const [selectedTeams, setSelectedTeams] = useState([])

    useEffect(() => {
        setSelectedTeams([...selectedTeams])
    }, [selectedTeams])

    const handlePicker = (datetime) => {
        setShowButton(true)
        setIsVisible(false)
        setText(moment(datetime).format('DD/MM/YYYY HH:mm'))
    }

    const showPicker = () => {
        setIsVisible(true)
    }

    const hidePicker = () => {
        setIsVisible(false)
    }

    const hideButton = () => {
        setText('Không thời hạn')
        setShowButton(false)
    }

    function onMultiChange() {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }

    // const renderData = () => {
    //     console.log(selectedTeams)
    //     for (const i = 0; selectedTeams.length; i++) {
    //         return renderItems(selectedTeams[i].item)
    //     }
    // }
    // const renderItems = (user) => {
    //     return (
    //         <View>
    //             <Image
    //                 style={{ borderRadius: 100, width: 35, height: 35 }}
    //                 source={require('../../assets/images/avt.png')}
    //             />
    //             <Text style={{ marginLeft: 10 }}>{user}</Text>

    //             <AntDesign
    //                 name='close'
    //                 size={26}
    //                 style={{
    //                     color: '#ccc',
    //                     marginLeft: '50%',
    //                 }}
    //             />
    //         </View>
    //     )
    // }

    const handleSubmit = () => {
        setModalVisible(!modalVisible)
        setSelectedTeams(selectedTeams)
        console.log(selectedTeams[0].item)
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Tiến độ hiện tại</Text>
                <View style={styles.TienDo}>
                    <TextInput
                        style={styles.textPercent}
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
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Lĩnh vực</Text>

                <Picker
                    selectedValue={field}
                    style={{ height: 50, width: '50%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setField(itemValue)
                    }
                >
                    <Picker.Item
                        label='Lập trình viên'
                        value='Lập trình viên'
                    />
                    <Picker.Item label='Hành chính' value='Hành chính' />
                    <Picker.Item label='Chính trị' value='Chính trị' />
                    <Picker.Item label='Quân sự' value='Quân sự' />
                </Picker>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Nhóm công việc</Text>

                <Picker
                    selectedValue={workingGroup}
                    style={{ height: 50, width: '50%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setWorkingGroup(itemValue)
                    }
                >
                    <Picker.Item label='Nhóm Design' value='Nhóm Design' />
                    <Picker.Item label='Nhóm Dev' value='Nhóm Dev' />
                    <Picker.Item label='Nhóm BA' value='Nhóm BA' />
                    <Picker.Item label='Nhóm IT' value='Nhóm IT' />
                </Picker>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Tên công việc</Text>
                <TextInput
                    style={styles.textContent}
                    value={nameGroup}
                    onChangeText={setNameGroup}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Nội dung</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
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
                <Picker
                    selectedValue={status}
                    style={styles.pickerStyle}
                    onValueChange={(itemValue, itemIndex) =>
                        setStatus(itemValue)
                    }
                >
                    <Picker.Item label='Cần thực hiện' value='Cần thực hiện' />
                    <Picker.Item
                        label='Đang thực hiện'
                        value='Đang thực hiện'
                    />
                    <Picker.Item label='Đã hoàn thành' value='Đã hoàn thành' />
                    <Picker.Item label='Đã phê duyệt' value='Đã phê duyệt' />
                    <Picker.Item
                        label='Việc giao cho tôi'
                        value='Việc giao cho tôi'
                    />
                    <Picker.Item label='Việc tôi giao' value='Việc tôi giao' />
                </Picker>
            </View>
            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Thời hạn</Text>
                <TouchableOpacity onPress={showPicker}>
                    <Text style={styles.textStatus}>{text}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hideButton}>
                    {showButton ? (
                        <AntDesign
                            name='close'
                            size={26}
                            style={{
                                color: '#ccc',
                                marginHorizontal: 70,
                                marginTop: 10,
                                padding: 10,
                            }}
                        />
                    ) : null}
                </TouchableOpacity>
            </View>

            <DateTimePickerModal
                isVisible={isVisible}
                onConfirm={handlePicker}
                onCancel={hidePicker}
                mode={'datetime'}
                is24Hour={false}
            />

            <View style={styles.currentUser}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                    }}
                >
                    <Text style={styles.textProgress}>Người được giao</Text>

                    <View>
                        <View style={styles.centeredView}>
                            <Modal
                                animationType='fade'
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.')
                                    setModalVisible(!modalVisible)
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <View
                                            style={{
                                                flex: 1,
                                                margin: 50,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    paddingBottom: 10,
                                                }}
                                            >
                                                MultiSelect Demo
                                            </Text>
                                            <SelectBox
                                                label='Select multiple'
                                                options={K_OPTIONS}
                                                selectedValues={selectedTeams}
                                                onMultiSelect={onMultiChange()}
                                                onTapClose={onMultiChange()}
                                                isMulti
                                                containerStyle={{
                                                    width: 250,
                                                }}
                                                optionsLabelStyle={{
                                                    height: 30,
                                                }}
                                            />
                                        </View>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <TouchableOpacity
                                                style={[
                                                    styles.button,
                                                    styles.buttonClose,
                                                ]}
                                                onPress={handleSubmit}
                                            >
                                                <Text style={styles.textStyle}>
                                                    Hide Modal
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                            >
                                <AntDesign
                                    name='pluscircleo'
                                    size={24}
                                    color='black'
                                    style={{
                                        marginLeft: '70%',
                                        marginTop: 10,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        {console.log('selectedTeams', selectedTeams)}
                        {selectedTeams.map((item, index) => {
                            return <Text key={index}>{item.item}</Text>
                        })}
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        alignItems: 'center',
                    }}
                >
                    <View style={{ flexDirection: 'column' }}></View>
                    {/* {renderData} */}
                </View>
            </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        // margin: '50%',
        // marginTop: '40%',
        marginVertical: '30%',
        marginHorizontal: 20,
        backgroundColor: '#ccc',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    screen: {
        backgroundColor: '#fff',
        margin: 16,
        padding: 16,
        fontFamily: 'roboto-regular',
        borderRadius: 10,
        position: 'relative',
    },

    currentProgress: {
        position: 'relative',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D3D3D3',
        borderStyle: 'solid',
        paddingBottom: 20,
    },
    currentUser: {
        marginTop: 20,
        paddingBottom: 20,
    },
    textProgress: {
        fontSize: 12,
        lineHeight: 14,
        color: '#919191',
        marginTop: 10,
    },
    textPercent: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#FA1919',
        color: '#fff',
        borderRadius: 50,
        marginLeft: 10,
        fontSize: 14,
        textAlign: 'center',
        marginTop: -10,
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
        // height: 50,
        // width: '50%',
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
        marginTop: 20,
        marginLeft: 10,
        flexDirection: 'row',
    },
    txtTiendo: {
        fontSize: 14,
        color: '#353535',
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
        width: '40%',
    },
    pickerStyle: {
        height: 50,
        width: '60%',
        marginHorizontal: 10,
        marginTop: 7,
        color: 'red',
    },
})
