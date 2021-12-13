import { SET_ERROR_MESSAGES, SET_USER_DATA } from "../actions/actionConst"

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    messages: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return setUserData(state, action.data);
        case SET_ERROR_MESSAGES:
            return setErrorMessages(state, action.messages);
        default:
            return state
    }
}

let setUserData = (state, data) => {
    return {
        ...state,
        ...data,
        isAuth: true
    }
}

let setErrorMessages = (state, messages) => {
    return {
        ...state,
        messages
    }
}

export default authReducer;
