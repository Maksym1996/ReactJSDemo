import React from "react";
import { useParams } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import { addDialogMessageActionCreator, updateDialogMessageActionCreator } from "../../redux/reducer/dialogReducer";

const Dialogs = (props) => {
    const { message } = useParams();
    if (!!message) {
        return (
            <div>
                {message}
            </div>
        )
    }

    let dialogElements = props.dialogData
        .map(el => <DialogItem id={el.id} name={el.name} />)

    let messageElements = props.messages
        .map(el => <Message text={el.text} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addDialogMessageActionCreator());
    }

    let updateMessage = (elem) => {
        let text = elem.currentTarget.value;
        props.dispatch(updateDialogMessageActionCreator({message: text}))
    }
    console.log(props)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={updateMessage} value={props.currentMessage} placeholder='Enter new message'></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;