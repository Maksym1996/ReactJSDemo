import { FOLLOW, UNFOLLOW, SET_USERS, SET_CURRENT_PAGE, SET_USERS_TOTAL_COUNT, SET_LOADING, SET_FOLLOWING_IN_PROGRESS } from "./actionConst";

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalUsersCount
    }
}

export const setLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        isLoading
    }
}

export const setFollowingInProgress = (isFollowingInProgress, userId) => {
    return {
        type : SET_FOLLOWING_IN_PROGRESS,
        isFollowingInProgress,
        userId
    }
}