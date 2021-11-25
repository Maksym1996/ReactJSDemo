import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        'API-KEY': 'f8b5264e-961f-48d8-8158-761e55719525'
    }
});

const following = (userId) => {
    return instance.post(`${userId}`)
        .then(response => {
            return response.data
        })
}

const unFollowing = (userId) => {
    return instance.delete(`${userId}`)
        .then(response => {
            return response.data
        })
}

export default {
    following, unFollowing
}
