import React from 'react';
import styles from './Slogan.module.css';
import Title from "../Title/Title";
import Button from "../Button/Button"

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
              <Title name={"Click to hire me!"}/>
              <Button value={"Нанять"}/>
            </div>
        </div>
    );
}

export default Slogan;
