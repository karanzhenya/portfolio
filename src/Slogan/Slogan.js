import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
              <div className={styles.call}>Click to hire me!</div>
              <div className="button">
                <button>Отправить</button>
              </div>
            </div>
        </div>
    );
}

export default Slogan;
