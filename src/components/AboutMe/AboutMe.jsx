import React from 'react'
import styles from './AboutMe.module.scss';
import profilePic from '../../assets/Profilepic.jpg';

export default function AboutMe() {
    return (
        <section className={styles.about_me_container}>
            <div className={styles.decorative_block_1}/>
            <img src={profilePic} className={styles.profile_pic_image}/>
        </section>
    )
}