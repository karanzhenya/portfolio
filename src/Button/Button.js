import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (

        <div className={styles.button}>
            <button>{props.value}</button>
            <div className={styles.line}></div>
        </div>


    )
}

export default Button;
