import React from 'react'
import styles from './AboutMe.module.scss';
import aboutMeData from '../../dataFiles/aboutMeData';
import SlideContainer from './SlideContainer';
import Slider from 'react-slick';

export default function AboutMe() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <section className={styles.about_me_container}>
              <Slider {...settings} className={styles.slide_container}>
                {aboutMeData.map((slideInfo) => ( <SlideContainer key={slideInfo.id} slideDetails={slideInfo}/>
                ))}
 
            </Slider>
        </section>
    )
}