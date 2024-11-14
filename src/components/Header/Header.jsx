import React, { useContext, useState } from "react";
import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/images/personalLogo.svg";
import darkLogo from "../../assets/images/darkLogo.svg";
import TAB_OPTIONS from "../../enums/tabOptions";
import MenuToggle from "../MenuToggle/MenuToggle";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Header({ handleScrollChange, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1020px" });

  return (
    <section className={styles.main_header} key={theme}>
      <img
        src={theme === "light" ? logo : darkLogo}
        alt="my-logo"
        className={styles.logo_img}
        onClick={(e) => handleScrollChange(e, "WELCOME")}
      />

      <section
        className={`${
          isTabletOrMobile ? styles.mobile_nav_bar : styles.nav_bar
        }`}
      >
        <ThemeToggle />

        {!isTabletOrMobile &&
          Object.entries(TAB_OPTIONS).map(([key, val]) => (
            <button
              key={key}
              onClick={(e) => handleScrollChange(e, key)}
              className={`${styles.nav_btn} ${
                activeTab === val ? styles.active_tab : ""
              }`}
            >
              {val}
            </button>
          ))}
        {isTabletOrMobile && (
          <>
            <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            {isOpen && (
              <div className={styles.mobile_nav_container}>
                {Object.entries(TAB_OPTIONS).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={(e) => {
                      handleScrollChange(e, key);
                      setIsOpen(false);
                    }}
                    className={`${styles.nav_btn} ${
                      activeTab === val ? styles.active_tab : ""
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </section>
  );
}
