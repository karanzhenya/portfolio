import React from 'react';
import styles from './Project.module.css';
import Button from "../Button/Button";

function Project() {
    return (
        <div className={styles.project}>
                <div className={styles.logo}>
                    <img src="" alt=""/>
                </div>
                <Button value={"Смотреть"}/>
                <div className={styles.title}>Название проекта
                </div>
                <div className={styles.description}>Краткое описание проекта
                </div>
            </div>
    );
}

export default Project;
