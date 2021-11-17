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


const addPost = (state, action) => {
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

const updatePostText = (state, payload) => {
    return {
        ...state,
        currentMessage: payload.message
    }
};