import { SET_PHONE_NUMBER, SET_PHONE_NUMBER_ERROR } from './actions'

const initialState = {
    phoneNumber: '',
    phoneNumberError: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload }

        case SET_PHONE_NUMBER_ERROR:
            return { ...state, phoneNumberError: action.payload }
        default:
            return state
    }
}

export default userReducer
