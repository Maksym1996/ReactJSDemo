import { FOLLOW, UNFOLLOW, SET_USERS } from "./actionConst";

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}