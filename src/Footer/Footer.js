import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.name}>
                    Karan Evgeniy
                </span>
                <div className={styles.social}>
                    <div className={styles.icons}></div>
                    <div className={styles.icons}></div>
                    <div className={styles.icons}></div>
                </div>
                <div className={styles.copyright}>
                    ©2020 Все права защищены
                </div>
            </div>
        </div>
    );
}

export default Footer;
