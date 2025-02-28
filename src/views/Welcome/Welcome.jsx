import React, { useContext } from "react";
import styles from "./Welcome.module.scss";
import { ReactTyped } from "react-typed";
import Footer from "../../components/Footer/Footer";
import { ThemeContext } from "../../context/ThemeProvider";
import mePic from "../../assets/images/jacadranda_pic.jpg"

export default function Welcome() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={styles.welcome_container}>
      <div className={styles.main_welcome_content}>
        <div className={styles.descriptive_container}>
          <h1>HELLO!</h1>
          <h2>I'm Megan,</h2>
          <ReactTyped
            typeSpeed={50}
            backSpeed={50}
            strings={[
              "passionate developer",
              "creative mind",
              "avid learner",
              "bibliophile",
            ]}
            loop={true}
            style={{ fontSize: "1.5em" }}
          />
        </div>
        <div className={styles.pic_container}>
          <img src={mePic}/>
        </div>
      </div>
      <Footer />
    </section>
  );
}
