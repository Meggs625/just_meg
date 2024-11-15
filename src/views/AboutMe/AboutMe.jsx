import React from "react";
import styles from "./AboutMe.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import aboutMeData from "../../dataFiles/aboutMeData";
import SlideContainer from "./SlideContainer";
import Slider from "react-slick";
import leftArrow from "../../assets/images/chevron-left.svg";
import rightArrow from "../../assets/images/chevron-right.svg";

export default function AboutMe() {
  const Arrow = (props) => {
    const { onClick, direction, style } = props;
    return (
      <button
        onClick={onClick}
        style={{ ...style, cursor: "pointer", display: "block" }}
        className={`slick-arrow ${
          direction === "left" ? "slick-prev" : "slick-next"
        }`}
      >
        <img
          src={direction === "left" ? leftArrow : rightArrow}
          lt={"arrowTab"}
        />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: true,
    fade: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };
  return (
    <section className={styles.about_me_container}>
      <Slider {...settings} className={styles.slide_container}>
        {aboutMeData.map((slideInfo) => (
          <SlideContainer key={slideInfo.id} slideDetails={slideInfo} />
        ))}
      </Slider>
    </section>
  );
}
