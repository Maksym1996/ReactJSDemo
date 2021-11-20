import { ADD_POST, UPDATE_POST_MESSAGE } from "./actionConst";

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