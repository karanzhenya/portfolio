import React from 'react';
import styles from './Title.module.css';

function Title(props) {
    return (
        <div className={styles.title}>
            <h2 className={styles.titleName}>
                {props.name}
            </h2>
            <div className={styles.line}></div>
        </div>
    )
}

export default Title;
