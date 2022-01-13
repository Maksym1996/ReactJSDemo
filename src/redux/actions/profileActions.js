import profileAPI from "../../api/profileAPI";
import { ADD_POST, SET_DISPLAYING_PROFILE, SET_STATUS } from "./actionConst";

export const getProfile = (userId) => {
    return dispatch => {
        profileAPI.getProfile(userId)
            .then(data => dispatch(setDisplayingProfile(data)))
    }
}

export const onAddPost = (postMessage) => {
    return {
        type: ADD_POST,
        postMessage
    }
};

export const updateStatus = (newStatus) => {
    return dispatch => {
        profileAPI.updateStatus(newStatus)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(newStatus))
                }
            });
    }
}

export const getStatus = (userId) => {
    return dispatch => {
        profileAPI.getStatus(userId)
            .then(data => dispatch(setStatus(data)))
    }
}

const setStatus = (userStatus) => {
    return {
        type: SET_STATUS,
        userStatus
    }
}

const setDisplayingProfile = (profile) => {
    return {
        type: SET_DISPLAYING_PROFILE,
        profile
    }
};