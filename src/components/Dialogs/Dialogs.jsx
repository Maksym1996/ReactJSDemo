import React from "react";
import { useParams } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'

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
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;