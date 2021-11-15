import React from "react";
import { addDialogMessage, updateDialogMessage } from "../../redux/actions/dialogActions";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let dialogState = props.store.getState().dialogComponent;
    let dialogDispatch = props.store.dispatch;

    let usersData = dialogState.dialogData;

    let messageData = dialogState.messageData;

    let currentMessage = dialogState.currentMessage;

    let addMessage = () => {
        dialogDispatch(addDialogMessage());
    }

    let updateMessage = (value) => {
        dialogDispatch(updateDialogMessage({ message: value }))
    }

    return (
        <Dialogs usersData={usersData}
            messagesData={messageData}
            currentMessage={currentMessage}
            onAddMessage={addMessage}
            onUpdateMessage={updateMessage}
        />
    )
}

export default DialogsContainer;