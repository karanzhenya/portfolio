import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import Title from "../Title/Title";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <Title name={"Мои проекты"}/>
                <div className={styles.blocks}>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
