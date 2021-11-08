import React from "react";
import { useParams } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={props.link}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    );
}

const Dialogs = (props) => {
    const { message } = useParams();
    if (!!message) {
        return (
            <div>
                {message}
            </div>
        )
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem link='/dialogs/1' name='Andrey' />
                <DialogItem link='/dialogs/2' name='Maksym' />
                <DialogItem link='/dialogs/3' name='Vitalii' />
                <DialogItem link='/dialogs/4' name='Oksana' />
            </div>
            <div className={s.messages}>
                <Message text='  Hi, everyone!'/>
                <Message text='What&#39;s wrong?'/>
                <Message text='All ok!'/>
            </div>
        </div>
    )
}

export default Dialogs;