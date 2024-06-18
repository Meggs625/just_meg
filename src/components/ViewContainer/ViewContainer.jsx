import React, { forwardRef } from "react";
import styles from './ViewContainer.module.scss';

export default forwardRef(function ViewContainer({changeActiveTab, id, children}, ref) {


    return (
        <section className={styles.wrapper} ref={ref}>{children}</section>
    )
});
