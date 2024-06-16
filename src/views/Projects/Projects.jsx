import React from 'react';
import styles from './Projects.module.scss';
import comingSoon from '../../assets/projectsSoon.jpg';
import Title from '../../components/Title/Title';

export default function Projects() {
    return (
    <section className={styles.projects_wrapper}>
        <Title variant="1">My Projects</Title>
        <div className={styles.img_container}>
        <img src={comingSoon} className={styles.coming_soon}/>
        </div>
    </section>
)
}