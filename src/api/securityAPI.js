import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/security/'
});

const getCaptchaUrl = () => {
    return instance.get(`get-captcha-url`)
        .then(response => {
            return response.data;
        })
}

export default {
    getCaptchaUrl
}