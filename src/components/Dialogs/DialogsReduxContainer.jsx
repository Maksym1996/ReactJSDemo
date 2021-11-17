import { connect } from 'react-redux';
import { addDialogMessage, updateDialogMessage } from "../../redux/actions/dialogActions";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    let dialogState = state.dialogComponent;
    return {
        usersData: dialogState.dialogData,
        messagesData: dialogState.messageData,
        currentMessage: dialogState.currentMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addDialogMessage());
        },
        onUpdateMessage: (value) => {
            dispatch(updateDialogMessage({ message: value }))
        }
    }
}

const DialogsReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsReduxContainer;