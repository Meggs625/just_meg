import React, { useState } from 'react';
import styles from './Header.module.scss';
import nameLogo from '../../assets/McBrideLogo.png';

const TAB_OPTIONS = {
    ABOUT: "About Me",
    PROJECTS: "Projects",
    HISTORY: "Work History"
}

export default function Header() {
    const [currentTab, setCurrentTab] = useState(TAB_OPTIONS.ABOUT)
    return (
        <section className={styles.main_header}>
        <img src={nameLogo} alt="my-logo" className={styles.logo_img} />
        <section className={styles.nav_bar}>
            {Object.entries(TAB_OPTIONS).map(([key, val]) => (
                <p key={key}>{val}</p>
            ))}

        </section>
        </section>
    )
}

//Next up - just installed Framer motion, see about setting up the nav-bar tabs to show the active stylings when the currentTab === the key