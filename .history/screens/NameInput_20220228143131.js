import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
} from 'react-native'
import Screen from '../components/Screen'
import MainButton from '../components/MainButton'
import { Formik } from 'formik'
import { SignupSchema } from '../validation'

const NavigateToDetails = (props) => {
    props.navigation.navigate('Second')
}
function NameInput(props) {
    const handleSubmit = () => {
        console.log('Submit')
    }
    return (
        <View style={styles.container}>
            <Screen />
            <Formik
                initialValues={{ firstName: '', lastName: '' }}
                validationSchema={SignupSchema}
                // onSubmit={(values) => console.log(values)}
                onSubmit={handleSubmit}
            >
                {({
                    handleChange,
                    handleBlur,
                    // handleSubmit,
                    values,
                    errors,
                    touched,
                    dirty,
                    isValid,
                }) => (
                    <View>
                        <View>
                            <Text style={styles.firstName}>Họ và tên đệm</Text>

                            <TextInput
                                style={styles.firstNameInput}
                                placeholder='Nhập họ và tên đệm của bạn'
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                            />
                            {errors.firstName && touched.firstName ? (
                                <Text style={styles.message}>
                                    {errors.firstName}
                                </Text>
                            ) : null}
                        </View>

                        <View>
                            <Text style={styles.lastName}>Tên</Text>

                            <TextInput
                                style={styles.lastNameInput}
                                placeholder='Nhập tên của bạn'
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
                            />
                            {errors.lastName && touched.lastName ? (
                                <Text style={styles.message}>
                                    {errors.lastName}
                                </Text>
                            ) : null}
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button
                                title='Tiếp theo'
                                sytle={styles.button}
                                // onPress={handleSubmit}
                                disabled={!dirty || !isValid}
                                type='submit'
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'roboto-regular',
        marginRight: 16,
        marginLeft: 16,
    },
    firstName: {
        width: 90,
        height: 15,
        marginTop: 47,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    firstNameInput: {
        height: 38,
        marginTop: 8,
        backgroundColor: '#FDFDFD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 4,
        paddingTop: 8,
        paddingLeft: 13,
        paddingBottom: 10,
    },
    lastName: {
        marginTop: 16,
        width: 22,
        height: 15,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    lastNameInput: {
        height: 38,
        marginTop: 8,
        fontSize: 13,
        lineHeight: 15,
        color: '#404040',
        backgroundColor: '#FDFDFD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 4,
        paddingTop: 8,
        paddingLeft: 13,
        paddingBottom: 10,
    },
    buttonContainer: {
        marginTop: 32,
    },
    button: {
        backgroundColor: '#27AAE1',
        borderRadius: 4,
        fontFamily: 'roboto-medium',
        fontSize: 15,
        lineHeight: 18,
    },
    message: {
        color: 'red',
    },
})
export default NameInput
