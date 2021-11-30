import authAPI from "../../api/authAPI";
import { SET_USER_DATA } from "./actionConst"

export const getCurrentUser = () => {
    return dispatch => {
        authAPI.getCurrentUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    dispatch(setUserData(id, email, login));
                }
            })
    }
}

const setUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId, email, login
        }
    }
}