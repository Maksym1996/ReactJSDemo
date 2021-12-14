import React from "react";
import styles from "./ErrorMessage.module.css"

const ErrorMessage = (props) => {
    return (
        <p className={styles.error}>
            {props.message}
        </p>
    )
}

export default ErrorMessage;