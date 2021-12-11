import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { onAddMessage, onUpdateMessage } from "../../redux/actions/dialogActions";
import Dialogs from "./Dialogs";

const DialogsReduxContainer = (props) => {
    return <Dialogs {...props} />;
}

let mapStateToProps = (state) => {
    let dialogState = state.dialogComponent;
    return {
        usersData: dialogState.dialogData,
        messagesData: dialogState.messageData,
        currentMessage: dialogState.currentMessage,
    }
}
let mapDispatchToProps = {
    onAddMessage, onUpdateMessage
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsReduxContainer)