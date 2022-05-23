import { SET_PHONE_NUMBER } from './actions'

const initialState = {
    phoneNumber: '',
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload }
        default:
            return state
    }
}

export default useReducer
