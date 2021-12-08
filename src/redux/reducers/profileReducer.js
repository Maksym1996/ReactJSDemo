import { ADD_POST, SET_DISPLAYING_PROFILE, SET_STATUS, UPDATE_POST_MESSAGE } from "../actions/actionConst";

let initialState = {
    postData: [
        { id: 1, message: 'Hi, evetyone!!', likes: 15 },
        { id: 2, message: 'Bye bye all', likes: 20 }
    ],
    currentMessage: '',
    displayingProfile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state);
        case UPDATE_POST_MESSAGE:
            return updatePostText(state, action.message);
        case SET_DISPLAYING_PROFILE:
            return setDispalyingProfile(state, action.profile);
        case SET_STATUS:
            return setStatus(state, action.userStatus)
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

const setDispalyingProfile = (state, profile) => {
    return {
        ...state,
        displayingProfile: profile
    }
}

const setStatus = (state, userStatus) => {
    return {
        ...state,
        status: userStatus
    }
} 