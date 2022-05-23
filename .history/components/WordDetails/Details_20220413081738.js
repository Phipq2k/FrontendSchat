import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
// import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { useState } from 'react'
import {
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import SelectBox from 'react-native-multi-selectbox'

import { xorBy } from 'lodash'
const K_OPTIONS = [
    {
        item: 'FC Bayern Munich',
        id: 'FBM',
    },
    {
        item: 'Manchester United FC',
        id: 'MUN',
    },
    {
        item: 'Manchester City FC',
        id: 'MCI',
    },
    {
        item: 'Everton FC',
        id: 'EVE',
    },
    {
        item: 'Tottenham Hotspur FC',
        id: 'TOT',
    },
    {
        item: 'Chelsea FC',
        id: 'CHE',
    },
    {
        item: 'Liverpool FC',
        id: 'LIV',
    },
    {
        item: 'Arsenal FC',
        id: 'ARS',
    },

    {
        item: 'Leicester City FC',
        id: 'LEI',
    },
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
    // const [listData, setListData] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [selectedTeams, setSelectedTeams] = useState([])
    // useEffect(() => {
    //     getListData
    // }, [listData])

    // const getListData = () => {
    //     setListData([...])
    // }

    // const getListSelected = () => {}

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

    const onMultiChange = () => {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }

    const handleSubmit = () => {
        setModalVisible(!modalVisible)
        setSelectedTeams(selectedTeams)
        // console.log(selectedTeams[0].item)
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
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: 10,
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
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
                                                    selectedValues={
                                                        selectedTeams
                                                    }
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
                                                    <Text
                                                        style={styles.textStyle}
                                                    >
                                                        Đồng ý
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
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        {selectedTeams.map((item, index) => {
                            return (
                                <Text key={index} style={{ color: 'black' }}>
                                    {item.item}
                                </Text>
                            )
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Details
