import React from "react";
import NavLink from "../../NavLink/NavLink";
import styles from './LoginBlock.module.css';

const LoginBlock = (props) => {

    let notAuthored = () => {
        return <NavLink to={'/login'}>Login</NavLink>
    }

    return (
        <div className={styles.loginBlock}>
            {props.isAuth
                ? props.login
                : notAuthored()}
        </div>
    )
}

export default LoginBlock;