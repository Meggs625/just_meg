import React from 'react';
import styles from './Button.module.scss';

export default function Button({variant, onClick, children}) {
    return (
        <button onClick={onClick} className={styles[variant]}> 
            {children}
        </button>
    )
}