import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <a href="" className={styles.link}>Главная</a>
            <a href="" className={styles.link}>Скилы</a>
            <a href="" className={styles.link}>Проекты</a>
            <a href="" className={styles.link}>Контакты</a>
        </div>
    );
}

export default Navbar;
