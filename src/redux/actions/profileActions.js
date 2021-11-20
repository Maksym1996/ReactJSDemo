import { ADD_POST, UPDATE_POST_MESSAGE } from "./actionConst";

export const addPost = () => {
    return {
        type: ADD_POST
    }
};

export const updatePostMessage = (payload) => {
    return {
        type: UPDATE_POST_MESSAGE,
        payload
    }
};