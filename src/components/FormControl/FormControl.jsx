import React from "react";
import styles from "./FormControl.module.css";

const FormControl = (Element) => ({ input, meta, ...restProps }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                <Element {...input} {...restProps} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = FormControl("textarea");
export const Input = FormControl("input");