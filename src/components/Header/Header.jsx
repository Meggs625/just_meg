import React from "react";
import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/images/Logo.png";
import TAB_OPTIONS from "../../enums/tabOptions";

export default function Header({ handleScrollChange, activeTab }) {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1020px'});
  
  return (
    <section className={styles.main_header}>
      <img
        src={logo}
        alt="my-logo"
        className={styles.logo_img}
        onClick={(e) => handleScrollChange(e, "WELCOME")}
      />
      <section className={styles.nav_bar}>
        {!isTabletOrMobile && (Object.entries(TAB_OPTIONS).map(([key, val]) => (
          <button
            key={key}
            onClick={(e) => handleScrollChange(e, key)}
            className={`${styles.nav_btn} ${
              activeTab === val ? styles.active_tab : ""
            }`}
          >
            {val}
          </button>
        )))}
        {isTabletOrMobile && <h1>Menu</h1>}
      </section>
    </section>
  );
}
