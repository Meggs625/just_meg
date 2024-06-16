import React from 'react';
import styles from './Card.module.scss';

export default function Card({children}) {

    return (
        <section className={styles.card_wrapper}>
            {children}
        </section>
    )
}