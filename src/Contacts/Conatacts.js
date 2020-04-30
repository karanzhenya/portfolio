import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.title}>Contacts</div>
        <div className={styles.inputs}>
          <input placeholder={'Name'}/>
          <input placeholder={'E-mail'}/>
          <textarea placeholder={'Message'} rows='10'></textarea>
        </div>
        <div className={styles.button}>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
