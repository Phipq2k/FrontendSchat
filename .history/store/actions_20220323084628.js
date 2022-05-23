export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'
export const SET_PHONE_NUMBER_ERROR = 'SET_PHONE_NUMBER_ERROR'

export const setPhoneNumber = (phoneNumber) => (dispatch) => {
    dispatch({ type: SET_PHONE_NUMBER, payload: phoneNumber })
}
export const setPhoneNumberError = (phoneNumberError) => (dispatch) => {
    dispatch({ type: SET_PHONE_NUMBER_ERROR, payload: phoneNumberError })
}
