import React from 'react';
import styles from './Title.module.scss';

export default function Title({variant, children}) {

    const TitleTag = `h${variant}`;
    const specificClassName = `heading${variant}`;

    if(variant < 1 || variant > 6) {
        throw new Error(`Invalid variant value: ${variant}. Expected: 1- 6`)
    }

    return (
        <TitleTag className={styles[specificClassName]}>{children}</TitleTag>
    )
}