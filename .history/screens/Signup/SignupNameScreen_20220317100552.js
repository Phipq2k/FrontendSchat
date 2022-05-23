import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    SigninScreenThemeheet,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native'
import SigninScreenComponent from '../../components/Signin/SigninScreenComponent'
import { FontAwesome5 } from '@expo/vector-icons'
import { Formik } from 'formik'
import { SignupSchema } from '../../validation'
import SigninScreenTheme from '../../themes/Signin/SigninScreenTheme'

function ScreenSignupName({ navigation }) {
    const handleSubmit = () => {
        console.log(firstName, lastName)
    }
    return (
        <View style={SigninScreenTheme.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('WaittingScreen')
                }}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={SigninScreenTheme.arrowLeftIcon}
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
                            <Text style={SigninScreenTheme.firstName}>
                                Họ và tên đệm
                            </Text>

                            <TextInput
                                style={SigninScreenTheme.firstNameInput}
                                placeholder='Nhập họ và tên đệm của bạn'
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                            />
                            {errors.firstName && touched.firstName ? (
                                <Text style={SigninScreenTheme.message}>
                                    {errors.firstName}
                                </Text>
                            ) : null}
                        </View>

                        <View>
                            <Text style={SigninScreenTheme.lastName}>Tên</Text>

                            <TextInput
                                style={SigninScreenTheme.lastNameInput}
                                placeholder='Nhập tên của bạn'
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
                            />
                            {errors.lastName && touched.lastName ? (
                                <Text style={SigninScreenTheme.message}>
                                    {errors.lastName}
                                </Text>
                            ) : null}
                        </View>

                        <View style={SigninScreenTheme.buttonContainer}>
                            <Button
                                title='Tiếp theo'
                                sytle={SigninScreenTheme.button}
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
