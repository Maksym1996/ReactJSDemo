import usersAPI from "../../api/usersAPI";
import { FOLLOW, UNFOLLOW, SET_USERS, SET_CURRENT_PAGE, SET_USERS_TOTAL_COUNT, SET_LOADING, SET_FOLLOWING_IN_PROGRESS } from "./actionConst";


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
       dispatch(setLoading(true));
       dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setLoading(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));

            })
    }
}


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

const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalUsersCount
    }
}

const setLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        isLoading
    }
}

export const setFollowingInProgress = (isFollowingInProgress, userId) => {
    return {
        type: SET_FOLLOWING_IN_PROGRESS,
        isFollowingInProgress,
        userId
    }
}