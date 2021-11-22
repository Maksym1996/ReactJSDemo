import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import { useParams } from "react-router-dom";

const Dialogs = (props) => {
    let { message } = useParams();
    if(!!message){
        return message
    }
    let dialogElements = props.usersData
        .map(el => <DialogItem key={el.id} id={el.id} name={el.name} />)

    let messageElements = props.messagesData
        .map(el => <Message key={el.id} text={el.text} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.onAddMessage();
    }

    let updateMessage = (elem) => {
        let text = elem.currentTarget.value;
        props.onUpdateMessage(text);
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
                <textarea ref={newMessageElement} onChange={updateMessage} value={props.currentMessage} placeholder='Enter new message'></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;