import { SET_USER_DATA } from "./actionConst"

export const setUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId, email, login
        }
    }
}