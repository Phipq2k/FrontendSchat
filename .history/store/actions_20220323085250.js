export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'

export const setPhoneNumber = (phoneNumber) => (dispatch) => {
    dispatch({ type: SET_PHONE_NUMBER, payload: phoneNumber })
}
