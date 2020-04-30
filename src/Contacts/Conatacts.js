import React from 'react';
import styles from './Contacts.module.css';
import Title from "../Title/Title";
import Button from "../Button/Button";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <Title name={"Контакты"}/>
        <div className={styles.inputs}>
          <input placeholder={'Name'}/>
          <input placeholder={'E-mail'}/>
          <textarea placeholder={'Message'} rows='10'></textarea>
        </div>
        <Button value={"Отправить"}/>
      </div>
    </div>
  );
}

export default Contacts;
