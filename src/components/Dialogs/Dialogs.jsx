import React from "react";
import { useParams } from "react-router-dom";
import NavLink from "../../util/NavLink/NavLink";
import s from './Dialogs.module.css';

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
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>AndMaksymrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Vitalii</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Oksana</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi, everyone!
                </div>
                <div className={s.message}>
                    What's wrong?
                </div>
                <div className={s.message}>
                    All ok!
                </div>
            </div>
        </div>
    )
}

export default Dialogs;