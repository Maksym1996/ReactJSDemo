import { SET_CAPTCHA_URL } from "../actions/actionConst"

let initState = {
    captchaUrl: null
}

const securityReducer = (state = initState, action) => {
    switch(action.type){
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

export default securityReducer;