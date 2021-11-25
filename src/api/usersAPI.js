import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/users'
});

const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}


export default {
    getUsers
}
