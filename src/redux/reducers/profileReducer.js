import { ADD_POST, UPDATE_POST_MESSAGE } from "../actions/actionConst";

let initialState = {
    postData: [
        { id: 1, message: 'Hi, evetyone!!', likes: 15 },
        { id: 2, message: 'Bye bye all', likes: 20 }
    ],
    currentMessage: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.payload);
        case UPDATE_POST_MESSAGE:
            return updatePostText(state, action.payload);
        default:
            return state;
    }
};


let postID = 3;
const addPost = (state, action) => {
    let text = state.currentMessage;
    if (!text) {
        alert('Please enter message');
        return;
    }
    let newPostObj = {
        id: postID++,
        message: text,
        likes: 0
    };
    state.postData.push(newPostObj);
    state.currentMessage = '';

    return state;
};

const updatePostText = (state, payload) => {
    state.currentMessage = payload.message;

    return state;
};