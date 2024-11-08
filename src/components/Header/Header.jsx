import React, { useState } from "react";
import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/images/Logo.png";
import TAB_OPTIONS from "../../enums/tabOptions";
import MenuToggle from "../MenuToggle/MenuToggle";

export default function Header({ handleScrollChange, activeTab }) {

  const [isOpen, setIsOpen] = useState(false);

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1020px'});
  
  return (
    <section className={styles.main_header}>
      <img
        src={logo}
        alt="my-logo"
        className={styles.logo_img}
        onClick={(e) => handleScrollChange(e, "WELCOME")}
      />
      <section className={`${isTabletOrMobile ? styles.mobile_nav_bar : styles.nav_bar}`}>
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
        {isTabletOrMobile && (
        <>
          <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}/>
        </>
        )}
      </section>
    </section>
  );
}
