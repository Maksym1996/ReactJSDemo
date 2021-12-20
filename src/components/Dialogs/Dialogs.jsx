import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'
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

    const onSubmit = (formData) => {
        console.log(formData)
        props.onAddMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <AddMessageForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Dialogs;