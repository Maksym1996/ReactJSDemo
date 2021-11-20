import { connect } from 'react-redux';
import { onAddMessage, onUpdateMessage } from "../../redux/actions/dialogActions";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    let dialogState = state.dialogComponent;
    return {
        usersData: dialogState.dialogData,
        messagesData: dialogState.messageData,
        currentMessage: dialogState.currentMessage
    }
}

let mapDispatchToProps = {
    onAddMessage, onUpdateMessage
}
const DialogsReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsReduxContainer;