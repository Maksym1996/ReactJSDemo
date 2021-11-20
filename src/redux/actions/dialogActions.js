import { ADD_DIALOG_MESSAGE, UPDATE_DIALOG_MESSAGE } from "./actionConst";

export const onAddMessage = () => {
    return {
        type: ADD_DIALOG_MESSAGE
    }
};

export const onUpdateMessage = (message) => {
    return {
        type: UPDATE_DIALOG_MESSAGE,
        message
    }
};