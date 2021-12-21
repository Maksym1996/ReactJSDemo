import { ADD_POST, SET_DISPLAYING_PROFILE, SET_STATUS } from "../actions/actionConst";

let initialState = {
    postData: [
        { id: 1, message: 'Hi, evetyone!!', likes: 15 },
        { id: 2, message: 'Bye bye all', likes: 20 }
    ],
    displayingProfile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.postMessage);
        case SET_DISPLAYING_PROFILE:
            return setDispalyingProfile(state, action.profile);
        case SET_STATUS:
            return setStatus(state, action.userStatus)
        default:
            return state;
    }
};

export default profileReducer;


const addPost = (state, postMessage) => {
    let newID = state.postData.length + 1;

    return {
        ...state,
        postData: [
            ...state.postData,
            {
                id: newID,
                message: postMessage,
                likes: newID
            }]
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