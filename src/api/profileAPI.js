import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
    headers: {
        'API-KEY': 'f8b5264e-961f-48d8-8158-761e55719525'
    }
});

const getProfile = (userId) => {
    return instance.get(`${userId}`)
        .then(response => {
            return response.data
        })
}

const getStatus = (userId) => {
    return instance.get(`/status/${userId}`)
        .then(response => {
            return response.data
        })
}

const updateStatus = (newStatus) => {
    return instance.put(`/status`, {
        status: newStatus
    })
        .then(response => {
            return response.data
        })
}


export default {
    getProfile,
    getStatus,
    updateStatus
}