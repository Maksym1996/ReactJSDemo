import React from "react";
import styles from './Preload.module.css';
import preload from '../../../assets/images/preload.gif';

let Preload = (props) => {

    return (
        <div className={styles.preload}>
            <img src={preload} />
        </div>
    )

}

export default Preload;