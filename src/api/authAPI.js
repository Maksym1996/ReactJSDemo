import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/me'
});

const getCurrentUser = () => {
    return instance.get()
        .then(response => {
            return response.data
        })
}

export default {
    getCurrentUser
}
