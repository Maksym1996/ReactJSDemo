import React from "react";
import Context from "../../Context";
import { addDialogMessage, updateDialogMessage } from "../../redux/actions/dialogActions";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

   

    return (
        <Context.Consumer>
            {
                (store) => {
                    let dialogState = store.getState().dialogComponent;
                    let dialogDispatch = store.dispatch;

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
            }
        </Context.Consumer>
       
    )
}

export default DialogsContainer;