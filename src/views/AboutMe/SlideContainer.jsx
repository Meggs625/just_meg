import React from "react";
import styles from "./SlideContainer.module.scss";

export default function SlideContainer({ slideDetails }) {
  const { title, imgSrc, alt, description, link, linkText } = slideDetails;
  const [description1, description2] = description.split(' | ');
  return (
    <section className={styles.slide_wrapper}>
      <h1 className={styles.slide_header}>{title}</h1>
      <div className={styles.detail_container}>
        <div className={styles.img_container}>
          <img src={imgSrc} alt={alt} />
        </div>
        <div className={styles.description_container}>
          <p>
            {description1}
          </p>
          <p>
            {description2}{" "}
              {link && (
              <a href={link} target="_blank">
                {linkText}.
              </a>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
