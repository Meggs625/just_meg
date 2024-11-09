import React, { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.png";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const existingTheme = localStorage.getItem("theme");

    if (existingTheme) setIsLight(existingTheme);
  }, []);

  const changeTheme = () => {
    setIsLight(!isLight);
    localStorage.setItem("theme", !isLight);
  };

  //Context update? Store in context?
  return (
    <button className={styles.theme_btn} onClick={changeTheme}>
      <img
        src={isLight ? moon : sun}
        alt={isLight ? "dark mode" : "light mode"}
      />
    </button>
  );
}
