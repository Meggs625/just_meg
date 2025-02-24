import React, { useContext } from "react";
import styles from "./Welcome.module.scss";
import purpleFlower from "../../assets/images/flower.svg";
import pinkFlower from "../../assets/images/pinkFlower.svg";
import { ReactTyped } from "react-typed";
import Footer from "../../components/Footer/Footer";
import { ThemeContext } from "../../context/ThemeProvider";
import mePic from "../../assets/images/jacadranda_pic.jpg"

export default function Welcome() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={styles.welcome_container}>
      <div className={styles.main_welcome_content}>
        <div className={styles.pic_flower_container}>
          <div className={styles.pic_container}>
            <img src={mePic}/>
          </div>
          <div className={styles.flower_container}>
            <img
              src={theme === "light" ? purpleFlower : pinkFlower}
              alt="flower"
              className={styles.background_flower}
            />
          </div>
        </div>
        <div className={styles.descriptive_container}>
          <h1>HELLO!</h1>
          <h2>I'm Meg,</h2>
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
      </div>
      <Footer />
    </section>
  );
}
