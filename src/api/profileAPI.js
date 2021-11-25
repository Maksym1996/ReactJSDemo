import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/'
});

const getProfile = (userId) => {
    return instance.get(`${userId}`)
        .then(response => {
            return response.data
        })
}


export default {
    getProfile
}