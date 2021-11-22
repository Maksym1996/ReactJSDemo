import { ADD_POST, SET_DISPLAYING_PROFILE, UPDATE_POST_MESSAGE } from "./actionConst";

export const onAddPost = () => {
    return {
        type: ADD_POST
    }
};

export const onUpdatePostInput = (message) => {
    return {
        type: UPDATE_POST_MESSAGE,
        message
    }
};

export const setDisplayingProfile = (profile) => {
    return {
        type: SET_DISPLAYING_PROFILE,
        profile
    }
};