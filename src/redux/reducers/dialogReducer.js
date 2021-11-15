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

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            return addDialogMessage(state, action.payload);
        case UPDATE_DIALOG_MESSAGE:
            return updateDialogMessage(state, action.payload);
        default:
            return state;
    }
};


let dialogID = 4;

const addDialogMessage = (state, payload) => {
    let text = state.currentMessage;
    if (!text) {
        alert('Please enter message');
        return state;
    }
    let newObj = {
        id: dialogID,
        text: text
    };
    state.messageData.push(newObj);
    state.currentMessage = '';

    return state;
};

const updateDialogMessage = (state, payload) => {
    state.currentMessage = payload.message;

    return state;
};