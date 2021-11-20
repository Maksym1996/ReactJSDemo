import { ADD_DIALOG_MESSAGE, UPDATE_DIALOG_MESSAGE } from "../actions/actionConst";

let initialState = {
    dialogData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Maksym' },
        { id: 3, name: 'Vitalii' },
        { id: 4, name: 'Oksana' }
    ],
    messageData: [
        { id: 1, text: 'Hi, everyone!' },
        { id: 2, text: 'What\'s wrong?' },
        { id: 3, text: 'All ok!' }
    ],
    currentMessage: ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            return addDialogMessage(state);
        case UPDATE_DIALOG_MESSAGE:
            return updateDialogMessage(state, action.message);
        default:
            return state;
    }
};

export default dialogReducer;

const addDialogMessage = (state) => {
    let text = state.currentMessage;
    if (!text) {
        alert('Please enter message');
        return state;
    }
    return {
        ...state,
        messageData: [
            ...state.messageData,
            {
                id: state.messageData.length + 1,
                text: state.currentMessage
            }],
        currentMessage: ''
    }
};

const updateDialogMessage = (state, message) => {
    return {
        ...state,
        currentMessage: message
    }
};