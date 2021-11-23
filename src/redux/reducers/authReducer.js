import { SET_USER_DATA } from "../actions/actionConst"

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return setUserData(state, action.data)
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

export default authReducer;
