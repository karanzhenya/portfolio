import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill'
import Title from "../Title/Title";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title name={"Мои скилы"}/>
                <div className={styles.block}>
                    <Skill name={'React'}/>
                    <Skill name={'JavaScript'}/>
                    <Skill name={'HTML/CSS'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
