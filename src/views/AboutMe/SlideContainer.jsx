import React from "react";
import styles from "./SlideContainer.module.scss";

export default function SlideContainer({ slideDetails }) {
  const { title, imgSrc, alt, description, link, linkText } = slideDetails;
  return (
    <section className={styles.slide_wrapper}>
      <h1>{title}</h1>
      <div className={styles.detail_container}>
        <div className={styles.img_container}>
          <img src={imgSrc} alt={alt} />
        </div>
        <div className={styles.description_container}>
          <p>{description} {link && <a href={link} target="_blank">{linkText}.</a>}</p>           
        </div>
      </div>
    </section>
  );
}
