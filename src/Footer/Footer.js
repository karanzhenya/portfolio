import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.name}>
                    Karan Evgeniy
                </div>
                <div className={styles.social}>
                    <div className={styles.vk}>vk.com</div>
                    <div className={styles.telegram}>telegram</div>
                    <div className={styles.viber}>viber</div>
                </div>
                <div className={styles.copyright}>
                    ©2020 Все права защищены
                </div>
            </div>
        </div>
    );
}

export default Footer;
