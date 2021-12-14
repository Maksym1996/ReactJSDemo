import securityAPI from "../../api/securityAPI"
import { SET_CAPTCHA_URL } from "./actionConst";

export const getCaptchaUrl = () => {
    return dispatch => {
        securityAPI.getCaptchaUrl()
            .then(data => {
                dispatch(setCaptchaUrl(data.url));
            })
    }
}

const setCaptchaUrl = (captchaUrl) => {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl
    }
}