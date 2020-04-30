import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hello!</span>
                    <span>My name  is Evgeniy Karan</span>
                    <span>I am front-end developer</span>
                </div>
                <div className={styles.photo}>
                    <img src="" alt=""/>
                </div>

            </div>
        </div>
    );
}

export default Main;
