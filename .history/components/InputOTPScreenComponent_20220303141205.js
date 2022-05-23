import React, { useState, useEffect, useRef } from 'react'
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
} from 'react-native'

const InputOTPScreenComponent = ({ navigation }) => {
    /*const pin1ref = useRef()
   const pin2ref = useRef()*/

    /* let textInput = useRef(null)
  const lengthInput = 6;
  const [internalVal,setInternalVal] = useState("")

  const onPressContinue = () => {
    if(internalVal==""){
      alert("Vui lòng nhập số OTP");
    }
    else{
      if(internalVal.includes(("."))==true || isFinite(internalVal)==false){
        alert("Vui lòng chỉ nhập số ")
      }
      else{
        if(internalVal.length!= 6){
        alert("Vui lòng nhập đủ 6 số ")
        
        }
        else
          navigation.navigate("HomeScreen");
      }
    } 
  }
  const onChangeText = (val) =>{
      setInternalVal(val)
  }

  

  useEffect (() => {
    textInput.focus()
  },[])*/

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style={styles.containerAvoidingView}
            >
                <View style={styles.OTPTextContainer}>
                    <Text style={styles.OTPText}>Xác nhận OTP</Text>
                    <Text style={styles.InputOTPText}>
                        Nhập mã OTP để tiếp tục
                    </Text>
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.Input1}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input2}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input3}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input4}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input5}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                    <TextInput
                        style={styles.Input6}
                        keyboardType='numeric'
                        maxLength={1}
                    />
                </View>

                <View style={styles.ConfirmContainer}>
                    <TouchableOpacity
                        /*onPress={onPressContinue}*/
                        style={styles.btnConfirm}
                    >
                        <Text style={styles.colorConfirm}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerAvoidingView: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
    },
    /* TEXT OTP*/
    OTPText: {
        width: 343,
        height: 27,
        marginTop: 97,
        fontFamily: 'Roboto',
        fontSize: 23,
        fontWeight: '500',
        lineHeight: 27,
        color: '#131313',
        marginBottom: 10,
    },
    InputOTPText: {
        color: '#7B7B7B',
    },
    /* CODE OTP */
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 75,
        marginBottom: 68,
    },
    /* cellView:{
      paddingVertical:11,
      width:52,
      height:52,
      margin:5,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:4,
      borderWidth:1, 
      borderColor:"#D7D7D7",
      backgroundColor:'white',
    },
    cellText:{
      textAlign:'center',
      fontSize:17,
      color:'black',
    },*/
    Input1: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input2: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input3: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input4: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input5: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    Input6: {
        backgroundColor: 'white',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        height: 52.7,
        width: 52.7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    /*BUTTON CONFIRM */
    btnConfirm: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '500',
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27AAE1',
        borderRadius: 4,
    },
    colorConfirm: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
    },
})

export default 