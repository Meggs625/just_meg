import React from "react";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({ title, img, alt, link }) {
  return (
    <section className={styles.project_card_container}>
      <a href={link} className={styles.project_link_title} target="blank">
        {title}
      </a>
      <div className={styles.snapshot_container}>
        <img src={img} alt={alt} className={styles.project_snapshot} />
      </div>
    </section>
  );
}
