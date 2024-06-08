import React from 'react'
import styles from './Welcome.module.scss';
import profilePic from '../../assets/Profilepic.jpg';

export default function Welcome() {
    return (
        <section className={styles.about_me_container}>
            <div>
                <div className={styles.decorative_block_1}/>
                <div className={styles.decorative_block_2}/>
                <img src={profilePic} className={styles.profile_pic_image}/>
            </div>
            <div>
                <h1 className={styles.welcome_text}>WELCOME! I'm Meg, a developer, mother, and food appreciator</h1>
            </div>
        </section>
    )
}