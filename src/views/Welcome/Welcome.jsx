import React from "react";
import { motion } from "framer-motion";
import styles from "./Welcome.module.scss";
import purpleFlower from "../../assets/images/purpleFlower.png";
import { ReactTyped } from "react-typed";
import Footer from "../../components/Footer/Footer";

export default function Welcome() {
  return (
    <section className={styles.welcome_container}>
      <div className={styles.main_welcome_content}>
        <div
          className={styles.flower_container}
          animate={{ rotate: 30 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src={purpleFlower}
            alt="purple-flower"
            className={styles.background_flower}
          />
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
              "recovering perfectionist",
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
