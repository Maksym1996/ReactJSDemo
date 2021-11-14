import { ADD_DIALOG_MESSAGE, UPDATE_DIALOG_MESSAGE } from "./actionConst";

export const addDialogMessageActionCreator = () => {
    return {
        type: ADD_DIALOG_MESSAGE
    }
}
export const updateDialogMessageActionCreator = (payload) => {
    console.log('upsdate', payload)
    return {
        type: UPDATE_DIALOG_MESSAGE,
        payload: payload
    }
}

const dialogReducer = (state, action) => {
    switch(action.type){
        case ADD_DIALOG_MESSAGE: 
            return addDialogMessage(state, action.payload);
        case UPDATE_DIALOG_MESSAGE: 
            return updateDialogMessage(state, action.payload); 
        default:
             return state;
    }
} 

let dialogID = 4;

const addDialogMessage = (state, payload) => {
    let text = state.dialogComponent.currentMessage;
    if(!text){
        alert('Please enter message');
        return state;
    }
    let newObj = {
        id: dialogID,
        text: text
    };
    state.dialogComponent.messageData.push(newObj);
    state.dialogComponent.currentMessage = '';
    
    return state;
};

const updateDialogMessage = (state, payload) => {
    state.dialogComponent.currentMessage = payload.message;

    return state;
};

export default dialogReducer;