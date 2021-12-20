import { ADD_DIALOG_MESSAGE, UPDATE_DIALOG_MESSAGE } from "./actionConst";

export const onAddMessage = (message) => {
    return {
        type: ADD_DIALOG_MESSAGE,
        message
    }
};