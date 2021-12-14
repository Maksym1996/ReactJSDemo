import authAPI from "../../api/authAPI";
import { SET_ERROR_MESSAGES, SET_USER_DATA } from "./actionConst"

export const getCurrentUser = () => {
    return dispatch => {
        authAPI.getCurrentUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    dispatch(setUserData( { id, email, login }));
                }
            })
    }
}

export const loginUser = (formData) => {
    return dispatch => {
        authAPI.loginToSystem(formData)
            .then(data => {
                 dispatch(setUserData(data))
            })
    }
}

const setErrorMessages = (messages) => {
    return {
        type: SET_ERROR_MESSAGES,
        messages
    }
}

const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        data
    }
}