import { ADD_DIALOG_MESSAGE, UPDATE_DIALOG_MESSAGE } from "./actionConst";

export const addDialogMessage = () => {
    return {
        type: ADD_DIALOG_MESSAGE
    }
};

export const updateDialogMessage = (payload) => {
    console.log('upsdate', payload)
    return {
        type: UPDATE_DIALOG_MESSAGE,
        payload: payload
    }
};