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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;