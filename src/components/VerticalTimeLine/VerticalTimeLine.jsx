import React from "react";
import styles from "./VerticalTimeLine.module.scss";

export default function VerticalTimeLine() {
  return (
    <div className={styles.timeline_wrapper}>
      <p>2024</p>
      <div className={styles.vertical_bar} />

      <p className={styles.floating_intrado_date}>2021</p>
      <p className={styles.floating_tofwerk_date}>2022</p>
      <div className={styles.elapse_time} />
      <p>2013</p>
    </div>
  );
}
