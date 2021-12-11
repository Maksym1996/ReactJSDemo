import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/'
});

const getCurrentUser = () => {
    return instance.get(`me`)
        .then(response => {
            return response.data
        })
}

const loginToSystem = (loginData) => {
    return instance.post(`login`, loginData)
        .then(response => {
            return response.data
        })
}

export default {
    getCurrentUser,
    loginToSystem
}
