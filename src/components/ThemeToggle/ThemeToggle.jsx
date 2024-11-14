import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./ThemeToggle.module.scss";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.png";
import { ThemeContext } from "../../context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <motion.button
      className={styles.theme_btn}
      onClick={changeTheme}
      key={`${theme} image`}
      initial={{
        opacity: 1,
        y: 25,
      }}
      animate={{
        opactiy: 0,
        y: 0,
      }}
      exit={{
        opactiy: 0,
        y: 0,
      }}
    >
      <img
        src={theme === "light" ? moon : sun}
        alt={theme === "light" ? "dark mode" : "light mode"}
      />
    </motion.button>
  );
}
