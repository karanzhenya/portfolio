import React from 'react';
import styles from './Skill.module.css';

function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="" alt=""/>
                </div>
                <div className={styles.title}>{props.name}</div>
                <div className={styles.description}>
                    JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                </div>
            </div>
        </div>
    );
}

export default Skill;
