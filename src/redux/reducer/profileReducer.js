import { ADD_POST, UPDATE_POST_MESSAGE } from "./actionConst";

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostMessageActionCreator = (payload) => {
    return {
        type: UPDATE_POST_MESSAGE,
        payload: payload
    }
}

const profileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST: 
            return addPost(state, action.payload);
        case UPDATE_POST_MESSAGE: 
            return updatePostText(state, action.payload); 
        default:
             return state;
    }
} 

let postID = 3;
const addPost = (state, action) => {
    let text = state.profileComponent.postMessage;
    if (!text) {
        alert('Please enter message');
        return;
    }
    let newPostObj = {
        id: postID++,
        message: text,
        likes: 0
    };
    state.profileComponent.postData.push(newPostObj);
    state.profileComponent.postMessage = '';

    return state;
};

const updatePostText = (state, payload) => {
    state.profileComponent.postMessage = payload.message;

    return state;
};


export default profileReducer;