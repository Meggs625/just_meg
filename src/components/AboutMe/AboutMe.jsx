import React from 'react'
import styles from './AboutMe.module.scss';
import profilePic from '../../assets/Profilepic.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default function AboutMe() {
    return (
        <section className={styles.about_me_container}>
              <AwesomeSlider animation="cubeAnimation">
    <div className={styles.fake_div}/>
    <div className={styles.fake_div}/>
    <div className={styles.fake_div}/>
  </AwesomeSlider>
            {/* <div className={styles.decorative_block_1}/>
            <img src={profilePic} className={styles.profile_pic_image}/> */}
        </section>
    )
}