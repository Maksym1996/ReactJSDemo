import { SET_USER_DATA } from "./actionConst"

let setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        data
    }
}