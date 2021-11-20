import { ADD_POST, UPDATE_POST_MESSAGE } from "../actions/actionConst";

let initialState = {
    postData: [
        { id: 1, message: 'Hi, evetyone!!', likes: 15 },
        { id: 2, message: 'Bye bye all', likes: 20 }
    ],
    currentMessage: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state);
        case UPDATE_POST_MESSAGE:
            return updatePostText(state, action.message);
        default:
            return state;
    }
};

export default profileReducer;


const addPost = (state) => {
    let text = state.currentMessage;
    let newID = state.postData.length + 1;
    if (!text) {
        alert('Please enter message');
        return state;
    }
    return {
        ...state,
        postData: [
            ...state.postData,
            {
                id: newID,
                message: state.currentMessage,
                likes: newID
            }],
        currentMessage: ''
    }
};

const updatePostText = (state, message) => {
    return {
        ...state,
        currentMessage: message
    }
};