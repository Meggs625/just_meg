import React from 'react';
import styles from './Projects.module.scss';
import {motion} from "framer-motion";
import Title from '../../components/Title/Title';

export default function Projects() {
    const sentence = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1, 
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
                repeat: Infinity, 
                duration: 2
            },
        },
    };

    const letter = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            },
        },
    }
    return (
    <section className={styles.projects_wrapper}>
        <Title variant="1">My Projects</Title>
        <div className={styles.project_description_container}>
            <motion.h3 variants={sentence} initial="hidden" animate="visible">
                {"Coming Soon!".split("").map((char, index) => {
                return (
                    <motion.span key={`${char} ${index}`} variants={letter}>{char}</motion.span>
                    )}
                    )}
            </motion.h3>
        </div>

    </section>
)
}