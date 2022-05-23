import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native'
import SigninScreenComponent from '../../components/Signin/SigninScreenComponent'
import { FontAwesome5 } from '@expo/vector-icons'
import { Formik } from 'formik'
import { SignupSchema } from '../../validation'
import SigninScreen from '../../themes/Signin/SigninScreen'

function ScreenSignupName({ navigation }) {
    const handleSubmit = () => {
        console.log(firstName, lastName)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('WaittingScreen')
                }}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={styles.arrowLeftIcon}
                />
            </TouchableOpacity>

            <SigninScreenComponent />

            <Formik
                initialValues={{ firstName: '', lastName: '' }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {({
                    handleChange,
                    handleBlur,
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
                                onPress={() =>
                                    navigation.navigate(
                                        'SignupPhoneScreen',
                                        values
                                    )
                                }
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

export default ScreenSignupName
