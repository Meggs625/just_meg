import React from 'react';
import styles from './Header.module.scss';
import nameLogo from '../../assets/McBrideLogo.png';
import TAB_OPTIONS from '../../enums/tabOptions';

export default function Header({currentTab, changeTab}) {
    return (
        <section className={styles.main_header}>
        <img src={nameLogo} alt="my-logo" className={styles.logo_img} />
        <section className={styles.nav_bar}>
            {Object.entries(TAB_OPTIONS).map(([key, val]) => (
                <button key={key} onClick={() => changeTab(key)} className={`${styles.nav_btn} ${currentTab === val ? styles.active_tab : ''}`}>{val}</button>
            ))}

        </section>
        </section>
    )
}