import { ADD_DIALOG_MESSAGE } from "../actions/actionConst";

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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            return addDialogMessage(state, action.message);
        default:
            return state;
    }
};

const addDialogMessage = (state, message) => {
    return {
        ...state,
        messageData: [
            ...state.messageData,
            {
                id: state.messageData.length + 1,
                text: message
            }],
    }
};

export default dialogReducer;